<script lang="ts">
    export let users;
    export let events;
    import { scheduleYears } from "./schedule";

    $: schedule = scheduleYears(users, events);
</script>

<div>Robin is nat</div>

<style>
</style>
