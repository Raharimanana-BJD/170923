<template>
  <div id="primary" class="hidden lg:block">
    <a
      href="#"
      class="flex w-fit space-x-2 rounded-md bg-accents-600 p-3 px-6 py-2 pt-2"
    >
      <span class="text-neutral-100">{{ primary.name }}</span>
      <i class="bx bx-download text-2xl text-neutral-100"></i>
      <!-- <down /> -->
    </a>
  </div>
</template>

<script>
// data
import Data from "../../Data";
export default {
  name: "primary",
  props: {
    primary: {
      type: String,
      default: () => Data.primary,
    },
  },
  // components: { Down },
};
</script>

<style></style>
