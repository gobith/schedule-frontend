<script lang="ts">
	import scheduleStore from "./stores/schedule-store";
	import Welcome from "./components/welcome/Welcome.svelte";
	import Users from "./components/users/Users.svelte";
	import Login from "./components/login/Login.svelte";
	import Logout from "./components/logout/Logout.svelte";
	import ScheduleYears from "./components/schedule/ScheduleYears.svelte";
</script>

<div>
	{#if $scheduleStore}
		<Login />
		<Logout />
		<Welcome user={$scheduleStore.user} />
		<Users users={$scheduleStore.users} />
		<ScheduleYears
			users={$scheduleStore.users}
			events={$scheduleStore.events}
		/>
	{/if}
</div>

<style>
</style>
