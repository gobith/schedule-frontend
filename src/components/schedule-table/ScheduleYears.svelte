<script lang="ts">
  import ScheduleYear from "./ScheduleYear.svelte";
  import EventUserModal from "./EventUserModal.svelte";

  export let users;
  export let years;
  export let yearIndex;

  let showModal = false;
  let eventUser;

  console.log(years);

  $: year = years[yearIndex];
  $: scheduleUsers = users.filter((user) => {
    return true;
  });

  const forwards = () => {
    if (yearIndex === 0) {
      yearIndex = years.length - 1;
    } else {
      yearIndex = yearIndex - 1;
    }
  };

  const backwards = () => {
    if (yearIndex === years.length - 1) {
      yearIndex = 0;
    } else {
      yearIndex = yearIndex + 1;
    }
  };

  const showEventUser = (event) => {
    eventUser = event.detail;
    showModal = true;
  };

  const closeModal = () => {
    showModal = false;
  };
</script>

<div class="schedule">
  {#if showModal}
    <EventUserModal
      event={eventUser.event}
      user={eventUser.user}
      on:close={closeModal}
    />
  {/if}

  <button on:click={backwards}>&#8592;</button>
  <button on:click={forwards}>&#8594;</button>
  <ScheduleYear {year} users={scheduleUsers} on:message={showEventUser} />
</div>

<style>
  .schedule {
    position: relative;
  }
</style>
