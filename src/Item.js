import React, { useState } from "react";

function Item(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.describe}</p>
      <button onClick={props.remove1}>delete</button>
      <hr />
    </div>
  );
}

export default Item;
