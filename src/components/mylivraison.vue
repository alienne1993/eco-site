<template>
    
      <div class="container mx-auto">
	<div class="flex flex-wrap my-4 -mx-2">
		<div class="border-2 border-blue-300 rounded relative px-2 py-3 mx-2">
			<p class="absolute block bg-white px-2 title">Paiement sécurisé</p>
			<div class="flex justify-center -mx-2">
				<img class="mx-2" src="https://img.icons8.com/dusk/64/000000/keyhole-shield.png">
				<img class="mx-2" src="https://img.icons8.com/dusk/64/000000/mastercard-logo.png">
				<img class="mx-2" src="https://img.icons8.com/dusk/64/000000/visa.png">
				<img class="mx-2" src="https://img.icons8.com/dusk/64/000000/stripe.png">
				<img class="mx-2" src="https://img.icons8.com/dusk/64/000000/paypal.png">
			</div>
		</div>
		<div class="border-2 border-blue-300 rounded relative px-2 py-3 mx-2 w-64">
			<p class="absolute block bg-white px-2 title">Paiement en 3 fois</p>
			<div class="flex justify-center -mx-2">
				<span class="text-blue-500 font-bold text-3xl">3x</span>
				<img class="mx-2" src="https://img.icons8.com/dusk/50/000000/coins.png">
			</div>
		</div>
		<div class="border-2 border-blue-300 rounded relative px-2 py-3 mx-2 w-64">
			<p class="absolute block bg-white px-2 title">Livraison gratuite</p>
			<div class="flex justify-center -mx-2">
				<img src="https://img.icons8.com/dusk/64/000000/free-shipping.png">
			</div>
		</div>
		<div class="border-2 border-blue-300 rounded relative px-2 py-3 mx-2 w-64">
			<p class="absolute block bg-white px-2 title">Service client</p>
			<div class="flex justify-center -mx-2">
				<img src="https://img.icons8.com/dusk/64/000000/online-support.png">
			</div>
		</div>
	</div>
</div>  
  
</template>
<script>
export default {
    name:"mylivraison"
}
</script>
<style scoped>
.title {
	top: -0.75rem;
	left: 1rem;
}
</style>