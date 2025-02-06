<template>

    <div id="learningWhat">
        <div id="Alphabet" class="whatToLearn">
            <p>Apprendre l'Alphabet !</p>

            <RouterLink :to="{name: 'alphabet'}" class="button">
                Débuter
            </RouterLink>

        </div>

        <div id="Express" class="whatToLearn">

            <p>Apprendre des Expressions !</p>

            <RouterLink :to="{name: 'allcategory'}" class="button">
                Commencer
            </RouterLink>
        </div>

    </div>

    
</template>

<script>
import { RouterLink } from 'vue-router'

</script>

<style scoped>

#learningWhat {
    height: 80vh;
    width: 100vw;
    gap: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.whatToLearn {
    width: 90vw;
    height: 45%;
    background-color: #212121;
    border-radius: 20px;
    position: relative;
    /* text-align: right; */
}

.button {
    position: absolute;
  bottom: 0;
  /* right: 0; */
  height: 20%;
  width: 50%;
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

#Alphabet {
    display: flex;
    justify-content: flex-end;

    background-image: url(../assets/alphabetHomePage.svg);
    background-size: 60%;
    background-position: center left;
    background-repeat: no-repeat;

}

#Alphabet p {
    text-align: right;
}


#Express {
    background-image: url(../assets/catExpressLearn.svg);
    background-size: 90%;
    background-position: center right;
    background-repeat: no-repeat;
}

p {
    /* position: absolute; */
    color: var(--tertiary-color);
    margin: 20px;
    font-size: 40px;
}
</style>