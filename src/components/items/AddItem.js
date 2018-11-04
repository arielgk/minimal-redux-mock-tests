import React from "react";
import PropTypes from "prop-types";

const AddItem = ({ onSave }) => {
  let input;
  return (
    <div className={"actions-container"}>
      <input
        type="text"
        ref={node => {
          input = node;
        }}
      />
        <br/>
      <input
        type="submit"
        value="send"
        onClick={() => {
          onSave({ id: null, title: input.value });
          input.value = "";
        }}
      />
    </div>
  );
};

AddItem.PropTypes = {
    onSave:PropTypes.func.isRequired,
}

export default AddItem;
