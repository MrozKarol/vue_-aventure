const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Best Vue developer',
      vueLink: 'https://vuejs.org/',
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      return randomNumber > 0.5 ? 'Learn Vue' : 'Masters of Vue';
    },
  },
});

app.mount('#user-goal');
