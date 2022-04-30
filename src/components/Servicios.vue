<template>
</header>
</body>
<div class="container">
		<div class="left">
			<h3>BILLING ADDRESS</h3>
			<form>
				Nombre Completo
				<input type="text" name="" placeholder="Enter name">
				Email
				<input type="text" name="" placeholder="Enter email">

				Address
				<input type="text" name="" placeholder="Enter address">
				
				Ciudad
				<input type="text" name="" placeholder="Enter City">
				<div id="zip">
					<label>
						State
						<select>
							<option>Pago de suscripcion</option>
							<option>Publiccion de terrenos</option>
							<option>Publicacion de casas</option>
							<option>Publicacion de autos</option>
							<option>Publicacion en general</option>
						</select>
					</label>
						<label>
						Zip code
						<input type="number" name="" placeholder="Zip code">
					</label>
				</div>
			</form>
		</div>

    <div class="right">
			<h3>Pagos</h3>
			<form>
				Accepted Card <br>
			
				<br><br>

				Credit card number
			<input type="text" name="" placeholder="Enter card number">
				
				Exp month
				<input type="text" name="" placeholder="Enter Month">
				<div id="zip">
					<label>
						Exp year
						<select>
							<option>Choose Year..</option>
							<option>2022</option>
							<option>2023</option>
							<option>2024</option>
							<option>2025</option>
						</select>
					</label>
						<label>
						CVV
						<input type="number" name="" placeholder="CVV">
					</label>
				</div>
			</form>
			<input type="submit" name="" value="Proceed to Checkout">
		</div>
	</div>
</header>
</body>
</template>

<script>
export default {
  name: 'Servicios',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
*{padding:0; margin:0; box-sizing: border-box; font-family:sans-serif;}
header{
	width: 100vw;
	min-height: 100vh;
	background: #34495e;
	font-size: 1.2rem;
	display: flex;
	justify-content: center;
	align-items: center;
}
.container{
	background: white;
	max-width: 900px;
	min-height: 500px;
	display: flex;
	justify-content:space-between;
	align-items: flex-start;
	padding: 0.5rem 1.5rem;
}
.left{
	flex-basis: 50%;
}
.right{
	flex-basis: 50%;
}
form{
	padding: 1rem;
}

h3{
	margin-top: 1rem;
	color:#2c3e50;
	}

form input[type="text"]{
	width: 100%;
	padding: 0.5rem 0.7rem;
	margin: 0.5rem 0;
	outline: none;
}

#zip{
	display: flex;
	margin-top: 0.5rem;
}
#zip select{
	padding: 0.5rem 0.7rem;
}
#zip input[type="number"]{
	padding: 0.5rem 0.7rem;
	margin-left: 5px;	
}
input[type="submit"]{
	width: 100%;
	padding: 0.7rem 1.5rem;
	background: #34495e;
	color: white;
	border: none;
	outline: none;
	margin-top: 1rem;
	cursor: pointer;
}

input[type="submit"]:hover{
	background: #2c3e50;
}


@media only screen and (max-width: 770px){
	.container{
		flex-direction: column;
	}
	body{
		overflow-x: hidden;
	}
}




</style>