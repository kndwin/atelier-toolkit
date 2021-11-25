import { Layout } from "components";
import {
  StatementOfWorkTemplates,
  Form,
} from "components/Pages/statement-of-work";

const StatementOfWork = (props) => {
  return (
    <Layout
      sidedraw={<Form />}
      pushContent
      printContent
      printOrientation="portrait"
    >
      <StatementOfWorkTemplates />
    </Layout>
  );
};

export default StatementOfWork;
