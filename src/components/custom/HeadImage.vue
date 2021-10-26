<template>
  <parallax class="section page-header header-filter header-image">
    <div class="header-text">
      <slot />
    </div>
  </parallax>
</template>

<script>
export default {
  name: "HeadImage"
};
</script>

<style>
.header-image {
  background-image: url("../../assets/img/wedding/130939139_l.jpg");
}

.header-text {
  color: white;
  font-family: 'Great Vibes', cursive;
  font-size: 6rem !important;
}

@media (max-width: 991px) {
  .header-image {
    /* align-items: normal !important; */
    /* height: auto !important; */
  }
}
</style>
