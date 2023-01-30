<template>
  <el-card class="dog-card" :class="mod">
    <h3>{{ dog.name }}</h3>
    <img :src="require(`../assets/${dog.image}`)" class="dog-image" />
    <div v-if="mod === 'full'" class="dog-info">
      <p><span class="dog-info__title">Breed: </span>{{ dog.breed }}</p>
      <p><span class="dog-info__title">Registration: </span>{{ dog.registration }}</p>
      <p><span class="dog-info__title">Birth day: </span>{{ dog.birth }}</p>
      <br />
      <p>
        <span class="dog-info__title">Latest time line activity: </span>
        <br />
        {{ dog.last_update }}
      </p>
    </div>
  </el-card>
</template>


<script>
export default {
  props: ["dog"],
  methods: {
    onClick() {
      this.$emit("dogClick");
    },
  },
};
</script>
