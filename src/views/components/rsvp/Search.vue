<template>
  <div class="container">
    <div class="md-layout">
      <div
        class="md-layout-item md-size-66 md-small-size-80 md-xsmall-size-100 mx-auto"
      >
        <search-box />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from "./SearchBox.vue";
import { mapMutations } from "vuex";

export default {
  name: "Search",
  components: {
    SearchBox
  },
  methods: {
    ...mapMutations({
      resetError: "update-error"
    })
  },
  mounted() {
    console.log("mounted search")
    this.resetError();
  }
};
</script>
