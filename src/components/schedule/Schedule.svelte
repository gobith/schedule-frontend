<script lang="ts">
  import scheduleStore from "../../stores/schedule-store";
  let users = $scheduleStore.users;
  let events = $scheduleStore.events;
  let categories = $scheduleStore.categories;
  let user = $scheduleStore.user;

  import { categoriesToSchedules } from "../../schedule";
  import ScheduleYears from "./ScheduleYears.svelte";

  $: categorySchedules = categoriesToSchedules(users, events, categories);
</script>

{#each categorySchedules as schedule}
  {#if schedule.years.length !== 0}
    <ScheduleYears
      category={schedule.category}
      users={schedule.users}
      years={schedule.years}
      yearIndex={0}
    />
  {/if}
{/each}

<style>
</style>
