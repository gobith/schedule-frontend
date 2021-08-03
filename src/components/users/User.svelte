<script lang="ts">
    import { modifyUser } from "../../stores/schedule-store";
    export let user;
</script>

<tr>
    <td>{user.name}</td>
    <td>{user.surname}</td>
    <td>{user.email}</td>
    <td>{user.phone}</td>
    <td>{user.role}</td>
    <td>{user.websiteRole}</td>
    <td><button on:click={modifyUser(user)}>Update User</button></td>
</tr>

<style>
</style>
