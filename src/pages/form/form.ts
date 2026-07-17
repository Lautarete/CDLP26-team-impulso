import { navigate } from "../../router";
import styleSheet from "./form.css?raw";
export function mountForm() {
  const formRootEl = document.createElement("div");
  const styleEl = document.createElement("style");
  styleEl.textContent = styleSheet;
  formRootEl.classList.add("welcome-root");
  formRootEl.innerHTML = `
<section class="form">
  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdZFFNWHx72RQFYKLcQlOygRMmx3HUkc33b6Q-ubbKKENCARA/viewform?embedded=true" width="640" height="841" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
  <p>Una vez enviado el formulario ya estas inscripto/a</p>
  <p>Recuerda abonar por alguno de los medios de pago</p>
  <button>Ver pagos</button>
</section">
  `;
  formRootEl.appendChild(styleEl);
  formRootEl.querySelector("button")?.addEventListener("click", (event) => {
    // event.preventDefault();

    navigate("/informacion");
  });
  return formRootEl;
}
