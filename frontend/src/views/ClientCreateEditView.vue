<template>
    <div>
      <div class="client" v-if="!loading && client">
        <div class="row border-bottom pb-3 mb-3">
          <div class="col">
            <h1 v-if="isNewClient" class="h3">
              <i class="fa-solid fa-angle-down me-2" />Créer un client
            </h1>
            <h1 v-else class="h3"><i class="fa-solid fa-angle-down me-2" />Editer un client</h1>
          </div>
          <div class="col text-end">
            <button @click="onDeleteClient(client)" class="btn btn-outline-danger me-2" v-if="!isNewClient">
              <i class="fa-solid fa-trash me-2" />
              Supprimer le client
            </button>
            <button @click="onBackToList" class="btn btn-outline-secondary">
              <i class="fa-solid fa-arrow-left me-2" />
              Retour
            </button>
          </div>
        </div>
  
        <div class="alert alert-danger my-3" v-if="error">Un champ requière votre attention</div>
  
        <div>
          <h2>Contact</h2>
          <div class="row">
            <div class="col-md-4">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  v-model="client.firstName"
                  class="form-control"
                  placeholder="Prénom"
                  :class="{ 'is-invalid': !client.firstName }"
                />
                <label for="firstName" class="form-label">Prénom</label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  name="lastName"
                  id="lastName"
                  v-model="client.lastName"
                  class="form-control"
                  placeholder="Nom"
                  :class="{ 'is-invalid': !client.lastName }"
                />
                <label for="lastName" class="form-label">Nom</label>
              </div>
            </div>
            <div class="col-md-4" v-if="isNewClient">
              <div class="form-floating mb-3">
                <input
                  type="date"
                  name="date"
                  id="date"
                  v-model="client.date"
                  class="form-control"
                  placeholder="Date d'ajout"
                  :class="{ 'is-invalid': !client.date }"
                />
                <label for="date" class="form-label">Date d'ajout</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  name="function"
                  id="function"
                  v-model="client.function"
                  class="form-control"
                  placeholder="Fonction"
                  :class="{ 'is-invalid': !client.function }"
                />
                <label for="function" class="form-label">Fonction</label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  v-model="client.phone"
                  class="form-control"
                  placeholder="Téléphone"
                  :class="{ 'is-invalid': !client.phone }"
                />
                <label for="phone" class="form-label">Téléphone</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-8">
              <div class="form-floating mb-3">
                <input
                  type="email"
                  name="email"
                  id="email"
                  v-model="client.email"
                  class="form-control"
                  placeholder="Email"
                  :class="{ 'is-invalid': !client.email }"
                />
                <label for="email" class="form-label">Email</label>
              </div>
            </div>
            <div class="col-md-8">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  name="company"
                  id="company"
                  v-model="client.company"
                  class="form-control"
                  placeholder="Entreprise"
                  :class="{ 'is-invalid': !client.company }"
                />
                <label for="company" class="form-label">Entreprise</label>
              </div>
            </div>
          </div>
        </div>
  
        <div>
          <h2>Coordonnées</h2>
          <div class="row">
            <div class="col-md-8">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  name="address1"
                  id="address1"
                  v-model="client.address1"
                  class="form-control"
                  placeholder="Adresse 1"
                  :class="{ 'is-invalid': !client.address1 }"
                />
                <label for="address1" class="form-label">Adresse 1</label>
              </div>
            </div>
            <div class="col-md-8">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  name="address2"
                  id="address2"
                  v-model="client.address2"
                  class="form-control"
                  placeholder="Adresse 2"
                />
                <label for="address2" class="form-label">Adresse 2</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  name="postalCode"
                  id="postalCode"
                  v-model="client.postalCode"
                  class="form-control"
                  placeholder="Code postal"
                  :class="{ 'is-invalid': !client.postalCode }"
                />
                <label for="postalCode" class="form-label">Code postal</label>
              </div>
            </div>
            <div class="col-md-4">
              <div class="form-floating mb-3">
                <input
                  type="text"
                  name="city"
                  id="city"
                  v-model="client.city"
                  class="form-control"
                  placeholder="Ville"
                  :class="{ 'is-invalid': !client.city }"
                />
                <label for="city" class="form-label">Ville</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="form-floating mb-3">
                <select
                  name="country"
                  id="country"
                  v-model="client.country"
                  class="form-control"
                  :class="{ 'is-invalid': !client.country }"
                >
                  <option value="" disabled>Choisir un pays</option>
                  <option value="France">France</option>
                  <option value="Belgique">Belgique</option>
                  <option value="Canada">Canada</option>
                  <option value="Suisse">Suisse</option>
                  <option value="Luxembourg">Luxembourg</option>
                  <option value="États-Unis">États-Unis</option>
                  <option value="Royaume-Uni">Royaume-Uni</option>
                </select>
                <label for="country" class="form-label">Pays</label>
              </div>
            </div>
          </div>
        </div>
  
        <p class="text-end">
          <button
            @click="onSave()"
            :disabled="formInvalid"
            class="btn btn-outline-primary btn-lg px-5"
          >
            <i class="fa-solid fa-save me-2" />Enregistrer
          </button>
        </p>
  
        <AppDebug :datas="client" />
      </div>
      <div v-else>loading...</div>
    </div>
  </template>
  
  <script>
  import { useClientStore } from '@/stores/client';
  import { mapActions, mapState, mapWritableState } from 'pinia';
  
  export default {
    props: {
      id: {
        type: String,
        default: 'new'
      }
    },
    data() {
      return {
        error: false,
        countries: [
          "France",
          "Belgique",
          "Canada",
          "Suisse",
          "Luxembourg",
          "États-Unis",
          "Royaume-Uni"
        ]
      };
    },
    mounted() {
      this.setClient(this.id);
      if (this.isNewClient) {
        this.client.date = new Date().toISOString().slice(0, 10);
      }
    },
    computed: {
      ...mapState(useClientStore, {
        loading: 'loading'
      }),
      ...mapWritableState(useClientStore, {
        client: 'item'
      }),
      isNewClient() {
        return this.id === 'new';
      },
      formInvalid() {
        return (
          !this.client ||
          !this.client.firstName ||
          !this.client.lastName ||
          !this.client.function ||
          !this.client.phone ||
          !this.client.email ||
          !this.client.company ||
          !this.client.address1 ||
          !this.client.postalCode ||
          !this.client.city ||
          !this.client.country
        );
      }
    },
    methods: {
      ...mapActions(useClientStore, {
        setClient: 'setItem',
        updateClient: 'updateItem',
        createClient: 'createItem',
        deleteClient: 'deleteItem'
      }),
      onDeleteClient() {
        this.deleteClient(this.id);
        this.$router.push({ name: 'clients' });
      },
      onSave() {
        if (this.formInvalid) {
          this.error = true;
        } else {
          this.error = false;
          if (this.isNewClient) {
            this.createClient(this.client);
          } else {
            this.updateClient(this.client);
          }
          this.$router.push({ name: 'clients' });
        }
      },
      onBackToList() {
        this.$router.push({ name: 'clients' });
      }
    }
  };
  </script>
  
  <style scoped>
  .form-floating {
    margin-bottom: 1rem;
  }
  
  .form-label {
    padding: 0.5rem;
  }
  
  h2 {
    margin-top: 2rem;
    margin-bottom: 1rem;
  }
  </style>
  