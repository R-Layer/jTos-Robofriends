import React from "react";
import { shallow, mount, render } from "enzyme";
import Card from "./Card";

console.log(shallow(<Card />));
it("expect to render Card component", () => {
  //expect(shallow(<Card />).length).toEqual(1);
  expect(shallow(<Card />)).toMatchSnapshot();
});