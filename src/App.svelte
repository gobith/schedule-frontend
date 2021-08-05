<script lang="ts">
	import scheduleStore from "./stores/schedule-store";
	import Users from "./components/users/Users.svelte";
	import Login from "./components/login/Login.svelte";
	import Logout from "./components/logout/Logout.svelte";
	import Schedule from "./components/schedule/Schedule.svelte";
</script>

<div>
	{#if $scheduleStore}
		<Login />
		<Logout />
		<Users users={$scheduleStore.users} />
		<Schedule users={$scheduleStore.users} events={$scheduleStore.events} />
	{/if}
</div>

<style>
</style>
