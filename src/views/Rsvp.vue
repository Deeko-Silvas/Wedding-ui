<template>
  <div class="wrapper">
    <head-image>
      RSVP
    </head-image>
    <div class="main main-raised">
      <div class="section section-basic">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import HeadImage from "../components/custom/HeadImage.vue";

export default {
  name: "Rsvp",
  bodyClass: "profile-page",
  components: {
    HeadImage
  }
};
</script>

<style>
.md-card-header-blue {
  background: linear-gradient(60deg, #2E698B, #3D9FC4);
}

.md-button.md-success.md-simple,
.md-button.md-success.md-simple:hover,
.md-field.md-focused.md-theme-default > .md-icon,
.md-list.md-theme-default .md-selected .md-list-item-content {
  color: #2E698B !important;
}

.md-button.md-success.md-theme-default {
  box-shadow: 0 2px 2px 0 rgb(46 105 139 / 14%), 0 3px 1px -2px rgb(46 105 139 / 20%), 0 1px 5px 0 rgb(46 105 139 / 12%);
}

.md-field:before,
.md-button.md-success.md-theme-default,
.md-button.md-success.md-theme-default:hover,
.md-button.md-success.md-theme-default:focus,
.md-card-actions .md-button.md-success.md-theme-default:active,
.md-layout .md-button.md-success.md-theme-default:active,
.badge.badge-success,
.md-field:before,
.md-theme-default.md-field:before,
.md-field.md-theme-default.md-has-value::before {
  background-color: #2E698B !important;
}

.md-button.md-success.md-theme-default:hover,
.md-button.md-success.md-theme-default:focus,
.md-button.md-success.md-theme-default:active {
  box-shadow: 0 14px 26px -12px rgb(46 105 139 / 42%), 0 4px 23px 0px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(46 105 139 / 20%);
}

.md-field.md-theme-default.md-has-textarea:not(.md-autogrow):before {
  border-color: #2E698B !important;
}

.md-list-item-text {
  font-size: 20px !important;
  justify-content: center;
}
</style>
