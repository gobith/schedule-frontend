<script lang="ts">
  import IconifyIcon from "@iconify/svelte";
  export let navbarItem;
</script>

<li>
  <a href={navbarItem.route}>
    <i><IconifyIcon icon={navbarItem.icon} /></i>
    <span class="link_name">{navbarItem.title}</span>
  </a>
  <ul class="sub-menu blank">
    <li>
      <a href={navbarItem.route} class="link_name">{navbarItem.title}</a>
    </li>
  </ul>
</li>

<style>
</style>
