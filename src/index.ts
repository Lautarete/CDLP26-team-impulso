import { router } from "./router";

function main() {
  console.log("hi");
  router();
  window.addEventListener("popstate", router);
}

main();
