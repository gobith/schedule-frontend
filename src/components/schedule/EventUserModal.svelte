<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";
  import { updateUserEventStatus } from "../../stores/schedule-store";

  export let event;
  export let user;
  export let statusPermissions;

  const dispatch = createEventDispatcher();

  const close = () => {
    dispatch("close", {});
  };

  let userStatus = event.userStatus.find((us) => {
    return us.user === user.id;
  });

  let selectedStatus = userStatus.status;

  const updateStatus = (status) => {
    updateUserEventStatus(user, event, status);
    close();
  };
</script>

<div
  in:fade={{ duration: 250 }}
  out:fade={{ duration: 500 }}
  class="background"
>
  <div in:fade={{ duration: 500 }} out:fade={{ duration: 250 }} class="modal">
    <div>{event.timeString}</div>
    <div>{user.name}</div>

    {#each statusPermissions as status}
      <label>
        <input
          type="radio"
          bind:group={selectedStatus}
          value={status}
          on:click={updateStatus(status)}
        />
        {status}
      </label>
    {/each}

    <button on:click={close}>Close</button>
  </div>
</div>

<style>
  .background {
    position: absolute;
    z-index: 1000;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.66);
  }
  .modal {
    width: 40em;
    height: 40em;
    max-width: 100%;
    max-height: 100%;
    margin: 2em auto;
    color: black;
    border-radius: 0.5em;
    background: rgba(255, 255, 255, 1);
    border: 1px solid black;
  }
</style>
