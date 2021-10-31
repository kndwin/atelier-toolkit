import { styled } from "@stitches/react";
import { layoutVar } from "apollo/reactiveVar/layout";
import { Box } from "components";
import Layout from "components/Layout";
import React, { useEffect, useRef } from "react";
import Templates from "components/Templates";
import { useReactToPrint } from "react-to-print";

const Proposals = (props) => {
  const printRef = useRef();

  useEffect(() => {
    layoutVar({ ...layoutVar(), isDrawerOpen: false, printRef: printRef });
  }, []);

  return (
    <Layout>
      <div ref={printRef}>
        <ProposalTemplates />
      </div>
    </Layout>
  );
};

export default Proposals;

const ProposalTemplatesWrapper = styled(Box, {
  "@media print": {
    position: "absolute",
    top: "0",
    left: "0",
    background: "white",
    zIndex: "10",
    height: "100vh",
    width: "100vw",
  },
});

export const ProposalTemplates = () => {
  return (
    <ProposalTemplatesWrapper>
      {Templates.map((component, index) => (
        <div key={index}>{component}</div>
      ))}
    </ProposalTemplatesWrapper>
  );
};
