<template>
    <main>
        <div v-if="copied">Copié avec succès !</div>
        <h1>Créez vos vidéos et aidez-nous à apprendre la langue des signes ensemble !</h1>
        <button>Copier le mail</button>
    </main>

</template>

<script>
export default {

    data() {
        return {
            textToCopy: 'contact.signwithus.com',
            copied: false
        }
    },

    methods: {


    }
}

</script>

<style></style>