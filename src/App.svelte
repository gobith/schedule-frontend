<script lang="ts">
	import scheduleStore from "./stores/schedule-store";

	const updateUser = (user) => {
		console.log(user);
		fetch("/schedule/user", {
			method: "PUT",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ id: user.id, name: user.name }),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data);
			});
	};
</script>

<div>
	{#if $scheduleStore}
		{#each $scheduleStore.users as user}
			<div>{user.name}</div>
			<button on:click={updateUser(user)}>Change User</button>
		{/each}
	{/if}
</div>

<style>
</style>
