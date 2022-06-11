<template>
  <div class="content">
    <h1># Pinia</h1>
    <p>
      Nome: <span>{{ menu.name }}</span>
    </p>
    <p>
      Path: <span>{{ menu.route }}</span>
    </p>

    <ul>
      <li v-for="item in menu.list" :key="item.name" @click="menu.changeRoute(item)">
        {{ item.name }}
      </li>
    </ul>
    <p @click="menu.changeRoute({ name: 'teste', icon: '☭', to: 'teste' })">teste</p>
  </div>
</template>

<script>
import { useMenu } from "../store/menu";
export default {
  name: "Content",
  setup() {
    const menu = useMenu();

    return { menu };
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Kdam+Thmor+Pro&display=swap");
.content {
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 400px;
  height: 400px;
  background: #255461;
  border-radius: 8px;
  color: #779192;
  margin: 0 auto;
  border-radius: 8px;
  -webkit-box-shadow: 0px 0px 12px 3px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 0px 12px 3px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 0px 12px 3px rgba(0, 0, 0, 0.2);
  margin-top: 30px;
  h1 {
    margin: 0;
    padding: 0;
    margin-bottom: 20px;
    color: #dbd5a4;
  }
  ul {
    outline: none;
    width: max-content;
    padding: 0;
    li {
      font-family: "Kdam Thmor Pro", sans-serif;
      list-style-type: none;
      text-align: left;
      padding: 8px;
      border-radius: 8px;
      margin: 5px 0;
      border-radius: 8px;
      background: #252621;
      color: #f1e7c1;
      font-size: 12px;
      cursor: pointer;
    }
  }
  p {
    margin: 5px 0;
    text-align: left;
    span {
      color: white;
    }
  }
}
</style>
