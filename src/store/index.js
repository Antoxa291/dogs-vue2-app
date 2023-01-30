import Vue from 'vue'
import Vuex from 'vuex'
import router from "@/router/index";

import auth from '@/store/modules/auth'
import dogs from '@/store/modules/dogs'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    dogs, auth
  },
  state: {
    viewMod: ''
  },

  getters: {
  },

  actions: {
    changeView({ commit }, newView) {
      const pathArr = newView.split('-')
      router.push(pathArr[0]).catch (() => { });
      commit("SET_VIEW_MOD", pathArr[1] || '');
    }
  },

  mutations: {
    SET_VIEW_MOD(state, newView) {
      state.viewMod = newView;
    },
  }
});

export default store;