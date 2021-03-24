<script lang="ts">
  import { result } from "./calculator";
</script>

<div class="buttons">
  <button on:click="{result.seven}">7</button>
  <button on:click="{result.eight}">8</button>
  <button on:click="{result.nine}">9</button>
  <button on:click="{result.mul}" class="resalt">*</button>
  <button on:click="{result.four}">4</button>
  <button on:click="{result.five}">5</button>
  <button on:click="{result.six}">6</button>
  <button on:click="{result.sub}" class="resalt">-</button>
  <button on:click="{result.one}">1</button>
  <button on:click="{result.two}">2</button>
  <button on:click="{result.three}">3</button>
  <button on:click="{result.sum}" class="resalt">+</button>
  <button on:click="{result.dot}">.</button>
  <button on:click="{result.zero}">0</button>
  <button on:click="{result.fra}">%</button>
  <button on:click="{result.div}" class="resalt">/</button>
  <button on:click="{result.c}" class="ce">CE</button>
  <button on:click="{result.equal}" class="equal"> = </button>
</div>

<style lang="scss">
  .buttons {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
    background-color: rgba($color: #000000, $alpha: 0.25);
    border-radius: 0 0 8px 8px;

    button {
      background: transparent;
      border: none;
      outline: none;
      border-radius: 0px;
      transition: 0.3s;
      font-family: var(--font);
      font-weight: 400;
      font-size: 18px;
      color: var(--color);
      cursor: pointer;
      position: relative;
      overflow: hidden;
      &.resalt {
        border-left: 2px solid var(--black);
      }

      &.ce {
        background-color: #ff2e63;
        border-radius: 0 0 0 8px;
      }
      &.equal {
        background-color: #1fab89;
        border-radius: 0 0 8px 0;
      }
      &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transition: 0.3s;
        background-color: transparent;
        z-index: 2;
      }
      &:hover::before {
        background-color: rgba($color: #000, $alpha: 0.15);
      }
      &:nth-last-child(-n + 2) {
        grid-column: span 2;
      }
    }
    /* .double-ce {
      grid-column: 1 / 3;
      grid-row: 5 / 6;
      &:last-child {
        grid-column: 3 / 5;
      }
    } */
  }
</style>
