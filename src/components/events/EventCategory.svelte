<script lang="ts">
  export let event;
  export let categories;

    console.log(categories);

  $: category = categories.find((cat) => {
    return cat.id === event.category;
  });
</script>

{#if category}
  <span>{category.name}</span>
{/if}

<style>
</style>
