<script lang="ts">
	import scheduleStore from "./stores/schedule-store";
	import Users from "./components/users/Users.svelte";
</script>

<div>
	{#if $scheduleStore}
		<Users users={$scheduleStore.users} />
	{/if}
</div>

<style>
</style>
