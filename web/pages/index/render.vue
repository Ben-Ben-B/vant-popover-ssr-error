
<template>
  <div>
    <!-- <van-popover v-model:show="showPopover" :actions="actions">
      <template #reference>
        浅色风格
      </template>
    </van-popover> -->
    <popup />
    hahhahaha
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import { Popover as VanPopover } from 'vant'
import popup from './popup'

export default defineComponent({
  components: {
    // VanPopover,
    popup
  },
  data() {
    return {
      showPopover: false,
      actions: [
      { text: '选项一' },
      { text: '选项二' },
      { text: '选项三' },
      ]
    }
  },
  created() {
  },
})
</script>

<style>
</style>
