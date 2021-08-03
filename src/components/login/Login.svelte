<script lang="ts">
    let email = "";
    let password = "";

    const login = () => {
        console.log({ email, password });
    };
</script>

<div>
    <form on:submit|preventDefault={login}>
        <label>Email</label>
        <input name="email" placeholder="name@example.com" bind:value={email} />

        <label>Password</label>
        <input name="password" type="password" bind:value={password} />

        <button type="submit"> log in </button>
    </form>
</div>

<style>
</style>
