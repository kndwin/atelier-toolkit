import { Layout } from 'components'
import { Form, MUATemplates } from 'components/Pages/mutual-confidentiality-agreement/'

const MutalConfidentialAgreement = (props) => {
	return (
    <Layout
      sidedraw={<Form />}
      pushContent
      printContent
      printOrientation="portrait"
    >
      <MUATemplates />
    </Layout>
	)
}

export default MutalConfidentialAgreement
