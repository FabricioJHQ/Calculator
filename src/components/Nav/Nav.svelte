<script>
  import Title from "./Title.svelte";
</script>

<nav>
  <Title />
</nav>

<style lang="scss">
  nav {
    width: 100%;
    height: 3.5rem;
    position: sticky;
    top: 0;
    left: 0;
    padding: 0 4rem;
    background-color: var(--black);
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
</style>
