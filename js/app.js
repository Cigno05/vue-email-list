console.log('JS funziona');


const { createApp } = Vue

createApp({
  data() {
    return {
      arrayMails: [],
      // arrayMailsComplete: [],
      mailsLength: 30,

    }
  },
  methods: {

    fetchArraymails() {

      for (let i = 0; i < this.mailsLength; i++) {

        axios
          .get('https://flynn.boolean.careers/exercises/api/random/mail')
          .then((res) => {
            this.arrayMails.push(res.data.response);
            // if (this.arrayMails.length === n) {
            //     this.arrayMailsComplete = this.arrayMails

            //     console.log(this.arrayMails.length)
            //     console.log(this.arrayMailsComplete)
            //   }
          })

      }
    }
  },
  created() {
    this.fetchArraymails(10)
  },

}).mount('#app')








































