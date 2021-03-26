<script lang="ts">
  let count = 0;
  const increment = () => {
    count += 1;
  };
</script>

<button on:click={increment}>
  Clicks: {count}
</button>

<style>
  button {
    background-color: rgba(255, 62, 0, 0.1);
    border: 2px solid rgba(255, 62, 0, 0);
    border-radius: 2em;
    color: #ff3e00;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    font-variant-numeric: tabular-nums;
    outline: none;
    padding: 1em 2em;
    width: 200px;
  }

  button:focus {
    border: 2px solid #ff3e00;
  }

  button:active {
    background-color: rgba(255, 62, 0, 0.2);
  }
</style>
