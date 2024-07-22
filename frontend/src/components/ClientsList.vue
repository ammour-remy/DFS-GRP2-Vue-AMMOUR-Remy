<template>
  <div class="clients-list">
    <h2>Clients</h2>
    <table class="table" v-if="clients.length">
      <thead>
        <tr>
          <th>Nom du contact</th>
          <th>Entreprise</th>
          <th>Date d'ajout</th>
          <th  class="d-flex justify-content-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="client in clients" :key="client.id">
          <td>{{ client.firstName }} {{ client.lastName }}</td>
          <td>{{ client.company }}</td>
          <td>{{ client.date || 'non defini' }}</td>
          <td class="d-flex justify-content-center">
            <button @click="editClient(client.id)" class="btn btn-outline-info">
              <i class="fa-solid fa-pen me-2" />Éditer
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>Chargement des clients...</p>
  </div>
</template>

<script>
import { useClientStore } from '@/stores/client'
import { mapState } from 'pinia'

export default {
  name: 'ClientsList',
  computed: {
    ...mapState(useClientStore, ['items']),
    clients() {
      return this.items
        ? this.items.slice().sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5)
        : [];
    }
  },
  methods: {
    editClient(id) {
      this.$router.push({ name: 'edit-client', params: { id } });
    }
  },
  mounted() {
    const store = useClientStore();
    store.getItems().then(() => {
    });
  }
}
</script>

<style scoped>
.clients-list {
  margin-top: 20px;
}

.clients-list h2 {
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
