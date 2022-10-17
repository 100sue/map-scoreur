<template>
    <div class="ui grid">
      <div class="six wide column">
        <div class="six wide column">
    <form class="ui segment large form">
      <div class="ui segment">
        <div class="field">
          <div class="ui right icon input large">
            <input type="text" placeholder="Enter your address" v-model="coordinates"/>
            <i class="dot circle link icon" @click="locatorButtonPressed" ></i>
          </div>
        </div>
        <div class="field">
          <div class="two fields">
            <div class="field">
              <select v-model="type">
                <option value="restaurant">Restaurant</option>
              </select>
            </div>
            <div class="field">
              <select v-model="radius">
                <option value="5">5 KM</option>
                <option value="10">10 KM</option>
                <option value="15">15 KM</option>
                <option value="20">20 KM</option>
              </select>
            </div>
          </div>
        </div>
        <button class="ui button green" @click="findCloseBuyButtonPressed">Find CloseBuy</button>
      </div>
    </form>
</div>
      </div>
      <div class="ten wide column segment ui" ref="map"></div>
    </div>
</template>

<script>
import axios from "axios";

  export default {
    data() {
    return {
      lat: 0,
      lng: 0,
      type: "",
      radius: "",
      places: []
    };
},
computed: {
    coordinates() {
      return `${this.lat}, ${this.lng}`;
    }
},
methods: {
  locatorButtonPressed() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
      },
      error => {
        console.log("Error getting location");
      }
    );
  },
  findCloseBuyButtonPressed() {
	const URL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
        this.lat
      },${this.lng}&type=${this.type}&radius=${this.radius *
        1000}&key=[YOURAPIKEY]`;
	axios.get(URL).then(response => {
		this.places = response.data.results;
		this.addLocationsToGoogleMaps();
	}).catch(error => {
		console.log(error.message);
	});
},
}

  }

</script>