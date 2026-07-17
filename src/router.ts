import { mountForm } from "./pages/form/form";
import { mountInfo } from "./pages/info/info";

// encuentra la ruta actual y en funcion del path crea monta la pagina
const BASE_PATH = "/CDLP26-team-impulso";
export function router() {
  const contentSectionEl = document.querySelector(".content-section");
  const routes = [
    {
      path: /\/$/,
      pageToMount: mountInfo(),
    },
    {
      path: /\^$/,
      pageToMount: mountInfo(),
    },
    {
      path: /\/formulario/,
      pageToMount: mountForm(),
    },
    {
      path: /\/informacion/,
      pageToMount: mountInfo(),
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
