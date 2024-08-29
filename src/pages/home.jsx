import React from "react";
import Layout from "../layout/layout";
import Section1 from "../fragments/section1";
import Section2 from "../fragments/section2";
import Section3 from "../fragments/section3";
import Section4 from "../fragments/section4";

const Home = () => {
  return (
    <>
      <Layout>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
      </Layout>
    </>
  );
};

export default Home;
