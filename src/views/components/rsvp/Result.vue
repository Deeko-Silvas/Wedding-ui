<template>
  <div class="container extra-padding-top">
    <div class="md-layout">
      <!-- <div
    class="md-layout-item md-size-33 md-small-size-66 md-xsmall-size-100 md-medium-size-40 mx-auto"
  > -->
      <div v-if="isLoading">
        <md-progress-spinner md-mode="indeterminate"></md-progress-spinner>
      </div>
      <template v-else>
        <div v-if="submitError" class="container">
          <div id="notifications" class="mb-5">
            <div class="alert alert-danger">
              <div class="container">
                <div>
                  <div class="alert-icon">
                    <md-icon>info_outline</md-icon>
                  </div>
                  There was an error updating, please try again later.
                </div>
              </div>
            </div>
          </div>
        </div>
        <login-card
          header-color="blue"
          v-for="(guest, index) in guests"
          :key="guest.id"
          class="md-layout-item md-size-45 md-small-size-80 md-xsmall-size-100 mx-auto card-margin"
        >
          <h4 slot="title" class="card-title">
            {{ `${guest.firstName} ${guest.lastName}` }}
          </h4>
          <md-field slot="inputs" v-if="guest.ceremonyInvite">
            <label for="ceremony">Ceremony</label>
            <md-select
              v-model="guest.ceremonyConfirm"
              name="ceremony"
              id="ceremony"
            >
              <md-option value="Confirm">Confirm</md-option>
              <md-option value="Decline">Respectfully Decline</md-option>
            </md-select>
          </md-field>
          <md-field slot="inputs" v-if="guest.receptionInvite">
            <label for="reception">Reception</label>
            <md-select
              v-model="guest.receptionConfirm"
              name="reception"
              id="reception"
            >
              <md-option value="Confirm">Confirm</md-option>
              <md-option value="Decline">Respectfully Decline</md-option>
            </md-select>
          </md-field>
          <md-field slot="inputs">
            <label>Dietary Requirement</label>
            <md-input v-model="guest.diet"></md-input>
          </md-field>
          <md-button slot="inputs" class="md-success" @click="addDiet(index)">
            Add
          </md-button>
          <div class="md-size-50 md-xsmall-size-100" slot="inputs">
            <badge
              type="success"
              v-for="(diet, dietIndex) in guest.dietary"
              :key="dietIndex"
              class="badge-margin-bottom"
            >
              {{ diet }}
              <span @click="removeDiet(index, dietIndex)">
                <md-icon class="md-icon-size">close</md-icon>
              </span>
            </badge>
          </div>
          <md-field slot="inputs">
            <label for="comments">Comments</label>
            <md-textarea
              v-model="guest.comment"
              name="comments"
              id="comments"
            ></md-textarea>
          </md-field>
        </login-card>
      </template>
    </div>
    <div class="md-layout">
      <md-button
        class="md-success md-lg my-3 md-size-33 md-small-size-66 md-xsmall-size-85 md-medium-size-40 mx-auto md-layout-item submit-button"
        @click="confirmGuests()"
      >
        Submit
      </md-button>
    </div>
  </div>
</template>

<script>
import { LoginCard } from "@/components";
import { Badge } from "@/components";
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  name: "Result",
  components: {
    LoginCard,
    Badge
  },
  data() {
    return {
      query: null,
      isLoading: false,
      guests: null
    };
  },
  computed: {
    ...mapState({
      guestsState: state => state.guests,
      submitError: state => state.submitError
    }),
    routeChange() {
      return this.$route.params;
    }
  },
  methods: {
    ...mapActions({
      getGuest: "getGuest",
      confirmGuest: "confirmGuest"
    }),
    ...mapMutations({
      resetSubmitError: "update-submit-error",
      resetGuests: "update-guests"
    }),
    addDiet(index) {
      if (this.guests[index].diet) {
        this.guests[index].dietary.push(this.guests[index].diet);
        this.guests[index].diet = null;
      }
    },
    removeDiet(index, dietIndex) {
      this.guests[index].dietary.splice(dietIndex, 1);
    },
    async getGuests() {
      console.log(this.guests);
      if (this.guests) return;
      console.log("here")
      this.isLoading = true;
      this.query = this.$route.params.query;
      await this.getGuest(this.query);
      this.guests = JSON.parse(JSON.stringify(this.guestsState));
      this.isLoading = false;
    },
    async confirmGuests() {
      const confirmation = this.guests.map((guest, index) => {
        const g = {
          _id: guest._id
        };
        for (const [key, value] of Object.entries(guest)) {
          if (guest[key] !== this.guestsState[index][key]) {
            g[key] = value;
          }
        }
        return g;
      });
      this.confirmGuest(confirmation);
    }
  },
  mounted() {
    this.resetSubmitError();
    this.resetGuests();
  },
  watch: {
    routeChange: {
      immediate: true,
      handler: "getGuests"
    }
  }
};
</script>

<style scoped>
.full-screen {
  width: 100%;
  max-width: 1200px;
  margin: 50px 30px 0 !important;
}

.submit-button {
  margin-top: 20px !important;
}

.extra-padding-top {
  padding-top: 40px !important;
}

.badge-margin-bottom {
  margin: 5px 5px 5px 0;
  font-weight: 300;
  font-size: 12px;
}

.md-icon-size {
  width: 16px !important;
  min-width: 16px !important;
  height: 16px !important;
  margin-left: 8px !important;
}

.md-icon.md-theme-default.md-icon-font {
  color: white;
}

.md-card {
  box-shadow: none !important;
}

.md-list-item-content.md-ripple {
  min-height: 28px;
}

@media (max-width: 991px) {
  .card-margin:not(:last-of-type) {
    margin-bottom: 100px !important;
  }
}

@media (max-width: 600px) {
  .card-margin {
    box-shadow: none !important;
  }
}
</style>
