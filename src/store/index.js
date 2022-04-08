import { createStore } from 'vuex';
import router from './../router/index';

export default createStore({
    state: {
        veggie: [],
        popular: [],
        cuisine: [],
        search: [],
        recipe: [],
    },
    getters: {},
    mutations: {
        setVeggie(state, payload) {
            state.veggie = payload;
        },
        setPopular(state, payload) {
            state.popular = payload;
        },
        setCuisine(state, payload) {
            state.cuisine = payload;
        },
        setRecipe(state, payload) {
            state.recipe = payload;
        },
        setSearch(state, payload) {
            state.search = payload;
        },
    },
    actions: {
        async getVeggie({ commit }) {
            if (localStorage.getItem('veggie')) return;
            try {
                const api = await fetch(
                    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.VUE_APP_API_KEY}&number=9&tags=vegetarians`
                );
                const data = await api.json();
                console.log(data);
                commit('setVeggie', data.recipes);
            } catch (error) {
                console.log(error);
            }
        },
        async getPopular({ commit }) {
            if (localStorage.getItem('popular')) return;

            try {
                const api = await fetch(
                    `https://api.spoonacular.com/recipes/random?apiKey=${process.env.VUE_APP_API_KEY}&number=9`
                );
                const data = await api.json();
                commit('setPopular', data.recipes);
            } catch (error) {
                console.log(error);
            }
        },
        async getCuisine({ commit }, type) {
            try {
                const api = await fetch(
                    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.VUE_APP_API_KEY}&cuisine=${type}`
                );
                const data = await api.json();
                commit('setCuisine', data.results);
            } catch (error) {
                console.log(error);
            }
        },
        async filterName({ commit }, text) {
            try {
                const api = await fetch(
                    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.VUE_APP_API_KEY}&query=${text}`
                );
                const data = await api.json();
                commit('setSearch', data.results);
                router.push(`/searched/${text}`);
            } catch (error) {
                console.log(error);
            }
        },
        async getRecipe({ commit }, id) {
            try {
                const api = await fetch(
                    `https://api.spoonacular.com/recipes/${id}/information?ncludeNutrition=false&apiKey=${process.env.VUE_APP_API_KEY}`
                );
                const data = await api.json();

                localStorage.setItem('recipe', JSON.stringify(data));

                commit('setRecipe', data);

                router.push(`/food/${data.title}`);
            } catch (error) {
                console.log(error);
            }
        },
    },
    modules: {},
});
