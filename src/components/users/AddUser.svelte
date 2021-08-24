<script lang="ts">
  export let categories;

  let name = "";
  let surname = "";
  let email = "";
  let phone = "";
  let role = "";
  let websiteRole = "";

  const addUser = () => {
    console.log({ name, surname, email, phone, role, websiteRole });
  };
</script>

<h1>Add User</h1>

<form on:submit|preventDefault={addUser}>
  <label for="name">Naam</label>
  <input name="name" type="text" bind:value={name} required />
  <label for="surname">Achternaam</label>
  <input name="surname" type="text" bind:value={surname} required />
  <label for="email">Email</label>
  <input name="email" type="email" bind:value={email} required />
  <label for="phone">Telefoon</label>
  <input name="phone" type="text" bind:value={phone} required />
  <label for="role">Role</label>
  <select name="role" required bind:value={role}>
    <option hidden disabled selected value={""}>Selecteer Rol</option>
    <option value="normal">Normaal</option>
    <option value="coordinator">Coordinator</option>
    <option value="archive">Archief</option>
  </select>
  <label for="websiteRole">Website Role</label>
  <select name="websiteRole" required bind:value={websiteRole}>
    <option hidden disabled selected value={""}>Selecteer Website Rol</option>
    <option value="normal">Normaal</option>
    <option value="admin">Admin</option>
  </select>
  <button type="submit"> Voeg toe </button>
</form>

<style>
</style>
