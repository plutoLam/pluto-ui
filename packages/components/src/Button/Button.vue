<script lang="ts" setup>
import { useNamespace } from "@pluto-ui/hooks";
const ls = useNamespace("button");
import { withDefaults } from "vue";

// defineOptions({
//   name: "PlButton",
// });
// 按钮类型
type ButtonType =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "text";
type ButtonSize = "medium" | "small" | "mini";
interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  round?: boolean;
  plain?: boolean;
  circle?: boolean;
  disabled?: boolean;
}

withDefaults(defineProps<ButtonProps>(), {});
// console.log("props", props);
</script>

<template>
  <button
    :class="[
      ls.b(),
      ls.m(type),
      ls.m(size),
      ls.is('round', round),
      ls.is('plain', plain),
      ls.is('circle', circle),
      ls.is('disabled', disabled),
    ]"
    :disabled="disabled"
  >
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>
