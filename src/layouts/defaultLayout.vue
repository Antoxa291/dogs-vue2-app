<template>
  <el-container>
    <el-aside width="150px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['2']">
        <el-menu-item index="1" @click="changeView('/')">
          <i class="el-icon-s-order"></i>Table view
        </el-menu-item>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-s-grid"></i>Gallery view</template>
          <el-menu-item-group>
            <el-menu-item index="2-1" @click="changeView('/cards-full')"
              ><i class="el-icon-menu"></i>Cards</el-menu-item
            >
            <el-menu-item index="2-2" @click="changeView('/cards-mini')"
              ><i class="el-icon-s-grid"></i>Mini cards</el-menu-item
            >
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item
          v-if="userName === 'Admin'"
          index="3"
          @click="changeView('/timeline')"
        >
          <i class="el-icon-data-line"></i>Timeline
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header
        ><a href="/login" @click="handleLogout">
          <el-dropdown @click="handleLogout">
            <i class="el-icon-setting">Log out </i>
          </el-dropdown></a
        >
        <span
          ><strong>{{ userName }}</strong></span
        >
      </el-header>

      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "DefaultLayout",
  computed: {
    ...mapState({
      userName: (state) => state.auth.user?.email || "User",
    }),
  },
  methods: {
    ...mapActions({
      logout: "logout",
      changeView: "changeView",
      fetchDogs: "fetchDogs",
    }),
    handleLogout() {
      this.logout();
    },
  },
  created() {
    this.fetchDogs();
  },
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  text-align: right;
  font-size: 12px;
}

.el-aside {
  color: #333;
}

.el-menu {
  background-color: transparent;
}

.el-menu-item {
  display: flex;
  align-items: center;
}
.el-dropdown {
  margin-right: 20px;
}
.el-dropdown:hover {
  cursor: pointer;
  background-color: #3689f7c1;
}
</style>
