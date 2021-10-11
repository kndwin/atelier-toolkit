import { customerVar } from "apollo/reactiveVar/customer";

export const submitProposal = async () => {
  const { customer } = customerVar();
  const data = {
    customer,
  };
  console.log(JSON.stringify(data));
  await fetch("/api/proposal", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
