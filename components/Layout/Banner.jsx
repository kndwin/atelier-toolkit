import { useReactiveVar } from "@apollo/client";
import { styled } from "@stitches/react";
import { customerVar } from "apollo/reactiveVar/customer";
import { layoutVar } from "apollo/reactiveVar/layout";
import { Box, Text, Input, Button } from "components";
import Link from "next/link";
import { useState } from "react";
import { useReactToPrint } from "react-to-print";
import { submitProposal } from "utils/apis/submitProposal";

const BannerWrapper = styled(Box, {
  paddingLeft: "$1",
  paddingY: "$1",
  background: "$offWhite",
  borderBottom: "1px solid $dark",
  display: "flex",
  height: "2.5em",
});

const Banner = ({ page }) => {
  const { customer } = useReactiveVar(customerVar);
  const { printRef } = useReactiveVar(layoutVar);
  const [error, setError] = useState();
  const [fetchStatus, setFetchStatus] = useState(false);
  const checkError = () => {};
  const submitProposalHandler = async () => {
    if (customer.length == 0) {
      setError("Please enter a customer name!");
    } else {
      setFetchStatus(true);
      await submitProposal();
      setFetchStatus(false);
    }
  };

  const print = useReactToPrint({
    content: () => printRef.current,
  });

  const handlePrint = () => {
    if (customer.length == 0) {
      setError("Please enter a customer name!");
    } else {
      print();
    }
  };
  const handleOpenEmail = (e) => {
		window.location = "mailto:example@email.com";
    e.preventDefault();
  };

  return (
    <>
      {page === "/proposal" && (
        <BannerWrapper>
          <Box
            css={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box css={{ display: "flex", paddingX: "$3" }}>
              <Text bold css={{ marginY: "$1", marginRight: ".5em" }}>
                Customer:
              </Text>
              <Input
                value={customer}
                onChange={(e) =>
                  customerVar({ ...customerVar(), customer: e.target.value })
                }
                placeholder="Enter customer name here..."
                type="text"
                css={{ background: "$offwhite", width: "17em" }}
              />
            </Box>
            <Box css={{ display: "flex", alignItems: "center" }}>
              {!!error && (
                <Text bold color="error" css={{ marginRight: "1em" }}>
                  {error}
                </Text>
              )}
              <Button onClick={(e) => handleOpenEmail(e)}>Open email</Button>
              <Button
                css={{
                  marginX: "$3",
                }}
                onClick={() => handlePrint()}
              >
                Print PDF
              </Button>
              <Link href={`/proposal/${customer}`}>
                <Button
                  loading={fetchStatus}
                  onClick={() => submitProposalHandler()}
                  css={{
                    marginRight: "$3",
                  }}
                >
                  Preview
                </Button>
              </Link>
            </Box>
          </Box>
        </BannerWrapper>
      )}
    </>
  );
};

export default Banner;
