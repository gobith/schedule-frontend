<script lang="ts">
  export let categories;
  let selectedCategory;
  let description = "";
  let nrOfUsers;

  let date = new Date();
  let dateString = `${date.getFullYear()}-${date
    .getMonth()
    .toString()
    .padStart(2, "0")}-${date
    .getDate()
    .toString()
    .padStart(2, "0")}`.toString();

  let timeString = `${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  const addEvent = () => {
    console.log({dateString , timeString, category: selectedCategory.id , description , nrOfUsers});
  
  };
</script>

<h1>Add Event</h1>

<form on:submit|preventDefault={addEvent}>
  <label for="date">Datum</label>
  <input name="date" type="date" bind:value={dateString} required/>
  <label for="time">Tijd</label>
  <input name="time" type="time" bind:value={timeString} required/>
  <label for="category">Category</label>
  <select name="category" required bind:value={selectedCategory}>
    <option hidden disabled selected value={""}>Selecteer Category</option>
    {#each categories as category}
      <option value={category}>{category.name}</option>
    {/each}
  </select>

  <label for="description">Beschrijving</label>
  <input name="description" type="text" bind:value={description} />

  <label for="nrOfUsers">Personen</label>
  <input name="nrOfUsers" type="number" bind:value={nrOfUsers} required/>


  <button type="submit"> Voeg toe </button>
</form>

<style>
</style>
