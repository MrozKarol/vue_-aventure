const app = Vue.createApp({
  data() {
    return {
      name: 'Karol',
      age: 99,
      imgAdress: `https://picsum.photos/50${this.randomNumber()}`,
    };
  },
  methods: {
    randomNumber() {
      const randomNumber = Math.random();
      return randomNumber < 0.5 ? 0 : 1;
    },
  },
});

app.mount('#user-goal');
