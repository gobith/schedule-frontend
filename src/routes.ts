import Welcome from "./components/welcome/Welcome.svelte";
import welcomeIcon from "@iconify-icons/bx/bx-calendar-check";

export default [
  {
    route: "#/welcome",
    component: Welcome,
    title: "Algemeen",
    icon: welcomeIcon,
  },
];
