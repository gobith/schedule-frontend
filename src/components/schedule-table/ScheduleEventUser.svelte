<script lang="ts">
  export let event;
  export let user;

  $: userStatus = event.userStatus.find((us) => {
    return us.user === user.id;
  });
</script>

{#if userStatus}
  <span> {userStatus.status}</span>
{/if}

<style>
</style>
