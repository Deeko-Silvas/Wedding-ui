<template>
  <GoogleMapLoader
    :mapConfig="mapConfig"
    apiKey="AIzaSyCxm_whqcUIYWf5N222El9Jn-ZrtdWRotQ"
  >
    <template slot-scope="{ google, map }">
      <GoogleMapMarker
        v-for="marker in markers"
        :key="marker.id"
        :marker="marker"
        :google="google"
        :map="map"
      />
      <!-- <GoogleMapLine
        v-for="line in lines"
        :key="line.id"
        :path.sync="line.path"
        :google="google"
        :map="map"
      /> -->
    </template>
  </GoogleMapLoader>
</template>

<script>
import GoogleMapLoader from "./GoogleMapLoader";
import GoogleMapMarker from "./GoogleMapMarker";
// import GoogleMapLine from "./GoogleMapLine";

import { mapSettings } from "@/constants/mapSettings";

export default {
  components: {
    GoogleMapLoader,
    GoogleMapMarker
    // GoogleMapLine
  },

  data() {
    return {
      markers: [
        {
          id: "1",
          position: { lat: 50.7184098723353, lng: -1.8683394386369891 }
        }
      ]
      // lines: [
      //   {
      //     id: "1",
      //     path: [
      //       { lat: 3, lng: 101 },
      //       { lat: 5, lng: 99 }
      //     ]
      //   },
      //   {
      //     id: "2",
      //     path: [
      //       { lat: 5, lng: 99 },
      //       { lat: 6, lng: 97 }
      //     ]
      //   }
      // ]
    };
  },

  computed: {
    mapConfig() {
      return {
        ...mapSettings,
        center: this.mapCenter
      };
    },

    mapCenter() {
      return this.markers[0].position;
    }
  }
};
</script>
