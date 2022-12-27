import Divider from "../Divider.vue";
import { useNamespace } from "@pluto-ui/hooks";
const ls = useNamespace("divider");
import { mount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("Divider", () => {
  test("content", () => {
    const wrapper = mount(Divider, {
      slots: {
        default: "I am a divider",
      },
    });
    expect(wrapper.text()).toBe("I am a divider");
  });

  test("direction", () => {
    const wrapper = mount(Divider, {
      props: {
        direction: "vertical",
      },
    });
    expect(wrapper.classes()).toContain(ls.m("vertical"));
  });

  test("contentPosition", () => {
    const wrapper = mount(Divider, {
      props: {
        "content-position": "left",
      },
      slots: {
        default: () => {
          return "test text";
        },
      },
    });
    const text = wrapper.find(`.${ls.e("text")}`);
    expect(text.classes()).toContain("is-left");
  });

  test("dividerStyle", () => {
    const wrapper = mount(Divider, {
      props: {
        dividerStyle: "double",
      },
    });
    expect(wrapper.classes()).toContain(ls.is("double"));
  });

  test("color", () => {
    const wrapper = mount(Divider, {
      props: {
        color: "red",
      },
    });
    expect(wrapper.attributes("style")).toBe("color: red;");
  });

  test("dark", () => {
    const wrapper = mount(Divider, {
      props: {
        dark: true,
      },
      slots: {
        default: () => {
          return "test text";
        },
      },
    });
    expect(wrapper.find(`.${ls.e("text")}`).classes()).toContain("is-dark");
  });
});
