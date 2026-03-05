import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import { Outlet } from "react-router-dom";
import CaseHome from "./routes/caseRoute/CaseHome.tsx";
import App from "./App.tsx";
import { theme } from "./theme/theme.ts";
import ContactRoute from "./routes/contactRoute/ContactRoute.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/cases/",
        element: <CaseHome />,
      },
      {
        path: "/contato",
        element: <ContactRoute />,
      },
    ],
  },
]);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/service-worker.js")
    .then(() => console.log("SW registrado"))
    .catch((err) => console.error("Erro ao registrar SW:", err));
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </StrictMode>,
);
