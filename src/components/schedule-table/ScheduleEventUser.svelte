<script lang="ts">
  import { scheduleColor } from "../../scheduleColor";
  import { createEventDispatcher } from "svelte";

  export let event;
  export let user;

  $: userStatus = event.userStatus.find((us) => {
    return us.user === user.id;
  });
  $: color = scheduleColor(event, userStatus);

  const dispatch = createEventDispatcher();

  const showEventUser = () => {
    dispatch("message", { event, user });
  };
</script>

<td
  class="event-user"
  style="background-color: {color}"
  on:click={showEventUser}
>
  <!-- {#if userStatus}
    <span>{userStatus.status}</span>
  {/if} -->
</td>

<style>
  td {
    border: 1px solid gray;
    font-weight: normal;
    padding: 4px;
  }
  .event-user {
    width: 3em;
    height: 3em;
  }
  td:hover {
    border-right: 2px solid blue;
    border-bottom: 2px solid blue;
    border-top: 2px solid blue;
    border-left: 2px solid blue;
  }
</style>
