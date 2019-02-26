import React from "react";
import { shallow } from "enzyme";
import SideNav from "./SideNav";

describe("SideNav", () => {
  let component;

  it("should toggle the state based on e.target.id ", () => {
    component = shallow(<SideNav />);
    component.find("#toggler1").simulate("click");
    expect(component.state().toggler1).toBe(true);
  });
});
