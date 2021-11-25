import { Layout } from "components";
import { StatementOfWorkTemplates, Form } from "components/Pages/statement-of-work";
import { useDrawer, useLayout } from "hooks";

const StatementOfWork = (props) => {
  const { printRef } = useLayout();
  return (
		<Layout sidedraw={<Form />} pushContent printContent>
      <div ref={printRef}>
				<StatementOfWorkTemplates />
        <h1>Statement of work</h1>
      </div>
    </Layout>
  );
};

export default StatementOfWork;
