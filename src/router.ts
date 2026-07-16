import { mountSeccion1 } from "./pages/seccion1/seccion1";
import { mountSeccion2 } from "./pages/seccion2/seccion2";
import { mountClarification } from "./pages/clarification/clarification";
import { mountLast } from "./pages/last/last";

// encuentra la ruta actual y en funcion del path crea monta la pagina
const BASE_PATH = "/CDLP26-team-impulso";
export function router() {
  const contentSectionEl = document.querySelector(".content-section");
  const routes = [
    {
      path: /\/$/,
      pageToMount: mountSeccion1(),
    },
    {
      path: /\/seccion1/,
      pageToMount: mountSeccion1(),
    },
    {
      path: /\/pagos/,
      pageToMount: mountSeccion2(),
    },
    {
      path: /\/aclaracion/,
      pageToMount: mountClarification(),
    },
    {
      path: /\/incripcion-completa/,
      pageToMount: mountLast(),
    },
  ];

  const path = window.location.pathname.replace(BASE_PATH, "") || "/";
  for (const posibleRoute of routes) {
    if (posibleRoute.path.test(path) && contentSectionEl != null) {
      // console.log(path);

      contentSectionEl.innerHTML = "";
      contentSectionEl?.appendChild(posibleRoute.pageToMount);
    }
  }
}
export function navigate(path: string) {
  window.history.pushState({}, "", `${BASE_PATH}${path}`);
  router();
}
