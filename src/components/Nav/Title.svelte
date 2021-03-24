<script lang="ts">
  let welcome = "Buenos días";
  let now: Date = new Date();
  let hours: number = now.getHours();
  if (hours > 0 && hours < 6) {
    welcome = "Buen madrugador";
  }
  if (hours > 6 && hours < 12) {
    welcome = "Buenos días";
  }
  if (hours > 12 && hours < 18) {
    welcome = "Buenas tardes";
  }
  if (hours > 18 && hours < 0) {
    welcome = "Buenas noches";
  }
</script>

<h2>
  My Calculator <span>|</span> <span>{welcome}</span>
</h2>

<style lang="scss">
  h2 {
    font-family: var(--font);
    font-weight: 500;
    font-size: 16px;
    color: var(--color);

    span {
      font-size: 14px;
      margin-left: 1rem;
    }
  }
</style>
