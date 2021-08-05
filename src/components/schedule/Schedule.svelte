<script lang="ts">
    export let users;
    export let events;
    import { groupBy } from "../../extensions";

    $: groupedEvents = groupBy(events, "status");
</script>

<div>{groupedEvents}</div>

<style>
</style>
