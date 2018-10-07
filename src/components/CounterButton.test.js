import React from "react";
import { shallow } from "enzyme";
import CounterButton from "./CounterButton";

it("expect to render CounterButton component", () => {
  const mockColor = "blue";
  expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});

it("correctly increments the counter", () => {
  const mockColor = "blue";
  const wrapper = shallow(<CounterButton color={mockColor} />);

  wrapper
    .find('[id="counter"]')
    .simulate("click")
    .simulate("click");
  expect(wrapper.state()).toEqual({ count: 2 });

  expect(wrapper.props().color).toEqual("blue");
});
