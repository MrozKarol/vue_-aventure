function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + 5;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
    };
  },
  methods: {
    attackMonster() {
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.attackPlayer();
      console.log(this.playerHealth, this.monsterHealth);
    },
    attackPlayer() {
      const attackValue = getRandomValue(8, 15);
      this.playerHealth -= attackValue;
    },
  },
});

app.mount('#game');
