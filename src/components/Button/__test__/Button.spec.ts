import Button from "../Button.vue";

import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";
// 测试分组
describe("Button", () => {
  // mount
  test("用户可以通过 slot 的方式，定义组件的内容", () => {
    // @vue/test-utils
    const wrapper = shallowMount(Button, {
      slots: {
        default: "自定义内容",
      },
    });
    // 断言
    expect(wrapper.text()).toBe("自定义内容");
  });
});

describe("color", () => {
  test("default", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Button",
      },
    });
    console.log("classes", wrapper.classes());
    expect(wrapper.classes()[0]).toBe("pl-button--primary");
  });
  // test("red", () => {
  //   const wrapper = shallowMount(Button, {
  //     slots: {
  //       default: "Button",
  //     },
  //     props: {
  //       color: "red",
  //     },
  //   });
  //   expect(
  //     wrapper
  //       .classes()
  //       .map((v) => v.replace("\n", ""))
  //       .includes("bg-red-500")
  //   ).toBe(true);
  // });
});

// describe("size", () => {
//   test("default", () => {
//     const wrapper = shallowMount(Button, {
//       slots: {
//         default: "Button",
//       },
//     });
//     const classes = wrapper.classes().map((v) => v.replace("\n", ""));
//     expect(classes.includes("py-2")).toBe(true);
//     expect(classes.includes("px-4")).toBe(true);
//   });
//   test("red", () => {
//     const wrapper = shallowMount(Button, {
//       slots: {
//         default: "Button",
//       },
//       props: {
//         size: "s",
//       },
//     });
//     const classes = wrapper.classes().map((v) => v.replace("\n", ""));
//     expect(classes.includes("py-1")).toBe(true);
//     expect(classes.includes("px-2")).toBe(true);
//   });
// });

// describe("round", () => {
//   test("default", () => {
//     const wrapper = shallowMount(Button, {
//       slots: {
//         default: "Button",
//       },
//     });
//     const classes = wrapper.classes().map((v) => v.replace("\n", ""));
//     expect(classes.includes("rounded-lg")).toBe(true);
//   });
//   test("round", () => {
//     const wrapper = shallowMount(Button, {
//       slots: {
//         default: "Button",
//       },
//       props: {
//         round: true,
//       },
//     });
//     const classes = wrapper.classes().map((v) => v.replace("\n", ""));
//     expect(classes.includes("rounded-99")).toBe(true);
//   });
// });

// function isPlain(classes) {
//   let flag = true;
//   for (const item of classes) {
//     if (item.indexOf("bg-") != -1 && item.split("-")[2] === 500) {
//       flag = false;
//     }
//     if (item.indexOf("border-") != -1 && item.split("-")[1] === "black") {
//       flag = false;
//     }
//     if (item.indexOf("text-") != -1 && item.split("-")[1] === "white") {
//       flag = false;
//     }
//     if (item.indexOf("hover:text-") != -1 && item.split("-")[1] === "white") {
//       flag = false;
//     }
//   }
//   return flag;
// }
// describe("plain", () => {
//   test("default", () => {
//     const wrapper = shallowMount(Button, {
//       slots: {
//         default: "Button",
//       },
//     });
//     const classes = wrapper.classes().map((v) => v.replace("\n", ""));
//     expect(classes.includes("border-black-500")).toBe(true);
//   });
//   test("plain", () => {
//     const wrapper = shallowMount(Button, {
//       slots: {
//         default: "Button",
//       },
//       props: {
//         plain: true,
//       },
//     });
//     const classes = wrapper.classes().map((v) => v.replace("\n", ""));
//     expect(isPlain(classes)).toBe(true);
//   });
// });
