<script lang="ts">
  export let users;
  export let events;
  export let categories;
  export let user;

  import { categorySchedules } from "../../schedule";
  import ScheduleYears from "./ScheduleYears.svelte";

  $: schedule = categorySchedules(users, events, categories);
</script>

{#if schedule.years.length !== 0}
  <ScheduleYears users={schedule.users} years={schedule.years} yearIndex={0} />
{/if}

<style>
</style>
