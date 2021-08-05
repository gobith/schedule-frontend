<script lang="ts">
	import scheduleStore from "./stores/schedule-store";
	import Users from "./components/users/Users.svelte";
	import Login from "./components/login/Login.svelte";
	import Logout from "./components/logout/Logout.svelte";
</script>

<div>
	{#if $scheduleStore}
		<Login />
		<Logout />
		<Users users={$scheduleStore.users} />
	{/if}
</div>

<style>
</style>
