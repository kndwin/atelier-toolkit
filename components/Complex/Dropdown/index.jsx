import { useState } from "react";

import { useDetectClickOut } from "hooks";
import { Box, Button } from "components";

export const Dropdown = ({ options, onChange, placeholder, ...newProps }) => {
  const { show, setShow, nodeRef, triggerRef } = useDetectClickOut(false);
  const [optionChosen, setOptionChosen] = useState();

  const setOptionAndLeave = (label, value) => {
    onChange(value);
    setShow(false);
    setOptionChosen(label);
  };

  return (
    <Box
      {...newProps}
      css={{
        position: "relative",
        width: "100%",
      }}
    >
      <Button
        type="button"
        ref={triggerRef}
        css={{
          border: "none",
          width: "100%",
          textAlign: "left",
          background: "$gray",
          "&::after": {
            position: "absolute",
            content: "▼",
            right: "10px",
            bottom: "11px",
          },
        }}
      >
        {!!optionChosen ? optionChosen : placeholder}
      </Button>
      <Box
        css={{
          display: show ? "flex" : "none",
          flexDirection: "column",
          width: "100%",
          height: "fit-content",
          position: "absolute",
          top: "100%",
          left: "0",
          border: "1px solid black",
          borderRadius: "10px",
          overflow: "hidden",
          background: "white",
        }}
        ref={nodeRef}
      >
        {options?.map(({ label, value }, index) => (
          <Box
            css={{
              height: "fit-content",
              width: "100%",
              fontFamily: "News Cycle",
              fontWeight: "bold",
              lineHeight: "1em",
              padding: "10px",
              "&:hover": {
                background: "$primary",
                color: "white",
              },
            }}
            value={value}
            key={`${value}-${index}`}
            onClick={() => setOptionAndLeave(label, value)}
          >
            {label}
          </Box>
        ))}
      </Box>
    </Box>
  );
};
