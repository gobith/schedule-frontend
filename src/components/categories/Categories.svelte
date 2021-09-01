<script lang="ts">
  import scheduleStore from "../../stores/schedule-store";
  import AddCategory from "./AddCategory.svelte";
  import ModifyCategory from "./ModifyCategory.svelte";
  import CategoryList from "./CategoryList.svelte";

  let categories = $scheduleStore.categories;
  let selection = null;

  const updateSelection = (event) => {
    selection = event.detail;
  };
</script>

<div>
  <AddCategory {categories} />
  <CategoryList {categories} on:selection={updateSelection} />
  {#if selection}
    <ModifyCategory {categories} {selection} on:selection={updateSelection} />
  {/if}
</div>

<style>
</style>
