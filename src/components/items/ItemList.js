import React from "react";
import PropTypes from "prop-types";

const ItemList = ({ items }) => {
  return (
    <div>
      <h2 className="header">Items:</h2>
      <div className="items">
        {items.map(item => (
          <div className="item" key={item.id}>
            {item.title}
          </div>
        ))}
      </div>

      <hr />
    </div>
  );
};

ItemList.propTypes = {
  items: PropTypes.array.isRequired
};

export default ItemList;
