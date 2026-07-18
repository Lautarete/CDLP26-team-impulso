import { navigate } from "../../router";
import styleSheet from "./form.css?raw";
export function mountForm() {
  const formRootEl = document.createElement("div");
  const styleEl = document.createElement("style");
  styleEl.textContent = styleSheet;
  formRootEl.classList.add("welcome-root");
  formRootEl.innerHTML = `
<section class="form">
  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdXYl4DO9wTUQiv4F38P6VIq0U9e-JwlrB5EsjblDTIPCBhhA/viewform?embedded=true" width="640" height="2493" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
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
