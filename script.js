
const app = new Vue({
  el: '#app',
  data:{
    apiUrl: "http://localhost:8888/php-ajax-dischi/index.php",
    musicObject: []
  },

  mounted(){
    this.getApi()
  },

  methods:{
      getApi(){
        axios.get(this.apiUrl)
        .then(response =>{
          this.musicObject = response.data;
          console.log(this.musicObject);
        })
      }
    }

});