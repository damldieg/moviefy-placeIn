import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./data/redux/store/store";
import { MainView } from "./views/MainView";
import { MainLayout } from "./components/MainLayout";
import { MovieDetailsView } from "./views/MovieDetailsView";

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
        path: "my-list",
        children: [
          {
            index: true,
            element: <div>List</div>,
          },
        ],
      },
      {
        path: 'movie-details/:movieId',
        children: [{
          index: true,
          element: <MovieDetailsView />
        }
        ]
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
