import { Layout } from "components";
import {
  StatementOfWorkTemplates,
  Form,
} from "components/Pages/statement-of-work";

export default function StatementOfWork (props){
  return (
    <Layout
			isOpen={true}
      sidedraw={<Form />}
      pushContent
      printContent
      printOrientation="portrait"
    >
      <StatementOfWorkTemplates />
    </Layout>
  );
};
