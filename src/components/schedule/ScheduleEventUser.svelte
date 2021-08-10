<script lang="ts">
  export let user;
  export let event;
</script>

<div class="container" />

<style>
  .container {
    margin: 0px;
    height: 1.4em;
    border-bottom: 1px solid gray;
    border-right: 1px solid gray;
    font-size: 1em;
  }
  .container:hover {
    border-right: 2px solid blue;
    border-bottom: 2px solid blue;
    border-top: 1px solid blue;
    border-left: 1px solid blue;
  }
</style>
