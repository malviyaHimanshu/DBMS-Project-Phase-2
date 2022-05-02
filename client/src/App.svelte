<script>
  import LeftPane from "./lib/components/Left.svelte";
  import RightPane from "./lib/components/Right.svelte";
  import MiddlePane from "./lib/components/Middle.svelte";
  import "normalize.css";
</script>

<main class="w-screen h-screen overflow-hidden">
  <!-- <LeftPane /> -->
  <MiddlePane />
  <RightPane />
</main>

<style>
  main {
    display: grid;
    grid-template-columns: 1fr 2.8fr 1fr;
    grid-template-rows: 1fr;
    grid-gap: 20px;
    background-color: #d9e8f8;
  }
</style>
