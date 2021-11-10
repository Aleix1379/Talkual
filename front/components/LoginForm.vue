<template>
  <div class="login-container">

    <section class="login-form">

      <b-field label="Email">
        <b-input type="email"
                 v-model="email"
                 maxlength="30">
        </b-input>
      </b-field>

      <b-field label="Password">
        <b-input type="password"
                 v-model="password"
                 password-reveal>
        </b-input>
      </b-field>

      <span v-if="showError" class="login-error">Usuario o contrasenya no validos</span>

      <b-button
        class="btn-login"
        @click="login"
      >
        Login
      </b-button>


    </section>

  </div>
</template>

<style lang="scss">

.login-container {
  display: flex;
  justify-content: center;
}

.login-form {
  background: white;
  width: 400px;
  padding: 30px;
  border-radius: 4px;

  display: flex;
  flex-direction: column;
}

.btn-login {
  margin-top: 30px;
}

.login-error {
  color: #f43232;
}

</style>

<script>

export default {
  data: () => ({
    email: '',
    password: ''
  }),
  methods: {
    async login() {
      this.$emit('login', this.email, this.password)
    }
  },
  props: {
    showError: {
      type: Boolean,
      required: false
    }
  }
}

</script>
