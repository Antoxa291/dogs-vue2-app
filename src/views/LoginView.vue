<template>
  <el-col>
    <h1>LOGIN</h1>
    <h3>What is your role?</h3>
    <el-row>
      <el-button type="primary" @click="handleClick('User')">User</el-button>
      <el-button type="success" @click="handleClick('Admin')">Admin</el-button>
    </el-row>
  </el-col>
</template>

<script>
import { mapActions, mapState } from "vuex";
// import Validation from "@/mixins/Validation";

export default {
  name: "LoginView",
  // mixins: [Validation],
  data() {
    return {
      isFormValid: false,
      showPassword: false,
      form: {
        email: null,
        password: null,
      },
    };
  },

  computed: {
    ...mapState({
      loading: (state) => state.loading,
    }),
  },

  methods: {
    ...mapActions(["login"]),

    // validate() {
    //   if (this.$refs.form.validate()) {
    //     debounce.debounce_first(async () => await this.login(this.form));
    //   }
    // },

    handleClick(name) {
      this.login({
        email: name,
        password: "",
      });
    },
  },
};
</script>
