import React from "react";
import { mount } from "enzyme";
import { BrowserRouter, NavLink } from "react-router-dom";
import Link from "../Link";

it("should render an a tag with content", () => {
  const wrapper = mount(
    <BrowserRouter>
      <Link to="/home" content="Home" />
    </BrowserRouter>
  );
  expect(wrapper.find("a").length).toEqual(1);
  expect(wrapper.render().text()).toContain("Home");
  expect(wrapper.html()).toContain("/home");
  wrapper.unmount();
});
it("should render a link with an icon", () => {
  const wrapper = mount(
    <BrowserRouter>
      <Link icon="test" />
    </BrowserRouter>
  );
  expect(wrapper.find("i").length).toEqual(1);
  wrapper.unmount();
});

it("should render a functional link", () => {
  const wrapper = mount(
    <BrowserRouter>
      <Link funtional={true} />
    </BrowserRouter>
  );
  expect(wrapper.find(NavLink).length).toEqual(1);
});
