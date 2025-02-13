<template>

    <div id="centerPage">

        <div id="playerPart">
            <div id="welcome">Bonjour {{ nameUser }} !</div>
            <div id="progress" class="component">
                <transition name="rank-transition" mode="out-in">
                    <p id="rank" :key="playerRank">
                        {{ playerRank }}
                    </p>
                </transition>

                <div id="progressBar">
                    <div id="progressRank" :style="{ width: progressBarWidth }"></div>

                </div>
            </div>

        </div>

        <div id="learnExpressions" class="component">
            <p id="title">Apprendre des expressions !</p>
            <RouterLink :to="{ name: 'allcategory' }" class="button" id="navigateExpressions">
                Commencer
            </RouterLink>
        </div>

        <div id="learnAlphabetAndStatsPub">
            <div id="learnAlphabet" class="component">
                <p id="title">Apprendre l'Alphabet !</p>
                <RouterLink :to="{ name: 'alphabet' }" class="button" id="navigateExpressions">
                    Débuter !
                </RouterLink>
            </div>
            <div id="statsAndPub">
                <RouterLink :to="{ name: 'sign-fr-us' }" id="pub" class="component">
                    <p id="title">Signez pour nous !</p>
                </RouterLink>
                <div id="stats" class="component">
                    <div id="number"> {{ numberOfExpressMasterise }}</div>
                    <p>Expressions <span class="violet">apprises</span></p>

                </div>
            </div>
        </div>

    </div>

</template>

<script>
import { RouterLink } from 'vue-router';
import { score } from "../stores/score";
import { name } from "../stores/name";

export default {
    computed: {
        numberOfExpressMasterise() {
            return score.expressLearned;
        },

        nameUser() {
            return name.name;
        },

        playerRank() {
            const rankScore = score.profileScore;
            if (rankScore < 80) return "Ch'Apprenti";
            if (rankScore < 160) return "Ch'Apprenti+";
            if (rankScore < 240) return "Ch'Aguerri";
            if (rankScore < 320) return "Ch'Aguerri+";
            if (rankScore < 400) return "Ch'Expert";
            if (rankScore < 480) return "Ch'Expert+";
            if (rankScore < 560) return "Ch'Maître";
            if (rankScore < 640) return "Ch'Maître+";
            if (rankScore < 720) return "Ch'Légendaire";
            if (rankScore < 800) return "Ch'Légendaire+";
            if (rankScore < 880) return "Ch'Divin";
            if (rankScore < 960) return "Ch'Ch'Divin+";
            return "Ch'Divin+"
        },

        progressBarWidth() {
            const rankScore = score.profileScore

            const ranks = [
                { name: "Ch'Apprenti", min: 0, max: 80 },
                { name: "Ch'Apprenti+", min: 80, max: 160 },
                { name: "Ch'Aguerri", min: 160, max: 240 },
                { name: "Ch'Aguerri+", min: 240, max: 320 },
                { name: "Ch'Expert", min: 320, max: 400 },
                { name: "Ch'Expert+", min: 400, max: 480 },
                { name: "Ch'Maître", min: 480, max: 560 },
                { name: "Ch'Maître+", min: 560, max: 640 },
                { name: "Ch'Légendaire", min: 640, max: 720 },
                { name: "Ch'Légendaire+", min: 720, max: 800 },
                { name: "Ch'Divin", min: 800, max: 880 },
                { name: "Ch'Divin+", min: 880, max: 960 }
            ];


            //on récupère le rang actuel par rapport à nos points 
            let currentRank = ranks.find(r => rankScore >= r.min && rankScore < r.max);


            if (!currentRank) {
                currentRank = ranks[ranks.length - 1];
            }

            //on récupère le rang suivant du notre
            let nextrank = ranks.find(r => rankScore < r.max) || currentRank;

            //on calcule le pourcentage de progression jusqu'au rang suivant
            let progress = ((rankScore - currentRank.min) / (nextrank.max - currentRank.min) * 100);

            return `${Math.min(progress, 100)}%`;
        }
    }
}

</script>


