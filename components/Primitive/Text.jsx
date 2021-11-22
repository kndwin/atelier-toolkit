import { styled } from "stitches.config";

export const Text = styled("p", {
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
