import React from "react";
import Layout from "../layout/layout";
import Section1 from "../fragments/fragmentsHome/section1";
import Section2 from "../fragments/fragmentsHome/section2";
import Section3 from "../fragments/fragmentsHome/section3";
import Section4 from "../fragments/fragmentsHome/section4";
import Section5 from "../fragments/fragmentsHome/section5";

const Home = () => {
  return (
    <>
      <Layout>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
      </Layout>
    </>
  );
};

export default Home;
