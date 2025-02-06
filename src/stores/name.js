import { reactive, computed } from 'vue';

export const name = reactive({
    name: localStorage.getItem('userName') || 'invité',

    getName(userName) {
        this.name = userName
        localStorage.setItem('userName', userName)
    }

})