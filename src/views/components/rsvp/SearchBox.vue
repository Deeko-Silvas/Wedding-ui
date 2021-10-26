<template>
  <login-card header-color="blue">
    <h4 slot="title" class="card-title">Search</h4>
    <p slot="description" class="description">To confirm your attendance to the wedding, just enter your name as it appears on the invitation, or the 6 digit code and click on Search.</p>
    <md-field class="md-form-group" slot="inputs">
      <md-icon>search</md-icon>
      <label>Full name or code</label>
      <md-input v-model="query"></md-input>
    </md-field>
    <md-button
      slot="footer"
      class="md-success md-lg my-3 mx-auto md-layout-item"
      @click="search()"
    >
      Search
    </md-button>
  </login-card>
</template>

<script>
import { LoginCard } from "@/components";
import { mapActions } from "vuex";

export default {
  name: "SearchBox",
  components: {
    LoginCard
  },
  data() {
    return {
      query: null
    };
  },
  methods: {
    ...mapActions({
      transformQuery: "transformQuery"
    }),
    async search() {
      const transformedQuery = await this.transformQuery(this.query);
      this.$router.push({
        name: "result",
        params: { query: transformedQuery }
      });
    }
  }
};
</script>

<style scoped>
.md-card {
  box-shadow: none !important;
}

.description {
  margin-bottom: 40px !important;
}
</style>
