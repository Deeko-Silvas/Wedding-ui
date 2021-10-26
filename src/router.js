import Vue from "vue";
import Router from "vue-router";
import Index from "./views/Index.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Profile from "./views/Profile.vue";

import MainFooter from "./layout/MainFooter.vue";

import MainNavbar from "./layout/MainNavbar.vue";
import Home from "./views/Home.vue";
import Venue from "./views/Venue.vue";
import Rsvp from "./views/Rsvp.vue";
import Food from "./views/Food.vue";
import Faq from "./views/Faq.vue";

import Search from "./views/components/rsvp/Search.vue";
import Result from "./views/components/rsvp/Result.vue";
import NoResult from "./views/components/rsvp/NoResult.vue";
import Complete from "./views/components/rsvp/Complete.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/venue",
      name: "venue",
      component: Venue
    },
    {
      path: "/rsvp",
      name: "rsvp",
      component: Rsvp,
      children: [
        {
          path: "",
          name: "search",
          component: Search
        },
        {
          path: "no-result",
          name: "no-result",
          component: NoResult
        },
        {
          path: ":query",
          name: "result",
          component: Result
        },
        {
          path: "complete",
          name: "complete",
          component: Complete
        }
      ]
    },
    {
      path: "/food",
      name: "food",
      component: Food
    },
    {
      path: "/faq",
      name: "faq",
      component: Faq
    },
    {
      path: "/original",
      name: "original",
      components: { default: Index, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    },
    {
      path: "/login",
      name: "login",
      components: { default: Login, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 }
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: { default: Profile, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 400 },
        footer: { backgroundColor: "black" }
      }
    }
  ]
});
