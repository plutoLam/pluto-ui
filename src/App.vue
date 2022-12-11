<script lang="ts" setup>
import { PlButton } from "./components/Button";
</script>

<template>
  <pl-button color="red" icon="search" round plain>红色按钮</pl-button>
  <pl-button color="green">绿色按钮</pl-button>
  <pl-button color="blue" size="s">绿色按钮</pl-button>
  <pl-button color="blue" round plain icon="search"></pl-button>
  <pl-button color="green" round plain icon="edit"></pl-button>
  <pl-button color="gray" round plain icon="check"></pl-button>
  <pl-button color="yellow" round plain icon="message"></pl-button>
  <pl-button color="red" round icon="delete"></pl-button>
</template>

<style>
.box {
  top: auto;
  position: absolute;
}
</style>
