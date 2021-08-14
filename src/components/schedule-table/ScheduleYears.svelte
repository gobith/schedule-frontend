<script lang="ts">
  import ScheduleYear from "./ScheduleYear.svelte";

  export let users;
  export let years;
  export let yearIndex;

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
</script>

<div class="schedule">
  <button on:click={backwards}>&#8592;</button>
  <button on:click={forwards}>&#8594;</button>
  <ScheduleYear {year} users={scheduleUsers} />
</div>

<style>
  .schedule {
  }
</style>
