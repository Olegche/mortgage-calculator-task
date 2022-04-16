<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <button @click="ClickOnAddNewBank">Add new Bank</button>
    </div>

    <banks-list />
  </div>
</template>

<script>
import BanksList from "@/components/BanksList";
export default {
  name: "HelloWorld",
  components: {
    BanksList,
  },
  props: {
    msg: String,
  },
  methods: {
    ClickOnAddNewBank() {
      this.$router.push({
        name: "AddNewBank",
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

button {
  border-radius: 10px;
  border: 1px solid;
  background-color: yellow;
}
</style>
