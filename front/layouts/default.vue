<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a
          class="navbar-item"
          href="/"
        >
          <img
            src="~assets/buefy.png"
            alt="Buefy"
            height="28"
          >
        </a>

        <ul class="menu-list">
          <li>
            <b-button v-if="!this.$store.state.showLoginModal" @click="logout">
              Logout
            </b-button>
          </li>
        </ul>

      </div>
    </nav>

    <div class="container column is-10">
      <Nuxt/>
    </div>

    <b-modal :active="this.$store.state.showLoginModal" :can-cancel="false">
      <template>
        <login-form @login="login" :show-error="showError"/>
      </template>
    </b-modal>

  </div>

</template>

<style lang="scss">

.navbar-brand {
  align-items: center;
  display: flex;
  flex-direction: row;
  width: 100%;
}

.menu-list {
  margin-left: auto;
  margin-right: 15px;
}

</style>

<script>

import AuthService from "../services/AuthService";

const authService = new AuthService()
import LocalStorageService from "../services/LocalStorageService"
import LoginForm from "../components/LoginForm"

export default {
  components: {LoginForm},
  data() {
    return {
      showError: false,
      items: []
    }
  },
  methods: {
    async login(email, password) {
      try {
        const response = await authService.login(email, password)
        this.showError = false
        this.$store.commit('closeLoginModal')
        LocalStorageService.setAuthToken(response.jwt)
        window.location.reload()
      } catch (err) {
        this.showError = true
      }
    },
    logout() {
      LocalStorageService.removeAuthToken()
      window.location.reload()
    }
  }
}
</script>
