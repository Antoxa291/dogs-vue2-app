<template>
  <div class="block">
    <el-timeline>
      <el-timeline-item
        v-for="(timeline, index) in timelines"
        :key="index"
        :timestamp="timeline.date"
        placement="top"
      >
        <el-card>
          <h4>{{ timeline.name }}</h4>
          <p>{{ timeline.message }} {{ timeline.date }} {{ timeline.timestamp }}</p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "TimeLine",
  components: {},

  computed: {
    ...mapState({
      timelines: (state) => state.dogs.timelines,
    }),
  },

  created() {},

  methods: {
    ...mapActions(["fetchDogs"]),
  },
};
</script>
