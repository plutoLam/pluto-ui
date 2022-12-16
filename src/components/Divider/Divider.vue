<script lang="ts" setup>
import { useNamespace } from "../../hooks";
const ls = useNamespace("divider");
import { withDefaults } from "vue";
interface DividerProps {
  direction?: "horizontal" | "vertical";
  dividerStyle?: "dotted" | "dashed" | "double" | "solid";
  contentPosition?: "left" | "center" | "right";
  color?: string;
  dark?: boolean;
}

const props = withDefaults(defineProps<DividerProps>(), {
  direction: "horizontal",
  contentPosition: "center",
  dividerStyle: "solid",
  dark: false,
});
</script>

<template>
  <div
    :class="[
      ls.b(),
      ls.m(direction),
      ls.is('solid', dividerStyle === 'solid'),
      ls.is('dashed', dividerStyle === 'dashed'),
      ls.is('double', dividerStyle === 'double'),
      ls.is('dotted', dividerStyle === 'dotted'),
    ]"
    :style="{ color }"
  >
    <div
      v-if="$slots.default && direction !== 'vertical'"
      :class="[ls.e('text'), ls.is(contentPosition), ls.is('dark', dark)]"
    >
      <slot />
    </div>
  </div>
</template>

<style lang="sass">
@import "../../theme/src/divider"
</style>
