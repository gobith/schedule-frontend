<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { fade } from "svelte/transition";

  export let event;
  export let user;

  const dispatch = createEventDispatcher();

  const close = () => {
    dispatch("close", {});
  };
</script>

<div
  in:fade={{ duration: 250 }}
  out:fade={{ duration: 500 }}
  class="background"
  on:click={close}
>
  <div in:fade={{ duration: 500 }} out:fade={{ duration: 250 }} class="modal">
    <div>{event.timeString}</div>
    <div>{user.name}</div>
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
    position: relative;
    width: 40rem;
    max-width: 100%;
    max-height: 100%;
    margin: 2rem auto;
    color: black;
    border-radius: 0.5rem;
    background: white;
  }
</style>
