import { navigate } from "../../router";
import byeIMG from "./bye.png";

export function mountClarification() {
  const lastRootEl = document.createElement("div");
  lastRootEl.classList.add("last-root");
  lastRootEl.innerHTML = `
  <h3>ACLARACIÓN</h3>
    <p>
      El Deslinde de Responsabilidad será firmado por el inscrito de forma
      presencial en el lugar de entrega de kit para el corredor.
    </p>
    <button>Siguiente</button>
  `;
  lastRootEl.querySelector("button")?.addEventListener("click", () => {
    navigate("/incripcion-completa");
  });
  return lastRootEl;
}
