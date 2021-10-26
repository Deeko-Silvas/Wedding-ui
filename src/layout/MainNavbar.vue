<template>
  <md-toolbar
    id="toolbar"
    md-elevation="0"
    class="md-transparent md-absolute"
    :class="extraNavClasses"
    :color-on-scroll="colorOnScroll"
  >
    <div class="md-toolbar-row md-collapse-lateral">
      <md-button
        class="md-just-icon md-simple md-toolbar-toggle"
        :class="{ toggled: toggledClass }"
        @click="toggleNavbarMobile()"
      >
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </md-button>

      <div class="md-collapse center-nav">
        <div class="md-collapse-wrapper">
          <mobile-menu nav-mobile-section-start="false">
            <!-- Here you can add your items from the section-start of your toolbar -->
          </mobile-menu>
          <md-list class="md-layout md-gutter">
            <md-list-item class="md-layout-item" :to="{ name: 'home' }" exact>
              <p class="nav-link">HOME</p>
            </md-list-item>

            <md-list-item class="md-layout-item" :to="{ name: 'venue' }">
              <p class="nav-link">VENUE</p>
            </md-list-item>

            <md-list-item class="md-layout-item" :to="{ name: 'search' }">
              <p class="nav-link">RSVP</p>
            </md-list-item>

            <md-list-item class="md-layout-item" :to="{ name: 'food' }">
              <p class="nav-link">FOOD</p>
            </md-list-item>

            <md-list-item class="md-layout-item" :to="{ name: 'faq' }">
              <p class="nav-link">FAQ</p>
            </md-list-item>

            <md-list-item class="md-layout-item" :to="{ name: 'original' }">
              <p>Original</p>
            </md-list-item>
          </md-list>
        </div>
      </div>
    </div>
  </md-toolbar>
</template>

<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

import MobileMenu from "@/layout/MobileMenu";
export default {
  components: {
    MobileMenu
  },
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info"
        ].includes(value);
      }
    },
    colorOnScroll: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      extraNavClasses: "",
      toggledClass: false
    };
  },
  computed: {
    showDownload() {
      const excludedRoutes = ["login", "landing", "profile"];
      return excludedRoutes.every(r => r !== this.$route.name);
    }
  },
  methods: {
    bodyClick() {
      let bodyClick = document.getElementById("bodyClick");

      if (bodyClick === null) {
        let body = document.querySelector("body");
        let elem = document.createElement("div");
        elem.setAttribute("id", "bodyClick");
        body.appendChild(elem);

        let bodyClick = document.getElementById("bodyClick");
        bodyClick.addEventListener("click", this.toggleNavbarMobile);
      } else {
        bodyClick.remove();
      }
    },
    toggleNavbarMobile() {
      this.NavbarStore.showNavbar = !this.NavbarStore.showNavbar;
      this.toggledClass = !this.toggledClass;
      this.bodyClick();
    },
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    },
    scrollToElement() {
      let element_id = document.getElementById("downloadSection");
      if (element_id) {
        element_id.scrollIntoView({ block: "end", behavior: "smooth" });
      }
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>

<style>
.center-nav {
  justify-content: center !important  ;
}

.nav-link {
  font-size: 16px !important;
  font-weight: 500 !important;
}
</style>
