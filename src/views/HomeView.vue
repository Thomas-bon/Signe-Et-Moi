<template>

    <div id="centerPage">

        <div id="playerPart">
            <div id="welcome">Bonjour {{nameUser}} !</div>
            <div id="progress" class="component">
                <p id="rank"> {{ playerRank }} </p>
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
            if (rankScore < 40) return "Ch'Apprenti";
            if (rankScore < 80) return "Ch'Apprenti+";
            if (rankScore < 120) return "Ch'Aguerri";
            if (rankScore < 180) return "Ch'Aguerri+";
            if (rankScore < 260) return "Maitre chat";
            return "Grand maitre chat"
        },

        progressBarWidth() {
            const rankScore = score.profileScore

            const ranks = [
                { name: "Ch'Apprenti", min: 0, max: 40 },
                { name: "Ch'Apprenti+", min: 40, max: 80 },
                { name: "Ch'Aguerri", min: 80, max: 120 },
                { name: "Ch'Aguerri+", min: 120, max: 180 },
                { name: "Maitre chat", min: 180, max: 260 },
                { name: "Grand maitre chat", min: 260, max: 350 }
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
    justify-content: flex-end;

}

#stats p {
    color: var(--tertiary-color);
    margin-bottom: 10%
}

#number {
    color: var(--secondary-color);
    font-size: 80px;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;
}

.violet {
    color: var(--secondary-color);
}
</style>