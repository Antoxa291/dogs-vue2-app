<template>
  <div class="home">
    <DogTable :dogs="dogs" />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import DogTable from "@/components/DogTable.vue";

export default {
  name: "HomeView",
  components: {
    DogTable,
  },

  computed: {
    ...mapState({
      dogs: (state) => state.dogs.dogs,
    }),
  },

  created() {},

  methods: {
    ...mapActions(["fetchDogs"]),
  },
};
</script>
