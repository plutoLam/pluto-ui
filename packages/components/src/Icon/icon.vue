<template>
  <i :class="bem.b()" :style="style">
    <span class="icon__item"></span>
    <slot />
  </i>
</template>

<script setup lang="ts">
import { useNamespace } from "@pluto-ui/hooks";
const bem = useNamespace("icon");

import { computed, withDefaults } from "vue";
import type { CSSProperties } from "vue";

interface IconProps {
  color: string;
  size: number | string;
}

const props = withDefaults(defineProps<IconProps>(), {});

const style = computed<CSSProperties>(() => {
  if (!props.size && !props.color) return {};
  console.log("props: ", props);

  return {
    fontSize: props.size ? undefined : props.size + "px",
    "--color": props.color, // 通过 CSS 变量方式进行设置 color
  };
});
// const useClasses = ({ props }) => {
//   return computed(() => {
//     return [props.type ? `pl-button--${props.type}` : ``];
//   });
// };

// const classes = useClasses({
//   props,
// });
</script>
