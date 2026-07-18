import { navigate } from "../../router";
import styleSheet from "./info.css?raw";
export function mountInfo() {
  const contentRootEl = document.createElement("div");
  const styleEl = document.createElement("style");
  styleEl.textContent = styleSheet;
  console.log(styleEl);

  contentRootEl.classList.add("content-root");
  contentRootEl.innerHTML = `
  <section class="info">
   <h3>Valores</h3>
    <div class="prices__container">
      <div class="prices__card  prices__card--discount">
      <span class="prices__badge">
        15% OFF
    </span>
        <p class="prices__text">
          Hasta el 15/08: 
        </p>
        <ul>
          <li>10K $51.000 </li>
          <li>5K $34.000</li>
          <li>2,5K $25.500</li>
        </ul></div>
      <div class="prices__card">
        <p class="prices__text">
          Valor normal:
        </p>
        <ul>
          <li>10K $60.000</li>
          <li>5K $40.000</li>
          <li>2,5K $30.000</li>
        </ul>
    </div>
   </div>
   
    <h3>Formas de pago</h3>
    <ul>
      <li>Transferencia a:</li>
      <ul>
      <li>CBU: 0110246030024605150901</li>
      <li>Alias:meli.jara.aylen</li>
      <li>Titular: Melina Aylen Jara</li>
      <li>CUIL:27466137427</li>
      <li>Banco Nación</li>
      </ul>
      <li>Con efectivo en Gimnasio IMPULSO</li>
    </ul>
    <h3>
      Enviar comprobante a
    </h3>
    <ul>
      <li>+54 9 2944125766</li>
      <li>
        <a
            class="whatsapp-link"
            href="https://wa.me/5492944125766"
            target="_blank"
            rel="noopener noreferrer"
        >
            📱 Enviar por WhatsApp
        </a>
    </li>
    </ul>
    <h3 class="clarification__title">ACLARACIÓN</h3>
    <p class="clarification__text">
      El Deslinde de Responsabilidad será firmado por el inscrito de forma
      presencial en el lugar de entrega de kit para el corredor.
    </p>
    <button>Completar el formulario e Inscribirme</button>
    </section>
  `;
  contentRootEl.appendChild(styleEl);
  contentRootEl.querySelector("button")?.addEventListener("click", () => {
    navigate("/formulario");
  });
  return contentRootEl;
}
