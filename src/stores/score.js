import { reactive, computed } from 'vue';

export const score = reactive({
  score: parseInt(localStorage.getItem('scoreCurrentQuiz')) || 0,
  profileScore: parseInt(localStorage.getItem('profileScore')) || 0,
  questionSucess: JSON.parse(localStorage.getItem('questionsSucessfull')) || [],
  expressLearned: JSON.parse(localStorage.getItem('numberOfExpressMaterised')) || 0,

  increment() {
    this.score++;
    localStorage.setItem('scoreCurrentQuiz', this.score);
  },

  reset() {
    let allPointProfile = this.profileScore + this.score;
    localStorage.setItem('profileScore', allPointProfile);

    setTimeout(() => {
      this.profileScore = allPointProfile;

    }, 200);

    setTimeout(() => {
      this.score = 0;
      localStorage.setItem('scoreCurrentQuiz', this.score);
    }, 500);
  },



  goodAnswer(questionSucess) {

    let storeQuestionsSucessfull = JSON.parse(localStorage.getItem('questionsSucessfull')) || [];

    const alreadyAdded = storeQuestionsSucessfull.some(q => JSON.stringify(q) === JSON.stringify(questionSucess));

    if (!alreadyAdded) {
      this.questionSucess.push(questionSucess);

      this.expressLearned = this.questionSucess.length

      localStorage.setItem('questionsSucessfull', JSON.stringify(this.questionSucess));
      localStorage.setItem('numberOfExpressMaterised', this.expressLearned);
      // console.log('Nouvelle question ajoutée dans le store:', questionSucess);
      // console.log('Nombre d\'expressions maîtrisées:', this.expressLearned);
    }else {
      console.log("Déjà dans le localstorage")
    }
  }
});
