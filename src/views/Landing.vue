<template>
  <div>
    <section>
      <v-parallax
        src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
        height="600"
      >
        <v-row align="center" justify="center">
          <v-col class="text-center" cols="12">
            <h1
              class="white--text mb-2 display-1 text-xs-center"
              style="font-weight: 900; text-shadow: 3px 2px #000000"
            >
              The social network for epic content
            </h1>
          </v-col>
        </v-row>
      </v-parallax>
    </section>
    <section>
      <v-row wrap class="my-5">
        <v-col xs12 sm4 class=" text-center my-3">
          <div>
            <h2 class="headline">The best way to share your amazing stuff</h2>
            <span class="subheading">
              No more restrictions, no more limits
            </span>
          </div>
        </v-col>
      </v-row>
      <v-row xs12>
        <v-container sm>
          <v-row align-content="center">
            <v-col class="text-center">
              <v-card class="elevation-0 transparent ">
                <v-card-text class="text-xs-center ">
                  <v-icon class="white--text">mdi-earth</v-icon>
                </v-card-text>
                <!-- title and actions are flex components. hence the
                  justify -->
                <v-card-title class="justify-center">
                  <div>Reach Your Friends</div>
                </v-card-title>
                <v-card-text class="">
                  Show you study to everyone in the world
                </v-card-text>
              </v-card>
            </v-col>
            <v-col class="text-center">
              <v-card class="elevation-0 transparent ">
                <v-card-text class="text-xs-center ">
                  <v-icon class="">mdi-earth</v-icon>
                </v-card-text>
                <!-- title and actions are flex components. hence the
                  justify -->
                <v-card-title class="justify-center">
                  <div>Reach Your Friends</div>
                </v-card-title>
                <v-card-text>
                  Show you study to everyone in the world
                </v-card-text>
              </v-card>
            </v-col>
            <v-col class="text-center">
              <v-card class="elevation-0 transparent ">
                <v-card-text class="text-xs-center ">
                  <v-icon class="white--text">mdi-earth</v-icon>
                </v-card-text>
                <!-- title and actions are flex components. hence the
                  justify -->
                <v-card-title class="justify-center">
                  <div>Reach Your Friends</div>
                </v-card-title>
                <v-card-text class="">
                  Show you study to everyone in the world
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-row>
    </section>
    <v-spacer></v-spacer>
    <section>
      <v-container xs>
        <v-row no-gutters align-content="center">
          <v-row dense>
            <v-col class="mx-6">
              <LandingCard class="mb-16" rtl></LandingCard>
              <LandingCard class="mb-16"></LandingCard>
              <LandingCard rtl></LandingCard>
            </v-col>
          </v-row>
        </v-row>
      </v-container>
    </section>
    <section>
      <v-container>
        <v-row
          class="mx-16 pa-0 blue lighten-4 card-split "
          align-content="center"
          justify="center"
        >
          <v-col align-self="center" md="4">
            <h1>You bring the brains, we’ll bring everything else</h1>
            <h3 class="pt-16 grey--text">
              From flashcards to help you learn francais, to games that make it
              easy to get a handle on history, use a variety of tools to conquer
              any challenge.
            </h3>
          </v-col>
          <v-col md="4">
            <v-card class="pa-2" elevation="0">
              <img
                alt=""
                srcset="
                  https://images.prismic.io/quizlet-prod/96d962d7-4cac-4b5d-9442-478054f61473_bannecker-benefit2.png?auto=compress,format                    1x,
                  https://images.prismic.io/quizlet-prod/ad4d1178-6934-4f16-a882-8f78c0020671_Spot_Illustration_Celebrate_Bannecker.png?auto=compress,format 2x
                "
              />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section>
      <v-container>
        <v-row
          class="green lighten-5 card-split"
          align-content="center"
          justify="space-between"
        >
          <v-col class="pl-16" md="6" align-self="center">
            <h1>TEACHERS</h1>
            <h1>Empower your students</h1>
            <h3 class="pt-16 grey--text">
              Help every student confidently learn anything, no matter what
              they’re striving to achieve. Using Quizlet’s free study sets,
              study modes and in-class game, you can instantly create a more
              engaged classroom.
            </h3>
          </v-col>
          <v-col md="4">
            <v-card class="pa-2" elevation="0">
              <img
                alt=""
                srcset="
                  https://images.prismic.io/quizlet-prod/96d962d7-4cac-4b5d-9442-478054f61473_bannecker-benefit2.png?auto=compress,format                    1x,
                  https://images.prismic.io/quizlet-prod/ad4d1178-6934-4f16-a882-8f78c0020671_Spot_Illustration_Celebrate_Bannecker.png?auto=compress,format 2x
                "
              />
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <section>
      <v-container class="grey lighten-5">
        <v-row no-gutters align-content="center" justify="spacea-around">
          <template v-for="n in 6">
            <v-col align-self="center" md="4" :key="n">
              <v-hover v-slot="{ hover }">
                <v-card
                  :elevation="hover ? 12 : 2"
                  width="300px"
                  height="120px"
                  class="ma-4 rounded yellow darken-1"
                  outlined
                >
                  <v-card-title class="pa-8 ">Column</v-card-title>
                </v-card>
              </v-hover>
            </v-col>
            <v-responsive
              v-if="n === 3"
              :key="`width-${n}`"
              width="100%"
            ></v-responsive>
          </template>
        </v-row>
      </v-container>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

// import { getAllCardsFromDb } from "@/api/apiServices";
import LandingCard from "../components/Card";
export default {
  name: "Home",
  components: {
    LandingCard,
  },
  data() {
    return {
      items: [],
    };
  },
  created() {
    // getAllCardsFromDb().then((res) => {
    //   // console.log(res);
    //   this.items = res.data;
    // });
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,700;1,400&display=swap");

.card-split {
  border-radius: 10px;
  margin-right: 50px;
}
</style>
