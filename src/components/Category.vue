<template>
  <v-container>
    <section>
      <h1 class=" grey--text">Data</h1>
      <v-data-table
        v-model="selected"
        show-select
        :single-select="canSingleSelect"
        :sort-by.sync="sortBy"
        :sort-desc="sortDesc"
        :headers="headers"
        :items="items"
        ref="table"
        class="elevation-1"
      >
      </v-data-table>
    </section>
    <section>
      <v-row justify="end" align-content="end">
        <v-btn color="primary" class="mx-0 mt-2">Add new category</v-btn>
      </v-row>
    </section>
  </v-container>
</template>

<script>
import { getCategories } from "../api/CategoryApiServices";
export default {
  name: "Data",
  data() {
    return {
      selected: [],
      canSingleSelect: false,
      sortBy: "id",
      sortDesc: true,
      pagination: { sortBy: "Order", descending: false, rowsPerPage: -1 },
      searchVal: "",
      headers: [
        { text: "Id", value: "categoryId" },
        { text: "Name", value: "name" },
        { text: "Description", value: "description", sortable: false },
      ],
      items: [],
    };
  },
  created() {
    getCategories()
      .then((res) => (this.items = res.data))
      .catch((e) => console.log(e));
  },
  methods: {},
  computed: {},
};
</script>

<style scoped>
.header-default {
  color: blue;
}
</style>
