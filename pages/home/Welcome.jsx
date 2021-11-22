import {Box, Text} from "components"

const Welcome = (props) => {
	return (
		<Box css={{ padding: "$3", zIndex: "5"}}>
			<Text as="h1"  css={{ margin: "0"}}>
				WELCOME TO THE ATELIER ADMIN CENTRE.
				<br/> <br />
				LET'S GET DOWN TO BIZNIZ!
			</Text>
			<Text>
				PICK A TEMPLATE TO START.
			</Text>
		</Box>
	)
}

export default Welcome
