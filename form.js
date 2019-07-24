
var form = new Vue({
	
	el:'#form',
	data:
		{		Rest:[
			{ Resname:'',src:'', Address:'', Cuisine:''}
			]
			
	},
	methods: {
			
			AddResdetails(){
				this.Rest.push({
				Resname:this.Resname,
				src:this.src,
				Address:this.Address,
				Cuisine:this.Cuisine
				})

				axios.post('http://localhost:3000/details',{
				Resname:this.Resname,
				src:this.src,
				Address:this.Address,
				Cuisine:this.Cuisine
				})
				.then(response =>{})
				.catch(e=> {
					console.log('error');
				})
				
			
	},
	}
	});
	