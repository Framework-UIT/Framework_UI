<template>
  <div>
    <v-navigation-drawer app class="deep-purple accent-4" dark>
      <v-list>
        <v-list-item v-for="item in items" :key="item.title" :to="item.route">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-main class="pa-8">
      <v-container class="mr-2">
        <section>
          <v-row class="mx-0 blue ">
            <v-col md="2">
              <v-avatar color="primary" size="120"></v-avatar>
            </v-col>
            <v-col>
              <h1>rito_alpha</h1>
            </v-col>
          </v-row>
        </section>
        <section>
          <v-row justify="space-between">
            <h1>Your sets</h1>
            <h3 class="mr-2 my-auto">view more</h3>
          </v-row>
          <v-row class="mx-0 blue lighten-2" justify="start" dense>
            <v-col md="1"> </v-col>
            <v-col>
              <Card
                quantity="26"
                title="Your set"
                body="Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centurie"
                class="mb-8"
              ></Card>
              <Card
                quantity="26"
                title="Your set"
                body="your body"
                class="mb-8"
              ></Card>
            </v-col>
          </v-row>
        </section>
        <section class="pt-16">
          <h1>Your cards</h1>
          <v-row>
            <v-col v-for="n in 9" :key="n" class="d-flex child-flex" cols="4">
              <CardImage
                :imgUrl="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
              >
              </CardImage>
            </v-col>
          </v-row>
        </section>
      </v-container>
    </v-main>
  </div>
</template>

<script>
import Card from "../components/Set";
import CardImage from "../components/CardImg";
export default {
  name: "User",
  components: {
    Card,
    CardImage,
  },
  data() {
    return {
      items: [
        { title: "Home", icon: "mdi-home", route: "#" },
        { title: "Set", icon: "mdi-folder-star-multiple-outline", route: "#" },
        {
          title: "Collection",
          icon: "mdi-checkbox-multiple-blank",
          route: "/#",
        },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 31pt;
}
</style>
