<template>
  <div class="wrapper">
    <head-image>
      Venue
    </head-image>
    <div class="main main-raised">
      <div class="section section-basic">
        <div class="md-layout">
          <img
            src="../assets/img/wedding/miramar-logo.svg"
            alt="Hotel Miramar logo"
            class="logo"
          />
          <div class="md-layout-item md-size-85 mx-auto address">
            <md-icon class="icon-black">
              home
            </md-icon>
            <h4>E Overcliff Drive</h4>
            <h4>Bournemouth</h4>
            <h4>BH1 3AL</h4>
            <md-icon class="icon-black">phone</md-icon>
            <h4>
              <a href="tel:01202556581">01202 556581</a>
            </h4>
          </div>

          <div
            class="md-layout-item md-size-85 mx-auto md-small-size-90 carousel-outer-container"
          >
            <md-card>
              <carousel
                :per-page="1"
                loop
                :speed="700"
                autoplay
                :autoplay-timeout="5000"
                :mouse-drag="true"
                navigationEnabled
                navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
                navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
                class="carousel-container"
              >
                <slide>
                  <img
                    :src="carousel1"
                    alt="Hotel Miramar from garden"
                    class="carousel-image"
                  />
                </slide>
                <slide>
                  <img :src="carousel2" alt="flowers" class="carousel-image" />
                </slide>
                <slide>
                  <img :src="carousel3" alt="Bed" class="carousel-image" />
                </slide>
              </carousel>
            </md-card>
          </div>
          <div class="text-area">
            <h2 class="title">
              The wedding ceremony and reception will take place at Hotel
              Miramar, Bournemouth
            </h2>

            <h3 class="title">
              Hotel Miramar provide a special rate for wedding guests.
            </h3>
            <h4>1 Night accommodation with Full English Breakfast</h4>
            <h4 class="title">£70.00 per person per night</h4>
            <h4>2 Nights accommodation with Full English Breakfast</h4>
            <h4 class="title">£130.00 per person per night</h4>
            <h5>
              Standard room for double occupancy, based on two adults sharing
            </h5>

            <h4>
              As there are so many other hotels to choose from in Bournmouth we
              won't provide any suggestions at this stage, but if you need help
              finding one please let us know.
            </h4>

            <h3 class="title">Getting here</h3>
            <h4>
              There is complimentary parking on site for guests staying at the
              hotel if the room is booked directly.
            </h4>
            <h4>
              If coming by public transport the hotel is a 15-20 minute walk or
              a short bus ride from Bournemouth train and bus station.
            </h4>
          </div>
          <div
            class="md-layout-item md-size-85 mx-auto md-small-size-90 carousel-outer-container"
          >
            <TravelMap class="travel-map map" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadImage from "../components/custom/HeadImage.vue";
import TravelMap from "../components/google-map/TravelMap.vue";

export default {
  name: "Venue",
  bodyClass: "profile-page",
  components: {
    HeadImage,
    TravelMap
  },
  data() {
    return {
      classicModal: false,
      selectedDate: new Date("2018/03/26"),
      carousel1: require("@/assets/img/wedding/Banner-Image-4.jpg"),
      carousel2: require("@/assets/img/wedding/MG_6496-copy.jpg"),
      carousel3: require("@/assets/img/wedding/Banner-Image-5.jpg")
    };
  }
};
</script>

<style>
.logo {
  /* filter: invert(0%) sepia(30%) saturate(23%) hue-rotate(357deg) brightness(96%)
    contrast(105%); */
  filter: brightness(0) saturate(100%);
  width: 30%;
  margin: auto;
}

.icon-black {
  opacity: 1 !important;
  color: rgba(0, 0, 0, 1) !important;
}

.address {
  text-align: center;
  margin-top: 3rem;
}

.map {
  width: 100%;
  height: 500px;
}

.text-area {
  margin: auto;
  text-align: center;
}

.carousel-outer-container {
  margin-top: 3rem;
  max-width: 1600px;
}
.carousel-container {
  max-height: 80vh;
}

.carousel-image {
  width: 100% !important;
  height: 100% !important;
  object-fit: cover;
}
</style>
