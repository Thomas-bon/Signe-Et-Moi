<template>

    <div id="headerSearch">
        <input v-model="signName" type="text" name="searchBar" placeholder="Rechercher..">
    </div>

    <div id="placementCategories">
        <div v-for="(info, index) in searchBar" :key="index" class="allCategories" @click="toggleClicked(index)">

            <div class="button">
                <p>{{ info.text }}</p>
            </div>
            <div id="infoSign">
                <img v-if="clickedItems.includes(index) && info.type === 'img'" :src="info.src"
                    alt="Image d'une personne qui signe" :class="{ show: clickedItems.includes(index) }">
                <video v-if="clickedItems.includes(index) && info.type === 'vid'" :src="info.src" muted="" loop=""
                    autoplay="" playsinline="" :class="{ show: clickedItems.includes(index) }"></video>
            </div>


        </div>
    </div>


</template>

<script>
import signsData from "@/assets/signs.json";

export default {
    data() {
        return {
            signsJson: [],
            categories: [],
            signName: '',
            clicked: true,
            clickedItems: []
        }
    },
    methods: {

        getTextSign() {
            this.categories = [...new Set(this.signsJson.map(sign => sign.text === this.signName))]
            console.log(this.categories)
        },

        toggleClicked(index) {
            if (this.clickedItems.includes(index)) {
                this.clickedItems = [];
            } else {
                this.clickedItems = [index];
            }

        },
    },
    computed: {

        searchBar() {
            return this.signsJson.filter(search =>
                search.text.toLowerCase().includes(this.signName.toLowerCase())
            );
        },


    },
    created() {
        this.signsJson = signsData;
        this.getTextSign();
    }
}



</script>

<style scoped>
body {
    overflow: hidden;
}

input {
    font-family: 'TypoGlobal';
    font-size: 24px;
    padding: 10px;
    color: var(--primary-color);
    background-color: var(--tertiary-color);
    border-radius: 16px;
    border: var(--borderButton-color) solid 5px;
    box-shadow: 7px 7px 2px 0 var(--borderButton-color);
    padding-left: 10px;
    width: 75%;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: 0.2s ease-in;

}

input:focus {

    
    border: var(--secondary-color) solid 5px;
    box-shadow: 0 5px 0 0 var(--secondary-color);
    outline: var(--secondary-color);
}

::placeholder {
    opacity: 40%;
}

.allCategories {
    width: 80%;

    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
}

.button {

    font-family: 'TypoGlobal';
    font-size: 24px;
    background-color: var(--tertiary-color);
    border-radius: 16px;
    border: var(--borderButton-color) solid 5px;
    box-shadow: 0 7px 0 0 var(--borderButton-color);

    display: flex;
    justify-content: center;
    align-items: center;
}

p {
    color: var(--secondary-color);

}

#placementCategories {
    overflow: auto;
    width: 100vw;
    height: 85vh;
    padding-bottom: 10px;
    margin-top: 10%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5%;
}

#headerSearch {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 15vh;
    width: 100vw;
}


#infoSign.with-media {
    margin-top: 120px;
}


.media {
    display: block;
    width: 100vw;
    max-height: 50vh;
    object-fit: contain;
}

#infoSign {
    display: flex;
    justify-content: center;
}

.show {
    width: 100vw;
    margin-top: 5%;
    border-radius: 15px;

}

</style>