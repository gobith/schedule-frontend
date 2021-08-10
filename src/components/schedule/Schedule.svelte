<script lang="ts">
  export let users;
  export let events;
  import { scheduleYears } from "./schedule";
  import ScheduleYears from "./ScheduleYears.svelte";

  $: schedule = scheduleYears(users, events);

  console.log(schedule);
</script>

<ScheduleYears users={schedule.users} years={schedule.years} yearIndex={0} />

<style>
</style>
