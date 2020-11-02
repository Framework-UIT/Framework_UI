<template>
  <div>
    <h1 class=" grey--text">Data</h1>
    <v-form @submit.prevent>
      <v-text-field
        v-model="searchVal"
        full-width
        placeholder="Give some vocabs"
      >
      </v-text-field>
      <v-btn @click="getWord">Search</v-btn>
    </v-form>
    <v-row align="center" class="mt-8" justify="center">
      <v-data-table
        v-model="selected"
        show-select
        :single-select="canSingleSelect"
        :sort-by.sync="sortBy"
        :sort-desc="sortDesc"
        :headers="headers"
        :items="items"
        item-key="uuid"
        ref="table"
        class="elevation-1"
      >
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn
            depressed
            @click="addToDatabase(item)"
            :color="checkDownloadedItem(item)"
            :disabled="downloadStatus(item)"
            small
            >{{ downloadStatus(item) ? "Downloaded" : "Add to Db" }}</v-btn
          >
        </template>
      </v-data-table>
    </v-row>
  </div>
</template>

<script>
import { getCardData, createCard } from "../api/CardApiServices";
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
        {
          text: "Order",
          align: "start",
          sortable: true,
          value: "uuid",
          class: "success--text subtitle-1 font-weight-medium",
        },
        { text: "name", value: "name" },
        { text: "description", value: "description" },
        { text: "pronunciation", value: "prs" },
        { text: "Actions", value: "actions", sortable: false },
      ],
      items: [],
    };
  },
  created() {
    if (!localStorage.getItem("search_data")) {
      localStorage.setItem("search_data", JSON.stringify([]));
    } else {
      let copy_data = JSON.parse(localStorage.getItem("search_data"));
      copy_data.forEach((search) => {
        if (localStorage.getItem(search)) {
          let searchResults = JSON.parse(localStorage.getItem(search));
          this.items = this.items.concat(searchResults);
        }
      });
    }
    // getAllCardsFromDb().then(
    //   (res) => {
    //     // console.log(res);
    //     this.items = res.data;
    //   },
    //   (err) => console.log(err)
    // );
  },
  methods: {
    downloadStatus(item) {
      return item.isDownloaded ? true : false;
    },
    checkSearchExist() {
      let copy_ls_data = JSON.parse(localStorage.getItem("search_data"));
      let isSearched = copy_ls_data.findIndex((item) => item == this.searchVal);
      if (isSearched != -1) return true;
      return false;
    },
    showClickedRow(row) {
      this.selected_row = row;
    },
    checkDownloadedItem(item) {
      return item.isDownloaded ? "error" : "primary";
    },
    addSearchToLocalStorage() {
      let copy_ls_data = JSON.parse(localStorage.getItem("search_data"));
      if (copy_ls_data != null) {
        let isSearched = copy_ls_data.findIndex(
          (item) => item == this.searchVal
        );
        console.log(isSearched);
        if (isSearched == -1) {
          copy_ls_data.push(this.searchVal);
          localStorage.setItem("search_data", JSON.stringify(copy_ls_data));
        } else alert("đã tìm cụm từ này");
      } else copy_ls_data.push(this.searchVal);
    },
    addDataToLocalStorage(items) {
      localStorage.setItem(this.searchVal, JSON.stringify(items));
    },
    addToDatabase(item) {
      // console.log(item);
      createCard(item).then((res) => console.log(res));
      this.setItemDownloaded(item);
    },
    setItemDownloaded(item) {
      this.items.forEach((it) => {
        if (it.uuid == item.uuid) it.isDownloaded = true;
      });
      // console.log(found_item);
    },
    addAllSelectedToDb() {
      this.selected.forEach((item) => {
        createCard(item);
      });
    },
    getWord() {
      if (!this.checkSearchExist())
        getCardData(this.searchVal).then((res) => {
          let result = res.data;
          result.forEach((element) => {
            let formatted_word = {
              uuid: element.meta.uuid,
              name: element.meta.id,
              description: "shortdef" in element ? element.shortdef[0] : "",
              prs:
                "hwi" in element && "prs" in element.hwi
                  ? element.hwi.prs[0].mw
                  : " ",
              isDownloaded: false,
              search_word: this.searchVal,
            };
            this.items.push(formatted_word);
          });
          this.addSearchToLocalStorage();
          this.addDataToLocalStorage(this.items);
        });
      else alert("Dữ liệu đã tồn tại trong bảng");
    },
  },
};
</script>

<style scoped>
.header-default {
  color: blue;
}
</style>
