import { Box, Text } from 'components'

export const Form = (props) => {
  return (
    <Box
      css={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "2em",
      }}
    >
      <Box>
				<Text as="h2">
					Fill out da form yo!
				</Text>
      </Box>
    </Box>
  );
}
