<template>
  <form @submit.prevent="submitData">
    <div>
      <label>Neme</label>
      <input type="name" v-model="enteredName" />
    </div>
    <div>
      <label>Tel</label>
      <input type="tel" v-model="enteredPhone" />
    </div>
    <div>
      <label>E-mail</label>
      <input type="email" v-model="enteredEmail" />
    </div>
    <div><button>Add Cintact</button></div>
  </form>
</template>

<script>
export default {
  emits: ['add-contact'],
  data() {
    return {
      enteredName: '',
      enteredPhone: '',
      enteredEmail: '',
    };
  },
  methods: {
    submitData() {
      this.$emit(
        'add-contact',
        this.enteredName,
        this.enteredPhone,
        this.enteredEmail
      );
    },
  },
};
</script>
