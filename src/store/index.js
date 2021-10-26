import Vue from "vue";
import Vuex from "vuex";

import { getGuest, transformQuery, confirmGuest } from "./methods";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: () => ({
    guests: [],
    error: null,
    submitError: null
  }),

  mutations: {
    "update-guests"(state, guests = []) {
      state.guests = guests;
    },
    "update-error"(state, error = null) {
      state.error = error;
    },
    "update-submit-error"(state, error = null) {
      state.submitError = error;
    }
  },

  actions: {
    getGuest,
    transformQuery,
    confirmGuest
  },

  getters: {
    guests: state => (guests = state.guests) => {
      const a = guests.map(guest => {
        return {
          name: `${guest.firstName} ${guest.lastName}`,
          ceremony: guest.ceremonyInvite === "Yes",
          reception: guest.receptionInvite === "Yes",
          diet: guest.dietary,
          comments: guest.comment
        };
      });
      console.log(a);
      return a;
    }
  },

  modules: {}
});

export default store;
