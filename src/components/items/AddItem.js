import React from "react";
import PropTypes from "prop-types";

const AddItem = ({ onSave }) => {
  let input;
  return (
    <div>
      <input
        type="text"
        ref={node => {
          input = node;
        }}
      />
      <input
        type="submit"
        value="send"
        onClick={() => {
          onSave({ id: input.value, title: input.value });
          input.value = "";
        }}
      />
    </div>
  );
};

export default AddItem;
