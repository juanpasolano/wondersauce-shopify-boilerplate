import React from "react";

const TestModule = {
  init: () => {
    render(<h1>Hello world</h1>, select("body"));
  },
};

export default TestModule;
