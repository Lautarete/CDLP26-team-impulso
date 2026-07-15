(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(){let e=document.createElement(`div`);e.classList.add(`welcome-root`),e.innerHTML=`
  <h2>DATOS PERSONALES</h2>
      <form id="personal-data">
        <label
          >Nombre
          <input type="text" name="first-name" id="first-name" />
        </label>
        <br />
        <label
          >Apellido
          <input type="text" name="surname" id="surname" />
        </label>
        <br />
        <label>
          DNI
          <input type="number" name="DNI" id="DNI" />
        </label>
        <br />
        <label>
          Sexo
          <select name="sex" id="sex">
            <option value=""></option>
            <option value="male">Hombre</option>
            <option value="female">Mujer</option>
          </select>
        </label>
        <br />
        <label>
          Teléfono / WhatsApp
          <input type="number" name="phone" id="phone" />
        </label>
        <br />
        <label>
          Email
          <input type="email" name="email" id="email" />
        </label>
        <br />
        <label> Contacto de emergencia </label>
        <br />
        <label
          >Nombre
          <input type="text" name="emergency-contact" id="emergency-contact" />
        </label>
        <br />
        <label>
          Teléfono / WhatsApp
          <input type="number" name="emergency-phone" id="emergency-phone" />
        </label>
        <br />
        <label>
        Elegí tu distancia
        <select name="race-length" id="race-length">
        <option value="10">10K Competitiva</option>
        <option value="5">5K Competitiva</option>
        <option value="2.5">2,5K Marcha Aeróbica</option>
        </select>
        </label>
        <br />
        <label>Seleccione el talle para su remera correspondiente
          <select name="shirt" id="shirt">
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
            </select>
            </label>
            <button class="next__button">Siguiente</button>
      </form>
  `;let t=e.querySelector(`#personal-data`);return console.log(`se ejecuta seccion 1`),t?.addEventListener(`submit`,e=>{e.preventDefault()}),e.querySelector(`.next__button`)?.addEventListener(`click`,e=>{e.preventDefault(),o(`/pagos`)}),e}function t(){let e=document.createElement(`div`);return e.classList.add(`content-root`),e.innerHTML=`
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
  `,e.querySelector(`button`)?.addEventListener(`click`,()=>{o(`/aclaracion`)}),e}function n(){let e=document.createElement(`div`);return e.classList.add(`last-root`),e.innerHTML=`
  <h2>ACLARACIÓN</h2>
    <p>
      El Deslinde de Responsabilidad será firmado por el inscrito de forma
      presencial en el lugar de entrega de kit para el corredor.
    </p>
    <button>Siguiente</button>
  `,e.querySelector(`button`)?.addEventListener(`click`,()=>{o(`/incripcion-completa`)}),e}function r(){let e=document.createElement(`div`);return e.classList.add(`last-root`),e.innerHTML=`
  <h2>¡¡Ya estas inscripto/a a la carrera!!</h2>
  `,e.querySelector(`button`)?.addEventListener(`click`,()=>{o(`/last`)}),e}var i=`/CDLP26-team-impulso`;function a(){let a=document.querySelector(`.content-section`),o=[{path:/\/$/,pageToMount:e()},{path:/\/seccion1/,pageToMount:e()},{path:/\/pagos/,pageToMount:t()},{path:/\/aclaracion/,pageToMount:n()},{path:/\/incripcion-completa/,pageToMount:r()}],s=window.location.pathname.replace(i,``)||`/`;for(let e of o)e.path.test(s)&&a!=null&&(a.innerHTML=``,a?.appendChild(e.pageToMount))}function o(e){window.history.pushState({},``,`${i}${e}`),a()}function s(){console.log(`hi`),a(),window.addEventListener(`popstate`,a)}s();