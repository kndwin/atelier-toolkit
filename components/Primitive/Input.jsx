import { styled } from "stitches.config";

export const Input = styled("input", {
  fontFamily: "News Cycle",
	fontSize: "$2", 
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

export const TextArea = styled("textarea", {
  fontFamily: "News Cycle",
	fontSize: "$2", 
	color: "$dark",
	width: "fit-content",
	height: "fit-content",
	border: "none",
  fontFamily: "News Cycle",
	caretColor: "$dark",
	backgroundColor: "$gray",
	padding: "0.5em 1em",
	margin: ".25em 0", 
	borderRadius: "15px", 
	resize: "none",
	"&:focus-visible": {
		outline: "none",
	},
	"&:disabled": {
		background: "transparent"
	}
});
