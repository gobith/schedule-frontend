<script lang="ts">
  import ScheduleEventUser from "./ScheduleEventUser.svelte";
  export let event;
  export let users;
</script>

<div>
  <div class="title">
    <div class="vertical">{event.timeString}</div>
  </div>
  {#each users as user}
    <ScheduleEventUser {user} {event} />
  {/each}
</div>

<style>
  .title {
    border-bottom: 1px solid gray;
    border-right: 1px solid gray;
    padding-bottom: 0.8em;
    padding-top: 0.8em;
  }

  .vertical {
    transform: rotate(-90deg);
  }
</style>
