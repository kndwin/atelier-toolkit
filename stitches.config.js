import { createStitches } from "@stitches/react";

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      dark: "black",
      light: "white",
			gray: "#F2F2F2",
      primary: "#0069F1",
      red: "#ec5a24",
      green: "#7BC369",
      offWhite: "rgba(255,150,15,0.05)",
      orange: "#FAAF4A",
    },
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
      6: "35px",
    },
    sizes: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "32px",
      6: "64px",
    },
    fontSizes: {
      1: "12px",
      2: "16px",
      3: "18px",
      4: "24px",
      5: "32px",
      6: "64px",
    },
    borderRadius: {
      1: "12px",
      2: "13px",
      3: "15px",
      4: "17px",
      5: "19px",
      6: "21px",
    },
		fontFamily: {
			news: "News Cycle",
			serif: "ITC Garamond",
		}
	},
	utils: {
		mx: (value) => ({
			marginLeft: value,
			marginRight: value,
    }),
    my: (value) => ({
      marginTop: value,
      marginBottom: value,
    }),
    px: (value) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
		center: () => ({
			display: "flex",
			justifyContent: "center",
			alignItems: "center",
		})
  },
  media: {
    bp1: "(min-width: 520px)",
    bp2: "(min-width: 900px)",
  },
});
