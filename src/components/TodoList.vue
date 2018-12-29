<template>
  <div>
    <input type="text" v-model='inputValue'>
    <button @click='submit'>提交</button>
    <ul>
      <li v-for='item in todoList' :key='item.index'>
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      todoList: [],
      inputValue: ''
    }
  },

  methods: {
    submit () {
      this.todoList.push(this.inputValue)
      this.inputValue = ''
    }
  }
}
</script>

<style scoped>

</style>
