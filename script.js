
const app = new Vue({
  el: '#app',
  data:{
    apiUrl: "http://localhost:8888/php-ajax-dischi/index.php",
    
  },

  mounted(){
    this.getApi()
  },

  methods:{
      getApi(){
        axios.get(this.apiUrl)
        .then(response =>{
          console.log(response.data);
        })
      }
    }

});