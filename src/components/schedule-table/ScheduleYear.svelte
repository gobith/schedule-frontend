<script lang="ts">
  import ScheduleEventUser from "./ScheduleEventUser.svelte";

  export let year;
  export let users;
</script>

<div>{year.name}</div>
<table>
  <tr>
    <th class="title-td">Maand</th>
    {#each year.children as month}
      <th colspan={month.numberOfColumns}>{month.name}</th>
    {/each}
  </tr>
  <tr>
    <th class="title-td">Dag</th>
    {#each year.days as day}
      <th colspan={day.numberOfColumns}>{day.name}</th>
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
        <td class="event-user">
          <ScheduleEventUser {event} {user} />
        </td>
      {/each}
    </tr>
  {/each}
</table>

<style>
  table {
    font-size: 10px;
    border-collapse: collapse;
  }

  table,
  th,
  td {
    border: 1px solid gray;
    font-weight: normal;
    padding: 4px;
  }
  .title-td {
    width: 12em;
  }
  .time {
    writing-mode: vertical-lr;
    transform: rotate(180deg);
  }
  td:hover {
    border-right: 2px solid blue;
    border-bottom: 2px solid blue;
    border-top: 2px solid blue;
    border-left: 2px solid blue;
  }
  .event-user {
    width: 3em;
    height: 3em;
  }
</style>
