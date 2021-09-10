<script lang="ts">
  import IconifyIcon from "@iconify/svelte";
  import logoutIcon from "@iconify-icons/bx/bx-log-out-circle";
  import { logout } from "../../stores/schedule-store";
</script>

<li on:click={logout}>
  <a href="#">
    <i><IconifyIcon icon={logoutIcon} /></i>
    <span class="link_name">Uitloggen</span>
  </a>
  <ul class="sub-menu blank">
    <li>
      <a href="#" class="link_name">Uitloggen</a>
    </li>
  </ul>
</li>

<style>
</style>
