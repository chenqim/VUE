<template>
    <div>
        <a :href="url">
            <slot></slot>
        </a>
    </div>
</template>
<script>
export default {
  name: 'SlotComponents',
  props: {
    url: {
      type: String
    }
  }
}
</script>
