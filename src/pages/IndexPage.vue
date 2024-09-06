<template>
  <div class="htmlClass">
    <h1>{{ title }}</h1>
    <form>
      <input type="text" id="firstName" v-model="firstName" />
      <button @click="submitForm()" class="submitForm">Submit</button>
  </form>
    <h2>{{ title }}</h2>
    <form>
      <input type="text" id="lastName" v-model="lastName" />
  </form>
    <h3>{{ title }}</h3>
    <form>
      <input type="text" id="nickName" v-model="nickName" />
  </form>
    <h4>{{ title }}</h4>
    <form>
      <input type="text" id="studentId" v-model="studentId" />
  </form>

  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      firstName: 'ศุภพิชญ์',
      lastName: 'พุ่มนิล',
      nickName: 'ผัดไท',
      studentId: '6604101386',
    }
  },
  methods: {
    submitForm() {
      this.$emit('submit form')
    },
  }
}
</script>

<style scoped></style>