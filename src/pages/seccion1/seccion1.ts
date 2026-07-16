import { navigate } from "../../router";
import hiIMG from "./welcome.png";
export function mountSeccion1() {
  const welcomeRootEl = document.createElement("div");
  welcomeRootEl.classList.add("welcome-root");
  // welcomeRootEl.innerHTML = `
  // <h3>DATOS PERSONALES</h3>
  //     <form id="personal-data">
  //       <label
  //         >Nombre
  //         <input type="text" name="first-name" id="first-name" />
  //       </label>
  //       <br />
  //       <label
  //         >Apellido
  //         <input type="text" name="surname" id="surname" />
  //       </label>
  //       <br />
  //       <label>
  //         DNI
  //         <input type="number" name="DNI" id="DNI" />
  //       </label>
  //       <br />
  //       <label>
  //         Sexo
  //         <select name="sex" id="sex">
  //           <option value=""></option>
  //           <option value="male">Hombre</option>
  //           <option value="female">Mujer</option>
  //         </select>
  //       </label>
  //       <br />
  //       <label>
  //         Teléfono / WhatsApp
  //         <input type="number" name="phone" id="phone" />
  //       </label>
  //       <br />
  //       <label>
  //         Email
  //         <input type="email" name="email" id="email" />
  //       </label>
  //       <br />
  //       <label> Contacto de emergencia </label>
  //       <br />
  //       <label
  //         >Nombre
  //         <input type="text" name="emergency-contact" id="emergency-contact" />
  //       </label>
  //       <br />
  //       <label>
  //         Teléfono / WhatsApp
  //         <input type="number" name="emergency-phone" id="emergency-phone" />
  //       </label>
  //       <br />
  //       <label>
  //       Elegí tu distancia
  //       <select name="race-length" id="race-length">
  //       <option value="10">10K Competitiva</option>
  //       <option value="5">5K Competitiva</option>
  //       <option value="2.5">2,5K Marcha Aeróbica</option>
  //       </select>
  //       </label>
  //       <br />
  //       <label>Seleccione el talle para su remera correspondiente
  //         <select name="shirt" id="shirt">
  //           <option value="s">S</option>
  //           <option value="m">M</option>
  //           <option value="l">L</option>
  //           <option value="xl">XL</option>
  //           </select>
  //           </label>
  //           <button class="next__button">Siguiente</button>
  //     </form>
  // `;
  const formEl = welcomeRootEl.querySelector("#personal-data");
  console.log("se ejecuta seccion 1");
  formEl?.addEventListener("submit", (e) => {
    e.preventDefault();
  });
  welcomeRootEl
    .querySelector(".next__button")
    ?.addEventListener("click", (event) => {
      event.preventDefault();

      navigate("/pagos");
    });
  return welcomeRootEl;
}
