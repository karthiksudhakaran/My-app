<template>
<div>
    <Header></Header>
        
		
			
            <div v-for="food in foodList">
              <foodList :foods="food"></foodList>
            </div>
  </div>
	 
		  </template>
<script>
export default {
  data() {
    return {
      msg: "Welcome to Your Food Ordering App",
      foodData:[],
      cart:[]
    };
  },
  computed:{
    foodList:function(){
      var foodByCategory = {};
      this.foodData.forEach(function(food){
      
      foodByCategory[food.category] = foodByCategory[food.category] || []
      foodByCategory[food.category].push(food);

    });
    return foodByCategory;
    }
    
  },

    created(){
    

    axios.get('https://thesmartq.firebaseio.com/menu.json').then((response)=>{
		this.foodData = response.data
		},
		(error) => {
          console.log(error)
		  }
		
    )
    
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
