import React from "react";

interface TypeList {
  id: number;
  type: string;
}

export default function TypeSelector(props: { types: TypeList[] }) {
  return props.types.map((type: TypeList) => (
    <React.Fragment key={type.id}>
      <option value={type.type}>{type.type}</option>
    </React.Fragment>
  ));
}
