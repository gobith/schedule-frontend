<script lang="ts">
  export let users;
  export let events;

  import { scheduleYears } from "./schedule";
  import ScheduleYears from "./ScheduleYears.svelte";

  $: schedule = scheduleYears(users, events);

  console.log(schedule);
</script>

{#if schedule.years.length !== 0}
  <ScheduleYears users={schedule.users} years={schedule.years} yearIndex={0} />
{/if}

<style>
</style>
