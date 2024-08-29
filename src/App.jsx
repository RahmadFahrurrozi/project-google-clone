import React from "react";
import Layout from "./layout/layout";
import Section1 from "./fragments/section1";
import Section2 from "./fragments/section2";
function App() {
  return (
    <>
      <Layout>
        <Section1 />
        <Section2 />
      </Layout>
    </>
  );
}

export default App;
