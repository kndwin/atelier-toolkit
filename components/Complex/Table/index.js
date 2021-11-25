import { Box, Text} from 'components'
import { styled } from "@stitches/react";

export const Table = styled(Box, {
	width: '100%',
	height: '100%',
})

export const Header = styled(Text, {
  margin: "0",
  textTransform: "uppercase",
  fontSize: "16px",
  fontWeight: "bold",
});

export const Row = styled(Box, {
  display: "flex",
  width: "100%",
  height: "fit-content",
  alignItems: "flex-start",
	variants: {
		pricing: {
			true: {
				display: "grid",
				gridTemplateColumns: "repeat(7, 1fr)",
				width: "100%",
				height: "fit-content",
			}
		}
	}
});

export const Cell = styled(Box, {
  fontFamily: "News Cycle",
  height: "fit-content",
  fontSize: "16px",
});
