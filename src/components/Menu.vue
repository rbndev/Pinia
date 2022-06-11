<template>
  <div class="menu">
    <button 
      v-for="item in menu.list" 
      :key="item.to" 
      :class="menu.name === item.name && 'active'"
      @click="changeMenu(item)"
    >
      {{item.icon}} {{item.name}}
    </button>
  </div>
</template>

<script>
import { useMenu }  from "../store/menu";
export default {
  name: 'Menu',
  setup() {
    const menu = useMenu()
    
    const changeMenu = item => {
      menu.changeRoute(item)
    }
    
    return { menu, changeMenu }
  }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap');
.menu{
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 100px;
  button{
    border: none;
    padding: 8px 16px;
    border-radius: 8px;
    font-family: 'Kdam Thmor Pro', sans-serif;
    font-weight: 500;
    background: #649173;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #DBD5A4, #649173);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #DBD5A4, #649173); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border: 1px solid #DBD5A4;
    cursor: pointer;
    &:hover{
      -webkit-box-shadow: 0px 0px 3px 3px rgba(0,0,0,0.2);
      -moz-box-shadow: 0px 0px 3px 3px rgba(0,0,0,0.2);
      box-shadow: 0px 0px 3px 3px rgba(0,0,0,0.2);
    }
  }
  .active{
    background: #000046;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #1CB5E0, #000046);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #1CB5E0, #000046); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    border-color: #1CB5E0;
    color: #75e1ff;
  }
}
</style>
