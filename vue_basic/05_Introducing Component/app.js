const app = Vue.createApp({
  data() {
    return {
      detailsAreVisible: false,
      frainds: [
        {
          id: 'janek',
          name: 'Janek Ogarek',
          phone: '0800 000 000',
          emial: 'janek@hotmail.coom',
        },
        {
          id: 'milena',
          name: 'Milena Majonez',
          phone: '0700 555 000',
          emial: 'milena@hotmail.coom',
        },
      ],
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});

app.mount('#app');
