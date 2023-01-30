<template>
  <div class="home">
    <el-pagination
      background
      layout="prev, pager, next"
      :total="dogs.length"
      :page-size="pageSize"
      :current-page="currentPage"
      @current-change="handleNext"
    >
    </el-pagination>

    <el-row>
      <el-col
        :span="viewMod === 'mini' ? 4 : 8"
        v-for="(dog, index) in showedDogs"
        :key="index"
      >
        <DogCard :dog="dog" :mod="viewMod" dogClick="openDetail(index)" />
      </el-col>
    </el-row>

    <el-pagination
      background
      layout="prev, pager, next"
      :total="dogs.length"
      :page-size="pageSize"
      :current-page="currentPage"
      @current-change="handleNext"
    >
    </el-pagination>
  </div>
</template>

<script>
// import router from "@/router/index";
import { mapActions, mapState } from "vuex";
import DogCard from "@/components/DogCard.vue";

export default {
  name: "CardView",
  data() {
    return {
      pageSize: 12,
      currentPage: 1,
    };
  },
  components: {
    DogCard,
  },

  computed: {
    ...mapState({
      dogs: (state) => state.dogs.dogs,
      viewMod: (state) => state.viewMod,
    }),
    showedDogs() {
      return this.dogs.slice(
        this.pageSize * (this.currentPage - 1),
        this.currentPage * this.pageSize
      );
    },
  },

  created() {},

  methods: {
    ...mapActions(["fetchDogs"]),
    handleNext(e) {
      this.currentPage = e;
    },
    openDetail(index) {
      // router.push(`detail&` + index);
      console.log("index", index);
    },
  },
};
</script>

<style scoped>
.el-pagination {
  padding-top: 20px;
  padding-bottom: 20px;
}
</style>
