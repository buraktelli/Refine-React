import React from 'react';
import './App.css';

import { Refine } from "@pankod/refine";
import routerProvider from "@pankod/refine-react-router";
import dataProvider from "@pankod/refine-simple-rest";
import authProvider from "./providers/models/authProvider"

import "@pankod/refine/dist/styles.min.css";

import { PostList } from "./components/list";
import { PostShow } from "./components/show";
import { PostEdit } from "./components/edit";
import { PostCreate } from "./components/create";
import { Login } from "./components/login";

// import { DevList } from "./dev-gis/list";
// import { SimpleRestDataProvider } from "./providers/dataProvider";

function App() {
  return (
    <Refine
    authProvider= {authProvider}
    routerProvider={routerProvider}
    dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
    resources={
      [
        {
          name: "posts",
          list: PostList,
          show: PostShow,
          edit: PostEdit,
          create: PostCreate,
          canDelete: true
        }
      ]
    }
    LoginPage={Login}
    />
  );
}

export default App;
