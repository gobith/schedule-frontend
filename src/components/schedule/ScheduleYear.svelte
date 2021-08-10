<script lang="ts">
  import ScheduleMonth from "./ScheduleMonth.svelte";
  import ScheduleUsers from "./ScheduleUsers.svelte";
  export let year;
  export let users;

  $: numberOfMonths = year.children.length;
</script>

<div>{year.name}</div>
<div class="columns" style="--number-of-months: {numberOfMonths}">
  <ScheduleUsers {users} />
  {#each year.children as month}
    <ScheduleMonth {month} {users} />
  {/each}
</div>

<style>
  .columns {
    display: grid;
    grid-template-columns: 14em repeat(var(--number-of-months), auto);
  }
</style>
