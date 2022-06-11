<template>
  <Menu />
  <Content />
</template>

<script>
import Menu from './components/Menu.vue'
import Content from './components/Content.vue'

export default {
  name: 'App',
  components: {
    Menu,
    Content
  }
}
</script>
