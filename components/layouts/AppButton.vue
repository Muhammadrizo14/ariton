<template>
  <button :class="buttonClasses">
    <div class="flex items-center justify-center gap-3">
      <slot name="icon"></slot>
      <slot name="default"></slot>
    </div>
  </button>
</template>

<script setup>
import {computed} from 'vue';

const props = defineProps({
  blue: {
    type: Boolean,
    default: false,
  },
  grey: {
    type: Boolean,
    default: false,
  },
  outlined: {
    type: Boolean,
    default: false,
  },
  filled: {
    type: Boolean,
    default: false,
  },
});

const buttonClasses = computed(() => {
  let baseClasses = 'border border-solid rounded-xl py-3 px-6 w-full ';


  if (props.filled) {
    return `${baseClasses} bg-brand-blue text-white border-0 hover:opacity-90`;
  }

  if (props.grey) {
    return `${baseClasses} bg-brand-light-grey2 border-brand-light-grey text-brand-black hover:opacity-95`;
  }
  if (props.outlined) {
    return `${baseClasses} bg-transparent border-brand-light-grey text-brand-black hover:opacity-95`;
  }
  else {
    return `${baseClasses} border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-brand-white hover:border-[#136F63]`;
  }



});
</script>


<style lang="scss" scoped>

</style>