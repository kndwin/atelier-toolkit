import { styled } from "@stitches/react";
import { Box, Layout } from "components";
import React, { useEffect, useRef } from "react";
import { ProposalTemplatesContent } from "components/Pages/proposals/Templates";
import Form from "./Form"
import {useDrawer, useLayout} from "hooks";

const Proposals = (props) => {
  const printRef = useRef();
	const { setDrawer } = useDrawer()
	const { setPrintRef } = useLayout()

  useEffect(() => {
		setDrawer(true)
		setPrintRef(printRef)
  }, []);

  return (
		<Layout sidedraw={<Form />}>
      <div ref={printRef}>
        <ProposalTemplates />
      </div>
    </Layout>
  );
};

export default Proposals;

const ProposalTemplatesWrapper = styled(Box, {
  "@media print": {
    osition: "absolute",
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
      {ProposalTemplatesContent.map((component, index) => (
        <div key={index}>{component}</div>
      ))}
    </ProposalTemplatesWrapper>
  );
};
