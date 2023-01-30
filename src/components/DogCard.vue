<template>
  <el-card class="dog-card" :class="mod">
    <h3>{{ dog.name }}</h3>
    <img
      v-if="mod === 'mini' || ''"
      @click="onClick"
      :src="require(`../assets/${dog.image}`)"
      class="dog-image --active"
    />
    <img v-else :src="require(`../assets/${dog.image}`)" class="dog-image" />
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
      <div class="dog-action">
        <el-button type="text" class="button" @click="onClick">Detail</el-button>
      </div>
    </div>
  </el-card>
</template>

<script>
export default {
  props: ["dog", "mod"],
  methods: {
    onClick() {
      this.$emit("dogClick");
    },
  },
};
</script>

<style scoped>
.el-card {
  display: flex;
  flex-direction: column;
}
.el-card:hover {
  background-color: #40a0ff52;
}
.dog-name {
  font-weight: bold;
  margin-bottom: 14px;
}
.dog-image {
  height: 300px;
  padding-bottom: 14px;
}
.dog-image.--active {
  cursor: pointer;
  height: 100px;
}
.dog-info {
  display: flex;
  flex-direction: column;
  text-align: left;
  padding: 14px;
}
.dog-info p {
  margin: 0;
  padding-left: 15%;
}
.dog-info__title {
  font-weight: 700;
}
.dog-action {
  display: flex;
  justify-content: center;
}
.button {
  font-size: 18px;
  font-weight: 700;
}
</style>
s
