const app = Vue.createApp({
  data() {
    return {
      name: '',
      confirmName: '',
    };
  },
  methods: {
    confirmInput(e) {
      this.confirmName = e.target.value;
    },
    setName(e) {
      this.name = e.target.value;
    },
    showAlert() {
      alert('Vue Just Vue');
    },
  },
});

app.mount('#assignment');
