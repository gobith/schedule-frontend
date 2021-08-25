<script lang="ts">
  import { addUser } from "../../stores/schedule-store";

  export let categories;

  let name = "";
  let surname = "";
  let email = "";
  let phone = "";
  let role = "";
  let websiteRole = "";
  let categoryStatus = categories.map((category) => {
    return { category, status: "" };
  });

  const localAddUser = () => {
    let categoryIdStatus = categoryStatus.map((catStat) => {
      return { category: catStat.category.id, status: catStat.status };
    });
    addUser({
      name,
      surname,
      email,
      phone,
      role,
      websiteRole,
      categoryIdStatus,
    });
  };
</script>

<h1>Add User</h1>

<form on:submit|preventDefault={localAddUser}>
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

  {#each categoryStatus as catStat}
    <h3>{catStat.category.name}</h3>
    <label>
      <input
        checked={catStat.status === "none"}
        on:change={() => {
          catStat.status = "none";
        }}
        type="radio"
        name={catStat.category.id}
        value="none"
      /> None
    </label>
    <label>
      <input
        checked={catStat.status === "view"}
        on:change={() => {
          catStat.status = "view";
        }}
        type="radio"
        name={catStat.category.id}
        value="view"
      /> View
    </label>
    <label>
      <input
        checked={catStat.status === "admin"}
        on:change={() => {
          catStat.status = "admin";
        }}
        type="radio"
        name={catStat.category.id}
        value="admin"
      /> Admin
    </label>
  {/each}

  <button type="submit"> Voeg toe </button>
</form>

<style>
</style>
