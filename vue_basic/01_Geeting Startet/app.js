Vue.createApp({
  data() {
    return {
      goals: [],
      enteredVale: '',
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredVale);
      this.enteredVale = '';
    },
  },
}).mount('#app');

// const buttonEl = document.querySelector('button');
// const inputEl = document.querySelector('input');
// const listEl = document.querySelector('ul');

// function addGoal() {
//   const inputVale = inputEl.value;
//   const newLi = document.createElement('li');
//   newLi.textContent = inputVale;
//   listEl.appendChild(newLi);
//   inputEl.value = '';
// }

// buttonEl.addEventListener('click', addGoal);
