<template>
  <div class="container center-text">
    <h2 class="display-2">Your confirmation has been sent successfully, Thanks You !</h2>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Complete",
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

<style>
.mb-5 {
  margin-bottom: 5rem;
}

.center-text {
  text-align: center;
}
</style>
