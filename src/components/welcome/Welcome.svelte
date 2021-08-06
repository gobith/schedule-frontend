<script lang="ts">
    export let user;
</script>

{#if user}
    <div>Hallo {user.name}</div>
{/if}

<style>
</style>
