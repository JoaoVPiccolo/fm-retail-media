import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import CaseHome from "./routes/caseRoute/CaseHome.tsx";
import App from "./App.tsx";
import { theme } from "./theme/theme.ts";
import ContactRoute from "./routes/contactRoute/ContactRoute.tsx";

const router = createBrowserRouter([
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
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ThemeProvider>
  </StrictMode>,
);
