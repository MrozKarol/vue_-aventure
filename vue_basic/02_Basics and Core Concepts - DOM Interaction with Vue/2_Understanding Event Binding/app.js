const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmName: '',
    };
  },
  methods: {
    confirmInput() {
      this.confirmName = this.name;
    },
    submitForm() {
      alert('submitet');
    },

    setName(e, lastName) {
      this.name = e.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    remove(num) {
      this.counter = this.counter - num;
    },
  },
});

app.mount('#eavents');
