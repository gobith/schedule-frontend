<script lang="ts">
	import scheduleStore from "./stores/schedule-store";
	import Users from "./components/users/Users.svelte";
	import Login from "./components/login/Login.svelte";
</script>

<div>
	{#if $scheduleStore}
		<Login />
		<Users users={$scheduleStore.users} />
	{/if}
</div>

<style>
</style>
