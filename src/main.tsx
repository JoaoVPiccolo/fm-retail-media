import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import CaseHome from "./routes/caseRoute/CaseHome.tsx";
import caseIndex from "./routes/casesRoute/CaseIndex.tsx";
import App from "./App.tsx";
import CaseIndex from "./routes/casesRoute/CaseIndex.tsx";
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
    path: "/:slug/",
    element: <CaseIndex />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
