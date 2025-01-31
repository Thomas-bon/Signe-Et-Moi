import { reactive } from 'vue'

export const score = reactive({
  score: parseInt(localStorage.getItem('scoreCurrentQuiz')) || 0,
  profileScore: parseInt(localStorage.getItem('profileScore')) || 0,




  increment() {
    this.score++;
    localStorage.setItem('scoreCurrentQuiz', this.score);

  },

  reset() {
    let AllPointProfile = this.profileScore + this.score

    localStorage.setItem('profileScore', AllPointProfile);
    // console.log("Somme de tout les points :", AllPointProfile)

    this.profileScore = AllPointProfile;

    setTimeout(() => {
      this.score = 0;
      localStorage.setItem('scoreCurrentQuiz', this.score);

    }, 400);
  },

})