import { customerVar } from "apollo/reactiveVar/customer";
import { pricingVar } from "apollo/reactiveVar/pricing";

export const submitProposal = async () => {
  const { customer } = customerVar();
  const pricing = pricingVar();
  const data = {
    customer,
    pricing,
  };

  await fetch("/api/proposal", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
