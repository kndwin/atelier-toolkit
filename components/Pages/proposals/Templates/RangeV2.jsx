import { Box, Text, Page} from 'components'
import {useForm} from 'hooks'

export const RangeTemplateV2 = (props) => {
	const { pricing } = useForm()
	return (
		<Page>
			<Text>
				RangeTemplateV2
				{pricing?.map(({ id, name, description, cost, rrp, moq }) => (
					<Box>
						{id}
						{name}
						{description}
						{cost}
						{rrp}
						{moq}
					</Box>
				))}
			</Text>
		</Page>
	)
}
