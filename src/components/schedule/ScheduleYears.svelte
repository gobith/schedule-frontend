<script lang="ts">
    export let users;
    export let events;
    import { groupBy } from "../../extensions";

    $: years = groupBy(events, "year");
    $: yearKeys = Object.keys(years);
</script>

{#each yearKeys as yearKey}
    <div>{yearKey}</div>
{/each}

<style>
</style>
