<script setup lang="ts">
  import { computed } from 'vue'
  import type { IconProps } from './types'
  import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
  import { omit } from 'lodash-es'

  defineOptions({
    name: 'ErIcon',
    inheritAttrs: false,
  })

  const props = defineProps<IconProps>()

  const filterProps = computed(() => omit(props, ['type', 'color']))
  const customStyles = computed(() => ({ color: props.color ?? void 0 }))
</script>

<template>
  <i
    class="er-icon"
    :class="{ [`er-icon--${type}`]: type }"
    :style="customStyles"
    v-bind="$attrs"
  >
    <font-awesome-icon v-bind="filterProps" />
  </i>
</template>

<style scoped>
  @import url(./style.css);
</style>
