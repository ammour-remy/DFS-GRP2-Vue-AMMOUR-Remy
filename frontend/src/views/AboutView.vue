<template>
  <div class="about container">
    <h1 class="h3">À propos de ce projet</h1>
    <p>Bienvenue sur notre site de facturation. Ce projet a été conçu pour faciliter la gestion des factures pour les petites et moyennes entreprises.</p>
    
    <h2 class="h4">Objectif du projet</h2>
    <p>L'objectif de ce projet est de fournir une solution simple et efficace pour créer, gérer et suivre les factures. Notre application permet aux utilisateurs de générer des factures professionnelles, de suivre les paiements, et de gérer les clients de manière efficace.</p>

    <h2 class="h4">Fonctionnalités principales</h2>
    <ul>
      <li>Création et gestion des factures</li>
      <li>Suivi des paiements</li>
      <li>Gestion des clients</li>
      <li>Calcul automatique des taxes et des remises</li>
      <li>Exportation des factures en PDF</li>
    </ul>

    <h2 class="h4">Équipe de développement</h2>
    <div class="team">
      <div class="member">
        <h3 class="h5">Jean Dupont</h3>
        <p><strong>Rôle:</strong> Chef de projet</p>
        <p>Jean est un développeur expérimenté avec plus de 10 ans dans l'industrie. Il a dirigé de nombreux projets de développement web avec succès.</p>
      </div>
      <div class="member">
        <h3 class="h5">Marie Dubois</h3>
        <p><strong>Rôle:</strong> Développeuse Frontend</p>
        <p>Marie est spécialisée dans le développement frontend avec des compétences approfondies en Vue.js, HTML, CSS, et JavaScript.</p>
      </div>
      <div class="member">
        <h3 class="h5">Paul Martin</h3>
        <p><strong>Rôle:</strong> Développeur Backend</p>
        <p>Paul est responsable de la partie serveur de l'application. Il a une expertise en Node.js, Express, et les bases de données SQL.</p>
      </div>
      <div class="member">
        <h3 class="h5">Sophie Lambert</h3>
        <p><strong>Rôle:</strong> Designer UI/UX</p>
        <p>Sophie est en charge de l'interface utilisateur et de l'expérience utilisateur. Elle crée des designs intuitifs et attrayants pour l'application.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style scoped>
.about {
  padding: 20px;
}

.team {
  margin-top: 20px;
}

.member {
  margin-bottom: 20px;
}

.member h3 {
  margin-bottom: 5px;
}

.member p {
  margin-bottom: 5px;
}
</style>
