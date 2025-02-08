<template>
    <transition name="fade">
        <div v-if="copied" id="copied">
            <p v-if="environmentOk">Copié avec succès !</p>
            <p v-else>Votre environnement n'accepte pas la copie..</p>
        </div>
    </transition>

    <div id="returnMainPage">
        <RouterLink :to="{ name: 'home' }" id="returnButton">
            < </RouterLink>

    </div>

    <main>
        <div id="question">
            <div id="cat"></div>
            <div id="whoAreYou">
                <button></button>
                <p>
                    Créez vos vidéos et aidez-nous à apprendre la langue des signes ensemble !
                </p>
            </div>
        </div>

        <div id="responseUser">
            <button @click="copyToClipBoard()">Copier le mail</button>
        </div>
    </main>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    data() {
        return {
            mail: "contact@signeetmoi.com",
            copied: false,
            environmentOk: true
        }
    },

    methods: {

        copyToClipBoard() {
            if (navigator.clipboard) {
                navigator.clipboard.writeText(this.mail)

                this.copied = true;
                setTimeout(() => {
                    this.copied = false;
                }, 500);


            } else {
                this.copied = true;
                this.environmentOk= false;
                setTimeout(() => {
                    this.copied = false;
                }, 500);
            }
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

    overflow: hidden;
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
    background-image: url(../assets/catSignForUs.svg);
    background-position: center;
    background-size: 75%;
    background-repeat: no-repeat;
}

#whoAreYou {
    height: 100%;
    width: 70%;
    border-radius: 25px;
    background-color: var(--borderButton-color);

    display: flex;
    justify-content: center;
    align-items: center;

    overflow: hidden;
}

#whoAreYou p {
    text-align: center;
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

#copied {
    position: absolute;
    top: 0;
    left: 0;
    height: 20%;
    width: 100%;

    background-color: var(--primary-color);
    border-radius: 0 0 30px 30px;
    box-shadow: 0 0 205px 0 var(--secondary-color);

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 2000;

}

#copied p {
    color: var(--tertiary-color);
    font-size: 28px;
    text-align: center;

}

.fade-enter-active,
.fade-leave-active {
    transition: transform 1.8s ease-in-out;
}


.fade-enter,
.fade-leave-to {
    transform: translateY(-200px);
}

#returnMainPage {
    position: absolute;
    top: 10px;
    left: 30px;
    z-index: 1;

}

#returnButton {
    font-size: 40px;
    color: var(--primary-color);
}
</style>