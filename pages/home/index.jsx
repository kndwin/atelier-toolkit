import {layoutVar} from "apollo/reactiveVar/layout";
import Layout from "components/Layout";
import {useEffect} from "react";
import Welcome from "./Welcome";

export default function Home() {

  return (
    <Layout>
      <Welcome />
    </Layout>
  );
}
