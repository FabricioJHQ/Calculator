<script lang="ts">
  import Main from "../components/Layout/Main.svelte";
</script>

<Main>
  <slot />
</Main>

<style lang="scss">
  :global(*, *::after, *::before) {
    box-sizing: border-box;
    border: none;
    outline: none;
  }
  :global(img) {
    border: none;
    outline: none;
  }
  :global(body) {
    --background: #222831;
    --black: #393e46;
    --primary: #00adb5;
    --color: #eeeeee;
    --font: "Roboto Slab";
  }
</style>
