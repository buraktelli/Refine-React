import React from 'react';
import './App.css';

import { Refine } from "@pankod/refine";
import routerProvider from "@pankod/refine-react-router";
import dataProvider from "@pankod/refine-simple-rest";

import "@pankod/refine/dist/styles.min.css";

import { PostList } from "./components/list";
import { PostShow } from "./components/show";
import { PostEdit } from "./components/edit";
import { PostCreate } from "./components/create";

function App() {
  return (
    <Refine
      routerProvider={routerProvider}
      // dataProvider={dataProvider("https://dev-gis.ankageo.com/rest/v1")}
      // resources={[{ name: "layers", list: PostList }]}
      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
      resources={
        [
          {
            name: "posts",
            list: PostList,
            show: PostShow,
            edit: PostEdit,
            create: PostCreate,
          }
        ]
      }
    />
  );
}

export default App;
