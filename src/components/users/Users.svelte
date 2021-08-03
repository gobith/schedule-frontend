<script lang="ts">
    import User from "./User.svelte";
    export let users;
</script>

<div>
    <table>
        <tr
            ><th>Naam</th><th>Achternaam</th><th>Email</th><th>Telefoon</th><th
                >Rol</th
            ><th>Website Rol</th></tr
        >

        {#each users as user}
            <User {user} />
        {/each}
    </table>
</div>

<style>
</style>
