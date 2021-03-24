<script lang="ts">
  /* import Footer from '../Footer/Footer.svelte'; */
  import Nav from "../Nav/Nav.svelte";
  /* export let page; */
</script>

<main>
  <div>
    <Nav />

    <slot />

    <!-- <Footer /> -->
  </div>
</main>

<style lang="scss">
  main {
    width: 100%;
    height: 100vh;
    background-color: var(--background);
    display: flex;
    flex-direction: column;
    transition: 0.5s;
    overflow: hidden;
    div {
      width: calc(100% + 16.5px);
      overflow-y: scroll;
      overflow-x: hidden;
    }
  }
</style>
