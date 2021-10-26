<template>
  <div class="wrapper">
    <parallax class="page-header header-filter header-image">
      <div class="brand">
        <h1 class="names">Vikki &amp; Phil</h1>
        <h3>are getting married <span style="white-space: nowrap;">. . .</span>at last</h3>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-basic countdown-container">
        <h2 class="md-display-2">Yes! We are getting married!</h2>

        <h3 class="md-display-1">As we wait for the big day to arrive, we have created this website with lots of sections to keep you up-to-date of everything.</h3>

        <h3 class="md-display-1">Just one important thing, in the rsvp section you can confirm whether or not you will be at our wedding with us. Please, confirm as soon as possible, so we can arrange everything much faster.</h3>
        
        <h3 class="md-display-1">Hopefully you will be able to join us in:</h3>
        <div class="countdown">
          <ul>
            <li><span class="days">{{ days }}</span>Days</li>
            <li><span class="days">{{ hours }}</span>Hours</li>
            <li><span class="days">{{ minutes }}</span>Minutes</li>
            <li><span class="days">{{ seconds }}</span>Seconds</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  bodyClass: "index-page",
  data() {
    return {
      countdown: null,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };
  },
  methods: {
    timer() {
      const targetDate = new Date("Jun 11, 2022 13:00:00").getTime();
      const vm = this;

      this.countdown = setInterval(function() {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;
        vm.days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        vm.hours = Math.floor(
          (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        vm.minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        vm.seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      }, 1000);
    },
    clearTimer() {
      clearInterval(this.countdown);
    }
  },
  mounted() {
    this.timer();
  },
  beforeDestroy() {
    this.clearTimer();
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap');

.header-image {
  background-image: url("../assets/img/wedding/AdobeStock_300799409_Preview.jpeg");
}

.names {
  font-family: 'Great Vibes', cursive;
  font-size: 8rem !important;
}

.index-page .page-header {
  height: 75vh !important;
}

.index-page .brand h3 {
  line-height: 1.4em !important;
  letter-spacing: 1.5px;
}

.countdown-container {
  color: #333;
  margin: 0 auto;
  text-align: center;
  box-sizing: border-box;
  padding-right: 70px !important;
  padding-left: 70px !important;
  max-width: 1400px;
}

.countdown {
  line-height: normal !important;
}

.md-display-2 {
  margin-bottom: 40px !important;
  line-height: 1.5em !important;
}

.md-display-1 {
  margin-bottom: 30px !important;
  line-height: 1.4em !important;
}

li {
  display: inline-block;
  font-size: 1.5em;
  list-style-type: none;
  padding: 10px 20px;
  text-transform: uppercase;
}

@media all and (max-width: 768px) {
  .names {
    font-size: 6rem !important;
  }

  h1 {
    font-size: calc(1.5rem * var(--smaller));
  }

  li {
    font-size: calc(1.125rem * var(--smaller));
  }

  .countdown-container {
    padding: 40px 30px !important;
  }

  .md-display-2 {
    line-height: 48px !important;
}
}

@media all and (max-width: 400px) {
  .countdown-container {
    padding: 30px 15px !important;
  }
}
</style>
