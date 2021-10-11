import { styled } from "stitches.config";

export const Input = styled("input", {
  fontFamily: "Arktiv Grotesk",
  color: "$dark",
  width: "fit-content",
  border: "none",
  caretColor: "$dark",
  padding: "$1",
  "&:focus-visible": {
    outline: "none",
  },
});
