import { styled } from "stitches.config";

export const Text = styled("p", {
  fontFamily: "Arktiv Grotesk",
  color: "$dark",
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
