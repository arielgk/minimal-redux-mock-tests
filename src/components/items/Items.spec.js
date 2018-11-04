import { mapStateToProps, Items } from "./Items";
import React from "react";
import TestRenderer from "react-test-renderer";

describe("The Item Component", () => {
  it("should map the state to props correctly", () => {
    const sampleItems = { items: [{ id: 1, title: "Item 1" }] };
    const appState = sampleItems;
    const ownProps = {};
    const componentState = mapStateToProps(appState, ownProps);
    expect(componentState).toEqual(sampleItems);
  });
});

describe("The item functionality", () => {
  const props = {
    items: [{ id: 3, title: "Item 1" }],
    actions: {
      addItem: () => {
        return Promise.resolve();
      }
    }
  };
  it("should add item ", () => {
    const tree = TestRenderer.create(<Items {...props} />);
  });
});
