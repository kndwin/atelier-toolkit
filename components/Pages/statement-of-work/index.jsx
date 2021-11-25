import styles from './styles.module.scss'
import { Page } from 'components'

export { Form } from './Form'
export const StatementOfWorkTemplates = (props) => {
	return (
		<>
			<FrontPage />
		</>
	)
}

const FrontPage = (props) => {
	return (
		<Page orientation="portrait" aspectRatio="A4" withBorder>
			<h1>Page 1</h1>
		</Page>
	)
}
