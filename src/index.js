import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Auth0Provider
    domain="dev-h90ec-8o.us.auth0.com"
    clientId="gIUBTGrNZk8Ygih3Ooyn8TIYUpFywwcb"
    redirectUri={window.location.origin}
    audience="https://dev-h90ec-8o.us.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
);
