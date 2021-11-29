import { styled } from "stitches.config";

export const Text = styled("p", {
  color: "$dark",
	letterSpacing: "1px", 
  variants: {
    color: {
      error: {
        color: "$red",
      },
    },
    bold: {
      true: {
        fontWeight: "bold",
      },
    },
  },
});

export const Span = styled("span", {
	color: "$dark",
	variants: {
		bold: {
			true: {
				fontWeight: "bold",
			},
		},
	},
});
	
