<template>
  <el-table :data="dogs" style="width: 100%">
    <el-table-column fixed prop="name" label="Name" width="150"> </el-table-column>
    <el-table-column prop="breed" label="Breed" width="120"> </el-table-column>
    <el-table-column prop="registration" label="Registration" width="120">
    </el-table-column>
    <el-table-column prop="birth" label="Birth date" width="120"> </el-table-column>
    <el-table-column prop="last_update" label="Last Update" width="120">
    </el-table-column>
    <el-table-column
      ><el-button @click="handleClick" type="text" size="small">Detail</el-button>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  props: ["dogs"],
  methods: {
    handleClick() {
      this.$emit("handleClick");
    },
  },
};
</script>

<style scoped></style>
