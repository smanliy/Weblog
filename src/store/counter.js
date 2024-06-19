import { defineStore } from "pinia";

export const userStore = defineStore('main', {
    state: () => {
        return {
            accTech: false,
            accSts: false
        }

    }
})