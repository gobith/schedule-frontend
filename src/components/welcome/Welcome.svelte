<script lang="ts">
  export let user;
  export let events;

  const showEvent = (event) => {
    const userStatus = event.userStatus.find((us) => {
      return us.user === user.id;
    });

    if (userStatus) {
      return userStatus.status === "confirmedScheduling";
    } else {
      return false;
    }
  };

  $: userEvents = events.filter((event) => {
    return showEvent(event);
  });
</script>

<h1>Welcome</h1>
{#if user}
  <div>Hallo {user.name}</div>

  {#each userEvents as userEvent}
    <div>{userEvent.dateString} {userEvent.timeString}</div>
    <div>{userEvent.description}</div>
  {/each}
{/if}

<style>
</style>
