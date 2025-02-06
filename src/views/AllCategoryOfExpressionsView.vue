<template>

    <div id="placementCategories">
        <div v-for="(category, index) in categories" :key="index" class="allCategories">

            <RouterLink :to="{ name: category }" class="button">
                <p>{{ category }}</p>
            </RouterLink>


        </div>
    </div>


</template>

<script>
import signsData from "@/assets/signs.json";

export default {
    data() {
        return {
            signsJson: [],
            categories: []

        }
    },
    methods: {

        getAllCategories() {
            this.categories = [...new Set(this.signsJson.map(sign => sign.category))]
                .filter(category => category !== 'alphabet')
            console.log(this.categories)
        }

    },
    created() {
        this.signsJson = signsData;
        this.getAllCategories();
    }

}

</script>

<style scoped>
.allCategories {
    height: 8%;
    width: 80%;

}

.button {

    font-family: 'TypoGlobal';
    font-size: 24px;
    background-color: var(--primary-color);
    border-radius: 16px;
    border: var(--secondary-color) solid 5px;
    box-shadow: 0 7px 0 0 var(--secondary-color);

    display: flex;
    justify-content: center;
    align-items: center;
}

p {
    color: var(--tertiary-color);

}

#placementCategories {
    overflow: scroll;
    width: 100vw;
    height: 90vh;
    margin-top: 13%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5%;
}
</style>