import { styled } from "stitches.config";
import { keyframes } from "@stitches/react";

const spin = keyframes({
  "0%": { transform: "rotate(0deg)" },
  "100%": { transform: "rotate(360deg)" },
});

export const Button = styled("button", {
  cursor: "pointer",
  border: "1px solid $dark",
  background: "$light",
  borderRadius: "15px",
  marginY: "$1",
  paddingX: "$2",
  paddingY: "$1",
  height: "2em",
	fontFamily: "News Cycle",
	textTransform: "uppercase",
  "&:hover": {
    color: "$light",
    background: "$primary",
    border: "1px solid $light",
  },
  variants: {
    loading: {
      true: {
        color: "transparent",
        position: "relative",
        "&::after": {
          content: "",
          position: "absolute",
          top: "10%",
          left: "40%",
          width: "1em",
          height: "1em",
          borderRadius: "9999px",
          border: ".25em solid transparent",
          borderTop: ".25em solid $dark",
          borderLeft: ".25em solid $dark",
          animation: `${spin} 2s linear infinite`,
        },
        "&:hover": {
          color: "$primary",
          "&::after": {
            borderTop: ".25em solid $light",
            borderLeft: ".25em solid $light",
          },
        },
      },
    },
    selected: {
      true: {
        color: "$light",
        background: "$primary",
        border: "1px solid $light",
      },
    },
		theme: {
			red: {
				backgroundColor: "$red",
				color: "white",
				borderColor: "$red",
				"&:hover": {
					color: "$red",
					backgroundColor: "white",
					borderColor: "$red",
				}
			}
		}
	},
});