<style scoped>
.button {
    background-color: var(--tertiary-color);
    border-radius: 16px;
    border: var(--borderButton-color) solid 5px;
    box-shadow: 0 5px 0 0 var(--borderButton-color);

    color: var(--secondary-color);
}

.component {
    background-color: var(--primary-color);
    border-radius: 25px;
    position: relative;
}

#centerPage {
    margin-top: 10px;
    height: 85vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 20px;
}

#playerPart {
    height: 22%;
    width: 90%;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}

#welcome {
    width: 90%;
    height: 30%;

    font-size: 28px;
    text-align: center;
    color: var(--primary-color);
}

#progress {
    height: 60%;
    width: 100%;

    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    gap: 20px;
}

#rank {
    width: 60%;
    height: 30%;
    margin-top: 1%;

    font-family: 'TypoGlobal';
    font-size: 25px;
    color: var(--tertiary-color);

    text-align: center;

    transition: opacity 0.5s ease, transform 0.5s ease;
}

.rank-transition-enter-active,
.rank-transition-leave-active {
    transition: opacity 0.3s ease-out, transform 0.5s cubic-bezier(0.22, 1.25, 0.32, 1);
}

.rank-transition-enter {
    opacity: 0;
    transform: scale(0.5);
}

.rank-transition-enter-to {
    opacity: 1;
    transform: scale(1);
    animation: pop-bounce 0.4s ease-out;
}

.rank-transition-leave {
    opacity: 1;
    transform: scale(1);
}

.rank-transition-leave-to {
    opacity: 0;
    transform: scale(1.1);
}

@keyframes pop-bounce {
    0% {
        transform: scale(0.5);
    }

    60% {
        transform: scale(1.15);
    }

    80% {
        transform: scale(0.97);
    }

    100% {
        transform: scale(1);
    }
}





#progressBar {
    width: 85%;
    height: 10%;

    background-color: var(--tertiary-color);
    border-radius: 16px;
    border: var(--borderButton-color) solid 5px;
    box-shadow: 0 5px 0 0 var(--borderButton-color);
    display: flex;
    align-items: center;
}

#progressRank {
    height: 70%;
    margin-right: 2px;
    margin-left: 2px;
    border-radius: 25px;

    background-color: var(--secondary-color);

    transition: 1.5s ease-in-out;
}

#learnExpressions {
    height: 25%;
    width: 90%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    background-image: url(../assets/expressionsHomePage.svg);
    background-position: right;
    background-repeat: no-repeat;
}

#learnExpressions #title {
    height: 10px;
    width: 100%;
    margin-top: 20px;

    color: var(--tertiary-color);
    text-align: center;
    font-size: 28px;

}

#learnExpressions #navigateExpressions {
    position: absolute;
    bottom: 20px;
    left: 30px;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;

    height: 30px;
    width: 50%;
}

#learnAlphabetAndStatsPub {
    height: 35%;
    width: 90%;

    display: flex;
    gap: 10px;
}

#learnAlphabet {
    width: 50%;
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    background-image: url(../assets/alphabetHomePage.svg);
    background-position: bottom;
    background-repeat: no-repeat;
}

#learnAlphabet #title {
    height: 10px;
    width: 80%;
    margin-top: 20px;

    color: var(--tertiary-color);
    text-align: center;
    font-size: 28px;

}

#learnAlphabet #navigateExpressions {
    position: absolute;
    bottom: 20px;
    left: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;

    height: 30px;
    width: 70%;
}

#statsAndPub {
    width: 50%;
    height: 100%;


    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

#pub {
    width: 100%;
    height: 50%;

    text-align: center;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    color: var(--tertiary-color);
    font-size: 28px;

    background-image: url(../assets/signForUsHomePage.svg);
    background-position: bottom;
    background-size: 80%;
    background-repeat: no-repeat;
}

#pub #title {
    width: 90%;
}

#stats {
    width: 100%;
    height: 50%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

#stats p {
    color: var(--tertiary-color);
    /* margin-bottom: 10% */
}

#number {
    color: var(--secondary-color);
    font-size: 80px;
    height: 50px;
    margin-top: 10%;

    display: flex;
    justify-content: center;
    align-items: center;
}

.violet {
    color: var(--secondary-color);
}
</style>