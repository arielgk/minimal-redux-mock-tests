import TestRenderer from "react-test-renderer";
import React from "react";
import ItemList from "./ItemList";

describe("The Item List Component", () => {
  it("should render the items header", () => {
    const items = [{ id: 1, title: "Item 1" }];
    const tree = TestRenderer.create(<ItemList items={items} />);

    const instance = tree.root;
    const component = instance.findByProps({ className: "header" });
    const text = component.children[0];
    expect(text).toEqual("Items:");
  });

  it("Should render props items ", () => {
    const items = [{ id: 1, title: "Item 1" }];
    const tree = TestRenderer.create(<ItemList items={items} />);
    const instance = tree.root;

    const component = instance.findByProps({ className: "item" });
    const text = component.children[0];
    expect(text).toEqual("Item 1");
  });
});
