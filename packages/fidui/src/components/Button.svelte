<script lang="ts">
  /* PLACEHOLDER FOR BUTTON */
  let { children } = $props();
</script>

<button>
  {@render children()}
</button>

<style>
  button {
    background-color: #000;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
  }
</style>
