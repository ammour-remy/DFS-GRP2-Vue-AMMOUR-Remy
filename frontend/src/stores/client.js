import { clientInterface } from '@/interfaces/client';
import { defineStore } from 'pinia';

export const useClientStore = defineStore('client', {
  state: () => ({
    items: null, // La liste des clients utilisée dans ClientsView
    item: null, // Formulaire d'édition utilisé dans CreateEditClientView
    loading: false // Un simple boolean pour indiquer le chargement des données
  }),
  getters: {},
  actions: {
    // Charger la liste des clients depuis la route d'API GET http://127.0.0.1/clients
    async getItems() {
      console.log('fetch clients');
      this.loading = true;
      try {
        const response = await this.$http.get('/clients');
        this.items = response.data;
        this.loading = false;
      } catch (error) {
        console.error(error);
        this.loading = false;
      }
    },

    // Récupérer le client correspondant à l'id et enregistrer le résultat dans le store des clients
    async setItem(id) {
      if (id === 'new') {
        // Si c'est un nouveau client, utiliser un objet neuf de l'interface client
        this.item = { ...clientInterface };
      } else {
        // Sinon, utiliser les données du client existant dans la liste des clients
        this.loading = true;
        try {
          const response = await this.$http.get('/clients/' + id);
          this.item = response.data;
          this.loading = false;
        } catch (error) {
          console.error(error);
          this.loading = false;
        }
      }
    },

    // Mise à jour d'un client
    async updateItem(form) {
      this.loading = true;
      try {
        const response = await this.$http.patch('/clients/' + form.id, form);
        console.log(response.data);
        // Rafraîchir la liste des clients
        await this.getItems();
        this.loading = false;
      } catch (error) {
        console.error(error);
        this.loading = false;
      }
    },

    // Création d'un nouveau client
    async createItem(form) {
      this.loading = true;
      try {
        const response = await this.$http.post('/clients', form);
        console.log(response.data);
        // Rafraîchir la liste des clients
        await this.getItems();
        this.loading = false;
      } catch (error) {
        console.error(error);
        this.loading = false;
      }
    },

    // Suppression d'un client
    async deleteItem(id) {
      this.loading = true;
      try {
        const response = await this.$http.delete('/clients/' + id);
        // Rafraîchir la liste des clients
        await this.getItems();
        console.log(response.data);
        this.loading = false;
      } catch (error) {
        console.error(error);
        this.loading = false;
      }
    }
  }
});
