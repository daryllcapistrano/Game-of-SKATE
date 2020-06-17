import React from "react";
import { Button } from "@material-ui/core/";

export default function ActionButton(props) {
  return (
    <Button
      onClick={props.handleClick}
      disabled={props.disabled}
      color={props.color}
      variant={props.variant}
      disableElevation
      // TODO fix below to use styled components, currently not overriding styles
      style={{ margin: `5px` }}
    >
      {props.text}
    </Button>
  );
}
