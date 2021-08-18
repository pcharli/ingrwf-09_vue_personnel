<template>
  <div id="app" class="content container">
    <header class="hero is-primary">
        <div class="hero-body">
          <h1 class="title">Personnel du Cepegra</h1>
        </div>
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/contact">Contact</router-link>
        </div>
    </header>
    <router-view/>
    <footer class="footer">
            <p class="has-text-centered">Cepegra 2021</p>
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
