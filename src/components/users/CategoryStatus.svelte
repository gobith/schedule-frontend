<script lang="ts">

export let user;
export let category;

$: categoryStatus = user.categoryStatus.find((catStat) => {return catStat.category === category.id});

</script>
{#if categoryStatus}
<span>{categoryStatus.status}</span>
{/if}

<style>

</style>