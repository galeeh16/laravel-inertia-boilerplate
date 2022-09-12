<template>
  <li class="sidebar-item">
      <Link 
          class="sidebar-link"
          :class="{'router-link-exact-active': props.active}" 
          :href="props.to"
      >
          <slot />
      </Link>
  </li>
</template>

<script setup>
import { Link } from '@inertiajs/inertia-vue3';
const props = defineProps({
  active: Boolean,
  to: String,
});
</script>