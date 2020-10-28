import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(boxList, height = "200px", width = "200px", color = "peachpuff") {
  const heightInput = boxList.getByLabelText("Height");
  const widthInput = boxList.getByLabelText("Width");
  const Input = boxList.getByLabelText("Color");
  fireEvent.change(Input, { target: { value: color } });
  fireEvent.change(widthInput, { target: { value: width } });
  fireEvent.change(heightInput, { target: { value: height } });
  const button = boxList.getByText("Add Box!");
  fireEvent.click(button);
}

it("renders without crashing", function() {
  render(<BoxList />);
});

it("matches snapshot", function() {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("can add a new box", function() {
  const boxList = render(<BoxList />);


  expect(boxList.queryByText("X")).not.toBeInTheDocument();

  addBox(boxList);


  const removeButton = boxList.getByText("X");
  expect(removeButton).toBeInTheDocument();
  expect(removeButton.parentElement).toHaveStyle(`
    background-color: peachpuff;
    width: 200px;
    height: 200px;
  `);

  expect(boxList.getAllByDisplayValue("")).toHaveLength(3);


});

it("can remove a box", function() {
  const boxList = render(<BoxList />);
  addBox(boxList);

  const removeButton = boxList.getByText("X");


  fireEvent.click(removeButton);
  expect(removeButton).not.toBeInTheDocument();
});
