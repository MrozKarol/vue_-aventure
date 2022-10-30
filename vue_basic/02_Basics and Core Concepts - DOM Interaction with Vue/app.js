const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Best Vue developer',
      courseGoalA: 'Best Vue developer',
      courseGoaB: 'be a master vue and build best applications',
      vueLink: 'https://vuejs.org/',
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      return randomNumber > 0.5 ? this.courseGoalA : this.courseGoaB;
    },
  },
});

app.mount('#user-goal');
