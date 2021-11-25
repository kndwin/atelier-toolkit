import { useEffect, useRef, useState } from "react";

export const useDetectClickOut = (initState) => {
  const triggerRef = useRef(null); // optional
  const nodeRef = useRef(null); // required

  const [show, setShow] = useState(initState);
  const handleClickOutside = (event) => {
    //if click is on trigger element, toggle modal
    if (triggerRef.current && triggerRef.current.contains(event.target)) {
      return setShow(!show);
    }

    //if modal is open and click is outside modal, close it
    if (nodeRef.current && !nodeRef.current.contains(event.target)) {
      return setShow(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside, true);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside, true);
    };
  });
  return {
    triggerRef,
    nodeRef,
    show,
    setShow,
  };
}
