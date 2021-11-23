import { makeVar, useReactiveVar } from "@apollo/client";

const customerVar = makeVar({
  customer: "",
});

export const useCustomer = () => {
  const { customer, contactName } = useReactiveVar(customerVar);
  const setCustomer = (customer) => {
    customerVar({ ...customerVar(), customer });
  };
	const setContactName = (contactName) => {
		customerVar({ ...customerVar(), contactName });
	};

  return {
    customer,
    setCustomer,
		contactName,
		setContactName
  };
};
