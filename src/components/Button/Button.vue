<script lang="ts" setup>
import { computed, withDefaults } from "vue";
// 按钮类型
type ButtonType =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "text";

interface ButtonProps {
  type?: ButtonType;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: "primary",
});

const useClasses = ({ props }) => {
  return computed(() => {
    return [props.type ? `pl-button--${props.type}` : ``];
  });
};

const classes = useClasses({
  props,
});
</script>

<template>
  <button :class="classes">
    <span v-if="$slots.default">
      <slot />
    </span>
  </button>
</template>
