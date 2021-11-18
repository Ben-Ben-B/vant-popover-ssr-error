
<template>
  <div>
    <van-popover v-model:show="showPopover" :actions="actions">
    </van-popover>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Popover as VanPopover } from 'vant'

export default defineComponent({
  components: {
    VanPopover
  },
  data() {
    return {
      showPopover: false,
      actions: []
    }
  },
  created() {
  },
})
</script>

<style>
</style>
