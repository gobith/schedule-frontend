<script lang="ts">
  import ScheduleMonth from "./ScheduleMonth.svelte";
  import ScheduleUsers from "./ScheduleUsers.svelte";
  export let year;
  export let users;

  console.log(year);
  console.log(users);
</script>

<div>{year.name}</div>
<div class="columns">
  <ScheduleUsers {users} />
  {#each year.children as month}
    <ScheduleMonth {month} {users} />
  {/each}
</div>

<style>
  .columns {
    display: grid;
    grid-template-columns: repeat(12, auto);
  }
</style>
