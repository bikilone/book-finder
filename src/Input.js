import React from "react";

export default function Input(props) {
  const { inputText, onInputChange, onSubmit, image } = props;
  console.log(image);
  return (
    <div>
      <h1>Book |Finder</h1>
      <form action="" onSubmit={onSubmit}>
        <input type="text" onChange={onInputChange} value={inputText} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
