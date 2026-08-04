(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`/* ===========================\r
   CONTENEDOR\r
=========================== */\r
\r
.form {\r
  max-width: 900px;\r
  margin: 0 auto;\r
\r
  padding: 2rem;\r
\r
  background: var(--surface, #fff);\r
\r
  border-radius: var(--radius, 16px);\r
  box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.08));\r
}\r
\r
/* ===========================\r
   GOOGLE FORM\r
=========================== */\r
\r
iframe {\r
  display: block;\r
\r
  width: 100%;\r
  /* min-height: 900px; */\r
\r
  /* border: none; */\r
  /* border-radius: 12px; */\r
  /* pointer-events: all; */\r
}\r
\r
/* ===========================\r
   MENSAJE\r
=========================== */\r
\r
.form p {\r
  margin: 1rem 0 0;\r
\r
  text-align: center;\r
  color: var(--text, #1d2939);\r
  line-height: 1.6;\r
}\r
\r
.form p:first-of-type {\r
  margin-top: 2rem;\r
\r
  font-weight: 600;\r
}\r
\r
/* ===========================\r
   BOTÓN\r
=========================== */\r
\r
button {\r
  display: block;\r
\r
  width: 100%;\r
  max-width: 320px;\r
\r
  margin: 2rem auto 0;\r
\r
  padding: 1rem;\r
\r
  border: none;\r
  border-radius: 12px;\r
\r
  background: var(--primary, #124e78);\r
\r
  color: white;\r
  font-size: 1rem;\r
  font-weight: 600;\r
\r
  cursor: pointer;\r
\r
  transition:\r
    background 0.25s,\r
    transform 0.2s;\r
}\r
\r
button:hover {\r
  background: var(--secondary, #1b9aaa);\r
}\r
\r
button:active {\r
  transform: scale(0.98);\r
}\r
\r
/* ===========================\r
   TABLETS\r
=========================== */\r
\r
@media (max-width: 768px) {\r
  .form {\r
    padding: 1.5rem;\r
  }\r
}\r
\r
/* ===========================\r
   MÓVILES\r
=========================== */\r
\r
@media (max-width: 480px) {\r
  .form {\r
    padding: 1rem;\r
  }\r
\r
  iframe {\r
    min-height: 1050px;\r
  }\r
}\r
`;function t(){let t=document.createElement(`div`),n=document.createElement(`style`);return n.textContent=e,t.classList.add(`welcome-root`),t.innerHTML=`
<section class="form">
  <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdXYl4DO9wTUQiv4F38P6VIq0U9e-JwlrB5EsjblDTIPCBhhA/viewform?embedded=true" width="640" height="2493" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
  <button>Ver pagos</button>
</section">
  `,t.appendChild(n),t.querySelector(`button`)?.addEventListener(`click`,e=>{o(`/informacion`)}),t}var n=`/* ===========================\r
   CONTENEDOR\r
=========================== */\r
\r
:host,\r
.info {\r
  display: block;\r
}\r
\r
.info {\r
  max-width: 760px;\r
  margin: 0 auto;\r
  padding: 2rem;\r
\r
  background: var(--surface, #fff);\r
  border-radius: var(--radius, 16px);\r
  box-shadow: var(--shadow, 0 10px 30px rgba(0, 0, 0, 0.08));\r
}\r
\r
/* ===========================\r
   TÍTULOS\r
=========================== */\r
\r
h3 {\r
  margin: 2rem 0 0.75rem;\r
\r
  color: var(--primary, #124e78);\r
  font-size: 1.35rem;\r
  font-weight: 700;\r
}\r
\r
h3:first-child {\r
  margin-top: 0;\r
}\r
\r
/* ===========================\r
   PÁRRAFOS\r
=========================== */\r
\r
.prices__text,\r
.clarification__text {\r
  margin: 0.5rem 0;\r
\r
  color: var(--text, #1d2939);\r
  line-height: 1.7;\r
}\r
\r
/* ===========================\r
   VALORES\r
=========================== */\r
\r
.prices__container {\r
  display: flex;\r
  gap: 1.5rem;\r
  margin: 1rem 0 2rem;\r
}\r
\r
.prices__card {\r
  flex: 1;\r
\r
  padding: 1.5rem;\r
\r
  background: #fafbfd;\r
\r
  border: 1px solid #d9e2ec;\r
  border-radius: 14px;\r
\r
  transition:\r
    transform 0.2s,\r
    box-shadow 0.2s;\r
}\r
\r
.prices__card:hover {\r
  transform: translateY(-3px);\r
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.08);\r
}\r
\r
.prices__card:first-child {\r
  /* display: none; */\r
  /* esta es la de la oferta */\r
  background: #eef9f4;\r
  border-color: #8fd3b5;\r
}\r
\r
.prices__text {\r
  margin: 0 0 1rem;\r
\r
  font-size: 1.05rem;\r
  font-weight: 700;\r
\r
  color: var(--primary, #124e78);\r
}\r
\r
.prices__card ul {\r
  margin: 0;\r
  padding-left: 1.2rem;\r
}\r
\r
.prices__card li {\r
  margin: 0.7rem 0;\r
}\r
\r
/* ===========================\r
   LISTAS\r
=========================== */\r
\r
ul {\r
  margin: 0.75rem 0 1.5rem;\r
  padding-left: 1.4rem;\r
}\r
\r
li {\r
  margin: 0.55rem 0;\r
\r
  color: var(--text, #1d2939);\r
  line-height: 1.6;\r
}\r
\r
/* ===========================\r
   ACLARACIÓN\r
=========================== */\r
\r
.clarification__title {\r
  margin-top: 2.5rem;\r
\r
  color: #b54708;\r
}\r
\r
.clarification__text {\r
  padding: 1rem 1.25rem;\r
\r
  background: #fff7e8;\r
\r
  border-left: 5px solid #f79009;\r
  border-radius: 8px;\r
}\r
\r
/* ===========================\r
   BOTÓN\r
=========================== */\r
\r
button {\r
  display: block;\r
\r
  width: 100%;\r
\r
  margin-top: 2.5rem;\r
  padding: 1rem 1.5rem;\r
\r
  border: none;\r
  border-radius: 12px;\r
\r
  background: var(--primary, #124e78);\r
\r
  color: white;\r
  font-size: 1rem;\r
  font-weight: 600;\r
\r
  cursor: pointer;\r
\r
  transition:\r
    background 0.25s,\r
    transform 0.2s,\r
    box-shadow 0.25s;\r
}\r
\r
button:hover {\r
  background: var(--secondary, #1b9aaa);\r
  box-shadow: 0 10px 24px rgba(18, 78, 120, 0.25);\r
}\r
\r
button:active {\r
  transform: scale(0.98);\r
}\r
\r
button:focus-visible {\r
  outline: 3px solid rgba(27, 154, 170, 0.35);\r
  outline-offset: 3px;\r
}\r
\r
/* ===========================\r
   TABLETS\r
=========================== */\r
\r
@media (max-width: 768px) {\r
  .info {\r
    padding: 1.75rem;\r
  }\r
\r
  h3 {\r
    font-size: 1.25rem;\r
  }\r
}\r
\r
/* ===========================\r
   MÓVILES\r
=========================== */\r
\r
@media (max-width: 480px) {\r
  .info {\r
    padding: 1.25rem;\r
    border-radius: 12px;\r
  }\r
\r
  h3 {\r
    font-size: 1.15rem;\r
  }\r
\r
  ul {\r
    padding-left: 1.15rem;\r
  }\r
\r
  button {\r
    padding: 0.95rem;\r
    font-size: 0.95rem;\r
  }\r
}\r
@media (max-width: 600px) {\r
  .prices__container {\r
    flex-direction: column;\r
  }\r
}\r
.prices__card--discount {\r
  position: relative;\r
}\r
\r
.prices__badge {\r
  position: absolute;\r
  top: -10px;\r
  right: 16px;\r
\r
  padding: 0.35rem 0.8rem;\r
\r
  background: #2bb673;\r
\r
  color: white;\r
\r
  border-radius: 999px;\r
\r
  font-size: 0.8rem;\r
  font-weight: 700;\r
}\r
\r
.whatsapp-link {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: 0.4rem;\r
\r
  padding: 0.6rem 1rem;\r
\r
  margin-top: 0.3rem;\r
\r
  background: #25d366;\r
  color: white;\r
  text-decoration: none;\r
  font-weight: 600;\r
\r
  border-radius: 999px;\r
\r
  transition:\r
    background 0.2s,\r
    transform 0.15s,\r
    box-shadow 0.2s;\r
}\r
\r
.whatsapp-link:hover {\r
  background: #1ebe5d;\r
  box-shadow: 0 6px 16px rgba(37, 211, 102, 0.25);\r
}\r
\r
.whatsapp-link:active {\r
  transform: scale(0.98);\r
}\r
\r
.whatsapp-link:focus-visible {\r
  outline: 3px solid rgba(37, 211, 102, 0.3);\r
  outline-offset: 3px;\r
}\r
`;function r(){let e=document.createElement(`div`),t=document.createElement(`style`);return t.textContent=n,console.log(t),e.classList.add(`content-root`),e.innerHTML=`
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
  `,e.appendChild(t),e.querySelector(`button`)?.addEventListener(`click`,()=>{o(`/formulario`)}),e}var i=`/CDLP26-team-impulso`;function a(){let e=document.querySelector(`.content-section`),n=[{path:/\/$/,pageToMount:r()},{path:/\^$/,pageToMount:r()},{path:/\/formulario/,pageToMount:t()},{path:/\/informacion/,pageToMount:r()}],a=window.location.pathname.replace(i,``)||`/`;for(let t of n)t.path.test(a)&&e!=null&&(e.innerHTML=``,e?.appendChild(t.pageToMount))}function o(e){window.history.pushState({},``,`${i}${e}`),a()}function s(){console.log(`hi`),a(),window.addEventListener(`popstate`,a)}s();