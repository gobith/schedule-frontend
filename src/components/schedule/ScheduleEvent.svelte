<script lang="ts">
  import ScheduleEventUser from "./ScheduleEventUser.svelte";
  export let event;
  export let users;
</script>

<div>
  <div class="title">{event.timeString}</div>
  {#each users as user}
    <ScheduleEventUser {user} {event} />
  {/each}
</div>

<style>
  .title {
    text-align: center;
    border-bottom: 1px solid gray;
    border-right: 1px solid gray;
    padding-right: 0.3em;
    padding-left: 0.3em;
  }
</style>
