<script lang="ts">
  import Calculator from "../components/Calculator/Calculator.svelte";
</script>

<section>
  <Calculator />
</section>

<style lang="scss">
  section {
    width: 100%;
    height: calc(100vh - 3.5rem);
    display: grid;
    place-items: center;
  }
</style>
