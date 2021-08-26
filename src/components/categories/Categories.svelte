<script lang="ts">
    import AddCategory from "./AddCategory.svelte";
    import ModifyCategory from "./ModifyCategory.svelte";
    import CategoryList from "./CategoryList.svelte";

    export let categories;

</script>
<div>
    <AddCategory {categories} />
    <!-- <ModifyCategory {categories} /> -->
    <CategoryList {categories} />
</div>



<style>

</style>