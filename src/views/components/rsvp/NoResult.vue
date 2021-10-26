<template>
  <div class="container">
    <div id="notifications" class="mb-5">
      <div v-if="errorRes && errorRes.status === 404" class="alert alert-warning">
        <div class="container">
          <div>
            <div class="alert-icon">
              <md-icon>warning</md-icon>
            </div>
            Guest not found, please try again.
          </div>
        </div>
      </div>
      <div v-else-if="!errorRes" class="alert alert-danger">
        <div class="container">
          <div>
            <div class="alert-icon">
              <md-icon>info_outline</md-icon>
            </div>
            There was an error retrieving guests, please try again later.
          </div>
        </div>
      </div>
    </div>

    <div class="md-layout">
      <div
        class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
      >
        <search-box />
      </div>
    </div>
  </div>
</template>

<script>
import SearchBox from "./SearchBox.vue";
import { mapState } from "vuex"
 
export default {
  name: "NoResult",
  components: {
    SearchBox
  },
  computed: {
    ...mapState({
      error: state => state.error
    }),
    errorRes() {
      return this.error;
    }
  }
};
</script>

<style scoped>
.mb-5 {
  margin-bottom: 5rem;
}
</style>
