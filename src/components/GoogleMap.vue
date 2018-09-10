<template>
	<div class="google-map" :id="mapId"></div>

</template>

<script>
	

	export default {
		props: ['mapName'],
		data () {
			return {
				mapId: this.mapName,
				markers: [{
					latitude: 59.364990,
					longitude: 18.055330
				}]
			}
		},

		mounted() {
			// const bounds = new google.maps.LatLngBounds();

			const element = document.getElementById(this.mapId)
			const options = {
				zoom: 16,
				center: new google.maps.LatLng(59.364990, 18.055330)
			}

			const map = new google.maps.Map(element, options);

			this.markers.forEach((coord) => {
				const position = new google.maps.LatLng(coord.latitude, coord.longitude);
				const marker = new google.maps.Marker({ 
					position,
					map,
				});
				
			});

			
		}
	}
</script>