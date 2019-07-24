
var app = new Vue({
  el: '#app',
   data: {
    details:[]
  },
  
  created (){
    axios.get('http://localhost:3000/details').then(response => {
		this.details = response.data;
  })
  }
  
  })