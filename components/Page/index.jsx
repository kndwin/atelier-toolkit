import { styled } from "@stitches/react";

export const Page = styled("div", {
  border: "1px solid $dark",
  borderRadius: "15px",
  margin: "$3",
  height: "40em",
  background: "$light",
  width: "66em",
  margin: "3em auto",
  "@media print": {
    padding: "0 4em",
    height: "100%",
    width: "100%",
		"@page" : {
			size: "landscape",
		},
    border: "none",
    margin: "0",
  },
});
