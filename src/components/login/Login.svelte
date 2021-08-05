<script lang="ts">
    import { login } from "../../stores/schedule-store";
    let email = "";
    let password = "";
</script>

<div>
    <form on:submit|preventDefault={login(email, password)}>
        <label for="email">Email</label>
        <input name="email" placeholder="name@example.com" bind:value={email} />

        <label for="password">Password</label>
        <input name="password" type="password" bind:value={password} />

        <button type="submit"> log in </button>
    </form>
</div>

<style>
</style>
