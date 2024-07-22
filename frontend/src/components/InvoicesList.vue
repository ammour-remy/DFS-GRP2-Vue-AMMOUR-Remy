<template>
    <div class="invoices-list">
      <h2>Factures en cours</h2>
      <table class="table" v-if="invoices.length">
        <thead>
          <tr>
            <th>N°</th>
            <th>Client</th>
            <th>Montant HT</th>
            <th>Montant TTC</th>
            <th class="d-flex justify-content-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="invoice in invoices" :key="invoice.id">
            <td>{{ invoice.billnum }}</td>
            <td>{{ invoice.client.companyName }}</td>
            <td>{{ invoice.totalHT }} €</td>
            <td>{{ invoice.totalTTC }} €</td>
            <td class="d-flex justify-content-center">
            <button @click="editInvoice(invoice.id)" class="btn btn-outline-info">
              <i class="fa-solid fa-pen me-2" />Éditer
            </button>
          </td>
          </tr>
        </tbody>
      </table>
      <p v-else>Chargement des factures...</p>
    </div>
  </template>
  
  <script>
  import { useBillStore } from '@/stores/bill'
  import { mapState } from 'pinia'
  
  export default {
    name: 'InvoicesList',
    computed: {
      ...mapState(useBillStore, ['items']),
      invoices() {
      return this.items
        ? this.items.slice().sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5)
        : [];
    }
    },
    methods: {
      editInvoice(id) {
        this.$router.push({ name: 'edit-bill', params: { id } })
      }
    },
    mounted() {
      const store = useBillStore();
      store.getItems();
    }
  }
  </script>
  
  <style scoped>
  .invoices-list {
    margin-top: 20px;
  }
  
  .invoices-list h2 {
    margin-bottom: 10px;
  }
  
  .table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .table th, .table td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  
  .table th {
    background-color: #f2f2f2;
  }
  </style>
  