<template>

    <main>
        <div id="question">
            <div id="cat"></div>
            <div id="whoAreYou">
                <p>Bonjour ! <br>
                    Comment t'appelles-tu ?
                </p>
            </div>
        </div>

        <div id="responseUser">
            <input v-model="pseudo" type="text" placeholder="Entrez votre nom ici..">

            <button @click="submit" >Valider</button>
        </div>
    </main>
</template>

<script>
import { name } from "../stores/name";

export default {
    data() {
        return {
            pseudo: ''
        }
    },
    methods: {
        submit() {

        name.getName(this.pseudo)
        console.log(this.pseudo)
        this.$router.push("/")

        }
    }
}
</script>

<style scoped>
main {
    height: 100vh;
    width: 100vw;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15%;
}


#question {
    height: 15%;
    width: 90%;
    margin-top: 25%;
    gap: 5%;

    display: flex;
    align-items: center;
    justify-content: center;
}

#cat {
    height: 100%;
    width: 30%;
    background-image: url(../assets/catNamePage.svg);
    background-position: center;
    background-size: 75%;
    background-repeat: no-repeat;
}

#whoAreYou {
    height: 70%;
    width: 70%;
    border-radius: 25px;
    background-color: var(--borderButton-color);

    display: flex;
    justify-content: center;
    align-items: center;
}

#whoAreYou p {
    font-size: 21px;
    line-height: 30px;
}

#responseUser {
    height: 20%;
    width: 85%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30%;
}

#responseUser input {

    height: 30%;
    width: 95%;
    padding-left: 3%;
    padding-right: 3%;


    background-color: var(--tertiary-color);
    border-radius: 16px;
    border: var(--borderButton-color) solid 5px;
    box-shadow: 0 5px 0 0 var(--borderButton-color);

    color: var(--secondary-color);
    font-size: 18px;
    font-family: 'TypoGlobal';

    transition: 0.2s ease-in;

}

#responseUser input:focus {
    border: var(--secondary-color) solid 5px;
    box-shadow: 0 5px 0 0 var(--secondary-color);
    outline: var(--secondary-color);
}

::placeholder {
    color: var(--secondary-color);
    font-size: 18px;
    font-family: 'TypoGlobal';
    opacity: 40%;

}

#responseUser button {
    height: 35%;
    width: 70%;

    background-color: var(--tertiary-color);
    border-radius: 16px;
    border: var(--borderButton-color) solid 5px;
    box-shadow: 0 5px 0 0 var(--borderButton-color);

    color: var(--secondary-color);
    font-family: 'TypoGlobal';
    font-size: 25px;
}
</style>