import { defineComponent, Teleport } from 'vue'
export default defineComponent({
  setup() {
    const teleport = 'body'
    return () => (
      <Teleport to={teleport}>
        <div> Teleport </div>
      </Teleport>
    )
  }
})