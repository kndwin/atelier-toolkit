import {Box, Text} from "components"

const Welcome = (props) => {
	return (
		<Box css={{ padding: "$3"}}>
			<Text as="h1" sizes="$3" css={{ margin: "0"}}>
				Welcome
			</Text>
		</Box>
	)
}

export default Welcome
