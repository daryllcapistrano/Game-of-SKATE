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
      style={{ margin: `5px` }}
    >
      {props.text}
    </Button>
  );
}
