<script>
  import Buttons from "./Buttons.svelte";
  import { result } from "./calculator";
</script>

<div class="calculator">
  <div class="result">
    <input type="text" readonly bind:value="{$result}" />
  </div>
  <Buttons />
</div>

<style lang="scss">
  .calculator {
    width: 100%;
    max-width: 350px;
    height: 100%;
    max-height: 500px;
    background-color: var(--black);
    border-radius: 8px;
    box-shadow: 0px 10px 10px 10px rgba($color: #000, $alpha: 0.1);
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 150px 1fr;

    .result {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      border-bottom: 2px solid var(--black);
      input {
        background-color: transparent;
        font-family: var(--font);
        font-weight: 400;
        font-size: 24px;
        text-align: right;
        color: var(--color);
      }
    }
  }
</style>
