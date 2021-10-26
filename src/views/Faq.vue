<template>
  <div>
    <head-image>
      FAQ
    </head-image>
    <div class="main main-raised">
      <div class="section section-basic faq-flex">
        <h3 class="md-display-1 faq-text">Hopefully any questions you may have are answered here, if not then you can send us a message using the form at the bottom, or just contact us in another way.</h3>
        <md-card
          class="faq-card mx-auto faq-card-closed"
          v-for="(faq, index) in faqs"
          :key="index"
          ref="faqCard"
        >
          <div class="faq-card-header " @click="toggleFaqOpen(index)">
            <div class="md-title">{{ faq.title }}</div>
            <md-icon class="faq-icon">close</md-icon>
          </div>

          <md-card-content class="faq-card-content">
            {{ faq.content }}
          </md-card-content>
        </md-card>
        <div>
          <form novalidate class="md-layout" @submit.prevent="validateUser">
            <md-card class="md-layout-item md-size-50 md-small-size-100">
              <md-card-header>
                <div class="md-title">Users</div>
              </md-card-header>

              <md-card-content>
                <div class="md-layout md-gutter">
                  <div class="md-layout-item md-small-size-100">
                    <md-field>
                      <label for="first-name">Name</label>
                      <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.name" />
                      <!-- <span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>
                      <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span> -->
                    </md-field>
                  </div>
                </div>

                <md-field>
                  <label for="email">Email</label>
                  <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" />
                  <!-- <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
                  <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span> -->
                </md-field>
              </md-card-content>

              <md-card-actions>
                <md-button type="submit" class="md-primary">Create user</md-button>
              </md-card-actions>
            </md-card>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeadImage from "../components/custom/HeadImage.vue";

export default {
  name: "Faq",
  bodyClass: "profile-page",
  data() {
    return {
      form: {
        email: null,
        name: null,
        message: null
      },
      faqs: [
        {
          title: "What should I wear? Is there a dress code?",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optioitaque ea, nostrum odio. Dolores, sed accusantium quasi non. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optioitaque ea, nostrum odio. Dolores, sed accusantium quasi non. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optioitaque ea, nostrum odio. Dolores, sed accusantium quasi non."
        },
        {
          title: "Will the ceremony and reception be indoors or outdoors?",
          content:
            "The ceremony will take place outdoors, weather permitting. The wedding breakfast will be indoors. The receoption will be mainly indoors, but will have an outdoor area."
        },
        {
          title: "What happens after the ceremony?",
          content:
            "After the ceremony, the bridal party will be taking pictures nearby for around an hour.  Guests will be served finger foods and beverages during this time."
        },
        {
          title: "Does your wedding have a theme?",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optioitaque ea, nostrum odio. Dolores, sed accusantium quasi non."
        },
        {
          title: "What should I do if I can’t make it?",
          content:
            "You will be missed! If you can not make it to the wedding, please let us know as soon as possible and RSVP “no,” so we can plan accordingly."
        },
        {
          title: "How do I get to the venue?",
          content:
            "There is parking available at the hotel. If travelling by public transport, the hotel is only a 15 - 20 minute walk or a short bus ride from Bournemouth train and bus station."
        },
        {
          title: "Are kids welcome?",
          content:
            "While we love your little ones, our wedding is going to be an adults-only event so that everyone can relax and enjoy the evening. We appreciate you making arrangements ahead of time and leaving the kids at home so you can celebrate with us."
        },
        {
          title: "Can I bring a date?",
          content:
            "We have a strict guest list to stay on budget.  Our wedding is strictly RSVP only. We will only able to accommodate those listed on your invitation."
        },
        {
          title: "Do you have a hotel block for guests?",
          content:
            "There is a special price for wedding guests wishing to stay at the venue. Please see the venue page for more details."
        },
        {
          title: "Can I have a paper invitation?",
          content:
            "We have sent out digital invitations to reduce waste. If you want a paper invitation, please let us know by the end of December and we will send one to you."
        },
        {
          title:
            "When is the RSVP deadline? Do I need to mail back my RSVP or can I do it online?",
          content:
            "The deadline is 30th April 2022. You can fill out the rsvp online or send it back by post if you have a paper invitation."
        },
        {
          title:
            "Are the ceremony and reception location wheelchair accessible?",
          content:
            "The venue is wheelchair accessible and has an accessible toilet. If you are staying at the venue there is a small lift to the floors with rooms on. Please check with the hotel if the lift will be suitable for your wheelchair."
        },
        {
          title:
            "Will food and drinks be served at the reception? What kind of food?",
          content:
            "There will be mediteranian style buffet food at the reception"
        },
        {
          title:
            "Will there be any vegan/vegetarian/gluten free/special diet options?",
          content:
            "Please let us know about any dietary requirements when you RSVP."
        }
      ]
    };
  },
  components: {
    HeadImage
  },
  methods: {
    toggleFaqOpen(index) {
      this.$refs.faqCard[index].$el.classList.toggle("faq-card-closed");
    }
  }
};
</script>

<style>
.faq-card {
  width: 90% !important;
  margin: 15px !important;
  overflow: hidden !important;
  padding: 16px;
  max-height: 500px;
  transition: max-height 1s ease-out;
}

.faq-text {
  width: 90% !important;
  margin: auto;
  text-align: center;
  margin-bottom: 50px !important;
}

.faq-card.faq-card-closed {
  max-height: 64px;
  transition: max-height 1s ease-out;
}

.faq-flex {
  display: flex;
  padding: 30px 0;
  flex-direction: column;
  max-width: 1400px;
  margin: auto;
}

.faq-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-icon {
  margin: 0 !important;
  transition: transform 0.3s ease-out !important;
}

.faq-card-closed .faq-icon {
  transform: rotate(45deg);
}

.faq-card-closed .faq-card-content {
  height: 0 !important;
  display: none;
}

.faq-card-content {
  height: auto;
}
</style>
