const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Best Vue developer',
      vueLink: 'https://vuejs.org/',
    };
  },
});

app.mount('#user-goal');
