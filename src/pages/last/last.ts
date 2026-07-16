import { navigate } from "../../router";

export function mountLast() {
  const lastRootEl = document.createElement("div");
  lastRootEl.classList.add("last-root");
  lastRootEl.innerHTML = `
  <h2>¡¡Ya estas inscripto/a a la carrera!!</h2>
  `;
  lastRootEl.querySelector("button")?.addEventListener("click", () => {
    navigate("/last");
  });
  return lastRootEl;
}
