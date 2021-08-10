<script lang="ts">
    import ScheduleUser from "./ScheduleUser.svelte";
    export let users;
</script>

<div>
    <div class="title">Maand</div>
    <div class="title">Dag</div>
    <div class="title">Dagdeel</div>
    {#each users as user}
        <ScheduleUser {user} />
    {/each}
</div>

<style>
    .title {
        border-bottom: 1px solid gray;
        border-right: 1px solid gray;
    }
</style>
