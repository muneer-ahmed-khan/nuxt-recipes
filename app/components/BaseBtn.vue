<script lang="ts" setup>
const props = defineProps<{
  label?: string;
  to?: string; // Accepts a string for the 'to' prop
}>();

const navigate = () => {
  if (props.to) {
    // Programmatically navigate if `to` is defined
    useRouter().push(props.to);
  }
};
</script>

<template>
  <NuxtLink
    @click="navigate"
    class="px-4 py-2 text-white self-start bg-dodgeroll-gold rounded-md text-base lg:text-lg cursor-pointer"
  >
    <slot>{{ props.label }}</slot>
  </NuxtLink>
</template>
