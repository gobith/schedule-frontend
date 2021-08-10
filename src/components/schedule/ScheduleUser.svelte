<script lang="ts">
  export let user;
</script>

<div class="container">{user.name}</div>

<style>
  .container {
    height: 1.4em;
    border-bottom: 1px solid gray;
    border-right: 1px solid gray;
    font-size: 1em;
  }
  .container:hover {
    border-right: 2px solid blue;
    border-bottom: 2px solid blue;
    border-top: 1px solid blue;
    border-left: 2px solid blue;
  }
</style>
