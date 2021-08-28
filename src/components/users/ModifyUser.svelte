<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { modifyUser } from "../../stores/schedule-store";

  export let categories;
  export let selection;

  const dispatch = createEventDispatcher();

  const createCategoryStatus = () => {
    return categories.map((category) => {
      let status = "";
      const selectionStatus = selection.categoryStatus.find((catStat) => {
        return catStat.category === category.id;
      });
      if (selectionStatus) {
        status = selectionStatus.status;
      }
      return { category, status };
    });
  };

  let id = selection.id;
  let name = selection.name;
  let surname = selection.surname;
  let email = selection.email;
  let phone = selection.phone;
  let role = selection.role;
  let websiteRole = selection.websiteRole;
  let categoryStatus = createCategoryStatus();

  $: if (id !== selection.id) {
    id = selection.id;
    name = selection.name;
    surname = selection.surname;
    email = selection.email;
    phone = selection.phone;
    role = selection.role;
    websiteRole = selection.websiteRole;
    categoryStatus = createCategoryStatus();
  }

  const modify = () => {
    console.log({
      id,
      name,
      surname,
      email,
      phone,
      role,
      websiteRole,
      categoryStatus,
    });
    dispatch("selection", null);
  };
</script>

<h1>Modify User</h1>

<form on:submit|preventDefault={modify}>
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
  <div class="catstat">
    {#each categoryStatus as catStat}
      <div>
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
      </div>
    {/each}
  </div>

  <button type="submit"> Aanpassen </button>
</form>

<style>
  .catstat {
    display: flex;
    gap: 2em;
  }
</style>
