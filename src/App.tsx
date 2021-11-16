import React from 'react';
import './App.css';

import { Refine } from "@pankod/refine";
import routerProvider from "@pankod/refine-react-router";
import dataProvider from "@pankod/refine-simple-rest";

import "@pankod/refine/dist/styles.min.css";

import { PostList } from "./components/list";

function App() {
  return (
    <Refine
      routerProvider={routerProvider}
      // dataProvider={dataProvider("https://dev-gis.ankageo.com/rest/v1")}
      // resources={[{ name: "layers", list: PostList }]}
      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
      resources={[{ name: "posts", list: PostList }]}
    />
  );
}

export default App;
