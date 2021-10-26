<template>
  <div class="wrapper">
    <head-image>
      Food
    </head-image>
    <div class="main main-raised">
      <div class="section section-basic">
        <div class="md-layout">
          <div class="md-layout-item md-size-85 mx-auto">
            <h2>
              More details on food will be provided nearer the time, but if you
              have any dietary requirements please notify us when confirming
              your attendance
            </h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadImage from "../components/custom/HeadImage.vue";

export default {
  name: "Food",
  bodyClass: "profile-page",
  components: {
    HeadImage
  }
};
</script>
