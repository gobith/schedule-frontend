<script lang="ts">
  import ScheduleEventUser from "./ScheduleEventUser.svelte";
  import EventUserModal from "./EventUserModal.svelte";
  import { fade } from "svelte/transition";

  export let year;
  export let users;

  let showModal = false;
  let eventUser;

  const showEventUser = (event) => {
    eventUser = event.detail;
    showModal = true;
  };

  const closeModal = () => {
    showModal = false;
  };
</script>

<div>{year.name}</div>
<table in:fade={{ duration: 500 }}>
  <tr>
    <th class="title-td">Maand</th>
    {#each year.children as month}
      <th class="month" colspan={month.numberOfColumns}>{month.name}</th>
    {/each}
  </tr>
  <tr>
    <th class="title-td">Dag</th>
    {#each year.days as day}
      <th class="day" colspan={day.numberOfColumns}>{day.name}</th>
    {/each}
  </tr>
  <tr>
    <th class="title-td">Dagdeel</th>
    {#each year.events as event}
      <th class="time">
        {event.timeString}
      </th>
    {/each}
  </tr>
  {#each users as user}
    <tr>
      <td class="title-td">
        {user.name}
      </td>
      {#each year.events as event}
        <ScheduleEventUser {event} {user} on:message={showEventUser} />
      {/each}
    </tr>
  {/each}
  {#if showModal}
    <EventUserModal
      event={eventUser.event}
      user={eventUser.user}
      on:close={closeModal}
    />
  {/if}
</table>

<style>
  table {
    font-size: 8px;
    border-collapse: collapse;
    position: relative;
  }

  table,
  th,
  td {
    border: 1px solid #63666a;
    font-weight: normal;
    padding: 4px;
  }
  .title-td {
    width: 12em;
    font-size: 1.5em;
  }
  .time {
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    font-size: 1.5em;
  }

  .day,
  .month {
    font-size: 1.7em;
  }
</style>
