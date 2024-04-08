console.log('JS funziona');


const { createApp } = Vue

createApp({
  data() {
    return {
      
      number: null,
      arrayMails: []

    }
  },
  created() {
    
    this.fetchArraymails(10)
  },
  methods: {
    
    fetchArraymails(n) {
      for (let i = 0; i < n; i++) {
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((res) => {
          this.arrayMails.push(res.data.response);
        })
      }
    }
  }

}).mount('#app')








































