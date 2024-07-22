<template>
  <div class="home">
    <h1 class="h3"><i class="fa-solid fa-angle-down me-2" />Dashboard</h1>
    <div class="row">
      <DashboardChart />
      <div class="col-8">

        <InvoicesList />
        <ClientsList />
      </div>
    </div>
  </div>
</template>

<script>
import DashboardChart from '@/components/DashboardChart.vue'
import InvoicesList from '@/components/InvoicesList.vue'
import ClientsList from '@/components/ClientsList.vue'

export default {
  name: 'HomeView',
  components: {
    DashboardChart,
    InvoicesList,
    ClientsList
  }
}
</script>

<style scoped>
.home {
  padding: 20px;
}

.dashboard {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.dashboard > * {
  flex: 1;
}
</style>
