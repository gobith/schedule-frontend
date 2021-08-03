<script lang="ts">
    import { modifyUser } from "../../stores/schedule-store";
    export let user;
</script>

<div>{user.name}</div>
<button on:click={modifyUser(user)}>Update User</button>

<style>
</style>
