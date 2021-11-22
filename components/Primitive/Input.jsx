import { styled } from "stitches.config";

export const Input = styled("input", {
  fontFamily: "Arktiv Grotesk",
  color: "$dark",
  width: "fit-content",
  border: "none",
  caretColor: "$dark",
	backgroundColor: "$gray",
  padding: "0.5em 1em",
	margin: ".25em 0", 
	borderRadius: "30px", 
  "&:focus-visible": {
    outline: "none",
  },
	"&:disabled": {
		background: "transparent"
	}
});
