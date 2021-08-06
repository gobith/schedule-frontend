<script lang="ts">
    export let users;
    export let events;
    import { groupBy } from "../../extensions";

    $: groupedEvents = groupBy(events, "year");
</script>

<div>{JSON.stringify(groupedEvents)}</div>

<style>
</style>
