<script lang="ts">
  export let user;
</script>

{#if user}
  <div>Hallo Beste {user.name}</div>
{/if}

<style>
</style>
