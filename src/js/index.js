import TestModule from "./test.module";

const app = {
  init: () => {
    console.log(">>> JS init");

    TestModule.init();
  },
};

app.init();
