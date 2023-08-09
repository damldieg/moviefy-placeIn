import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./data/redux/store/store";
import { MainView } from "./views/MainView";
import { MainLayout } from "./components/MainLayout";
import { MovieDetailsView } from "./views/MovieDetailsView";
import { MyListView } from "./views/MyListView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <MainView />,
      },
      {
        path: "/my-list",
        children: [
          {
            index: true,
            element: <MyListView />,
          },
        ],
      },
      {
        path: "/movie-details/:movieId",
        children: [
          {
            index: true,
            element: <MovieDetailsView />,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
