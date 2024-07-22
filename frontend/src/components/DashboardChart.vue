<template>
  <div class="chart-container">
    <h2>{{ totalBills }} Factures en 2023</h2>
    <PieChart v-if="chartData && chartData.datasets && chartData.datasets[0].data.length" :data="chartData" :options="chartOptions" />
    <ul>
      <li>Total Encaissée TTC - {{ totalEncaissee }}%</li>
      <li>Total Facturé TTC - {{ totalFacture }}%</li>
      <li>Dû à plus d'un mois TTC - {{ duMois }}%</li>
    </ul>
  </div>
</template>

<script>
import { Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale } from 'chart.js'
import { useBillStore } from '@/stores/bill'
import { mapState } from 'pinia'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

export default {
  name: 'DashboardChart',
  components: {
    PieChart: Pie
  },
  computed: {
    ...mapState(useBillStore, ['items']),
    totalSumTTC() {
      return this.items ? this.items.reduce((sum, item) => sum + item.totalTTC, 0) : 0;
    },
    deuxDernieresFacturesPaid() {
      const deuxDernieresFactures = this.items.slice(-2);
      return deuxDernieresFactures.reduce((sum, item) => sum + item.paid, 0);
    },
    totalPaidSansDeuxDernieres() {
      const autresFactures = this.items.slice(0, -2);
      return autresFactures.reduce((sum, item) => sum + item.paid, 0);
    },
    totalEncaissee() {
      return this.totalSumTTC ? ((this.totalPaidSansDeuxDernieres / this.totalSumTTC) * 100).toFixed(1) : 0;
    },
    duMois() {
      return this.totalSumTTC ? ((this.deuxDernieresFacturesPaid / this.totalSumTTC) * 100).toFixed(1) : 0;
    },
    totalFacture() {
      return this.totalSumTTC ? (100 - this.totalEncaissee - this.duMois).toFixed(1) : 0;
    },
    chartData() {
      if (!this.items) return null;
      return {
        labels: ['Total Encaissée TTC', 'Total Facturé TTC', 'Dû à plus d\'un mois TTC'],
        datasets: [
          {
            backgroundColor: ['#36a2eb', '#ffcd56', '#f87979'],
            data: [this.totalEncaissee, this.totalFacture, this.duMois]
          }
        ]
      }
    },
    chartOptions() {
      return {
        responsive: true,
        maintainAspectRatio: false
      }
    },
    totalBills() {
      return this.items ? this.items.length : 0
    }
  },
  mounted() {
    const store = useBillStore();
    store.getItems();
  }
}
</script>

<style scoped>
.chart-container {
  width: 300px;
  height: 300px;
  margin: auto;
}

.chart-container h2 {
  text-align: center;
}
</style>
