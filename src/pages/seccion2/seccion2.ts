import { navigate } from "../../router";
import gameIMG from "./game.png";
export function mountSeccion2() {
  const contentRootEl = document.createElement("div");
  contentRootEl.classList.add("content-root");
  contentRootEl.innerHTML = `
   <h3>Valores</h3>
    <p>
      Con 15% OFF hasta 15/08: 10K $51.000 | 5K $34.000 | 2,5K $25.500
    </p>
    <p>
       Valor normal: 10K $60.000 | 5K $40.000 | 2,5K $30.000
    </p>
    <h3>Formas de pago</h3>
    <ul>
      <li>Transferencia: alias.de.carrera.mp</li>
      <li>Con efectivo en Gimnasio IMPULSO</li>
    </ul>
    <h3>
      Enviar comprobantes junto con nombre completo y DNI alguno de estos
      contactos
    </h3>
    <ul>
      <li>un contacto</li>
      <li>un contacto</li>
      <li>un contacto</li>
    </ul>
    <button>Ya casi terminamos</button>
  `;
  contentRootEl.querySelector("button")?.addEventListener("click", () => {
    navigate("/aclaracion");
  });
  return contentRootEl;
}
