<!-- inverser finished et !finished pour remettre a la normal -->

<template>

    <div id="centerTitle">
        <div class="title" v-if="!finished"> Que veut dire ce signe ? </div>
        <div class="title" v-if="finished">Bravo Thomas tu as fini le cours ! 🎉🎉🎉</div>
    </div>

    <div id="placeThevid">

        <img id="interpretimg" v-if="currentQuestion.type === 'img'" :src="currentQuestion.src"
            :class="{ finish: finished }"></img>
        <video id="interpretvid" v-if="currentQuestion.type === 'vid'" :src="currentQuestion.src" muted="" loop=""
            autoplay="" playsinline="" :class="{ finish: finished }"></video>

    </div>

    <div id="resultQuiz" v-if="finished">{{ scoreStore.score }} / {{ filteredSigns.length }}</div>

    <div id="answers">

        <div v-for="(option, index) in generatedOptions" :key="option" class="button" @click="checkAnswer(option)"
            :class="{
                correct: showFeedback && option === currentQuestion.text,
                wrong: showFeedback && option !== currentQuestion.text,
                finish: finished
            }">

            {{ option }}
        </div>

        <button v-if="showFeedback" @click="nextQuestion" id="nextButton">Suivant</button>

        <RouterLink :to="{ name: 'home' }" v-if="finished" width="100vw">
            <button @click="finishQuiz()" id="finishButton">Finir le quiz</button>
        </RouterLink>

    </div>

</template>



<script >
import signsData from "@/assets/signs.json";
import { score } from "../stores/score";
import { RouterLink } from "vue-router";

export default {
    data() {
        return {

            questions: [],
            currentQuestionIndex: 0,
            filteredSigns: [],
            showFeedback: false,
            finished: false,
            generatedOptions: [],
            scoreStore: score,
            signsSucess:[]

        };
    },
    computed: {
        currentQuestion() {


            return this.filteredSigns[this.currentQuestionIndex];

        },

    },
    props: {
        type: {
            validator(value, props) {
                // The value must match one of these strings
                return ['alphabet', 'expressions'].includes(value)
            }
        },
    },
    methods: {
        checkAnswer(option) {
            if (this.finished) return;
            if (this.showFeedback) return;
            this.showFeedback = true;
            console.log('Vérification de la réponse:', option, this.currentQuestion.text);
            if (option === this.currentQuestion.text) {
                score.increment();
                score.goodAnswer(this.currentQuestion);
                console.log(score.score)

            }
        },

        finishQuiz() {
            score.reset();

        },

        nextQuestion() {
            if (this.finished) return;

            this.showFeedback = false;

            if (this.currentQuestionIndex >= this.filteredSigns.length - 1) {
                // console.log("finished");
                this.finished = true;
                return;
            }

            this.currentQuestionIndex++;
            this.randomOptions();
        },


        randomOptions() {
            // Filtrer les signes en fonction de la catégorie (alphabet ou expressions)
            this.filteredSigns = this.questions.filter(question => question.category === this.type);

            // console.log(this.filteredSigns);  // Pour déboguer, afficher les signes filtrés

            this.filteredSigns.sort(() => Math.random() - 0.5);


            if (this.filteredSigns.length === 0) {
                console.error('Aucune question trouvée pour cette catégorie');
                return;
            }


            if (!this.currentQuestion.text) return;

            const correctAnswer = this.currentQuestion.text;
            console.log('correctAnswer:', correctAnswer); 

            // Récupérer les mauvaises réponses en excluant la bonne réponse
            const allOptions = this.questions
                .filter(question => question.category === this.type)
                .map(q => q.text)
                .filter(text => text !== correctAnswer);

            // Mélanger les mauvaises réponses et en prendre une au hasard
            const wrongAnswers = allOptions.sort(() => 0.5 - Math.random()).slice(0, 1);

            // Mélanger la bonne réponse avec les mauvaises réponses
            this.generatedOptions = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5);
        }

    },
    created() {
        this.questions = signsData;
        this.randomOptions();
    }

};



</script>

<style scoped>

body {
    overflow: hidden    ;
}

.title {
    margin-top: 10%;
    width: 90vw;
    text-align: center;
    font-size: 30px;
}

#placeThevid {
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 8%;
}

#interpretimg {
    border-radius: 10px;
    border: 20px var(--borderButton-color) solid;
    width: 70%;
}

#interpretvid {
    border-radius: 10px;
    border: 5px var(--borderButton-color) solid;
    width: 70%;
}

#answers {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vw;
}

#resultQuiz {
    text-align: center;
    font-size: 90px;
}

.button {

    height: 10%;
    width: 80%;
    margin: 20px;
    font-family: 'TypoGlobal';
    font-size: 24px;
    color: var(--secondary-color);
    background-color: var(--tertiary-color);
    border-radius: 16px;
    border: var(--borderButton-color) solid 5px;
    box-shadow: 0 7px 0 0 var(--borderButton-color);

    display: flex;
    justify-content: center;
    align-items: center;
}

#centerTitle {
    width: 100vw;
    display: flex;
    justify-content: center;
}

#nextButton {
    height: 10%;
    width: 60%;
    margin: 10px;
    font-family: 'TypoGlobal';
    font-size: 24px;
    color: var(--secondary-color);
    background-color: var(--tertiary-color);
    border-radius: 16px;
    border: var(--borderButton-color) solid 5px;
    box-shadow: 0 7px 0 0 var(--borderButton-color);

    display: flex;
    justify-content: center;
    align-items: center;
}

#finishButton {
    height: 90%;
    width: 60vw;
    padding: 10px;
    font-family: 'TypoGlobal';
    font-size: 24px;
    color: var(--secondary-color);
    background-color: var(--tertiary-color);
    border-radius: 16px;
    border: var(--borderButton-color) solid 5px;
    box-shadow: 0 7px 0 0 var(--borderButton-color);

    display: flex;
    justify-content: center;
    align-items: center;
}

.correct {
    background-color: rgb(148, 255, 148);
}

.wrong {
    background-color: rgb(246, 71, 71);
}

.finish {
    display: none;
}
</style>