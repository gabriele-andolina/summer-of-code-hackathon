let hikeData;

// trigger to populate modal information with current hike
$("#btn-show-modal").click(() => {
  updateHikeInformation();
});

// trigger to populate modal information with current hike
function updateHikeInformation() {
  // clears old distance calculation
  $("#distance").text(``);
  // load the information about hike into JS object
  console.log("loading JSON ");
  fetch("/data/hikes.json")
    .then((response) => response.json())
    .then((data) => {
      // json loaded successfully. now populate the elements on the modal. find active card
      // first find current Carousel index
      let activeCard = document.querySelector("[data-active]");
      let carouselIndex = $(activeCard).index();

      // for now, description is being hard coded and not fetched from a backend server.
      updateDescription( data, carouselIndex )

      // update the heading and text
      // This number is chosen depending on the Carousel card that is currently selected.
      $("#hike-heading").text(data[carouselIndex].name);
      $("#hike-description").text(data[carouselIndex].description);
      // Save data of current slide in global variable
      hikeData = data[carouselIndex];
      // Run function to recalulate distance from hike location
      handlePositionUpdate();
    });
}

// updates the description of the hike based on the selected carousel index. 
//note that this is hard coded so we can use github pages for deployment. 
function updateDescription( data, carouselIndex) {

  descriptions = 
    {
      0: "This is a description for Hike 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui exercitationem quae aliquid temporibus atque cupiditate nostrum, voluptates saepe voluptatem ipsa?",
      1: "This is a description for Hike 2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui exercitationem quae aliquid temporibus atque cupiditate nostrum, voluptates saepe voluptatem ipsa?",
      2: "This is a description for Hike 3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui exercitationem quae aliquid temporibus atque cupiditate nostrum, voluptates saepe voluptatem ipsa?",
      3: "This is a description for Hike 4 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui exercitationem quae aliquid temporibus atque cupiditate nostrum, voluptates saepe voluptatem ipsa?",
      4: "This is a description for Hike 5 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui exercitationem quae aliquid temporibus atque cupiditate nostrum, voluptates saepe voluptatem ipsa?",
      5: "This is a description for Hike 6 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui exercitationem quae aliquid temporibus atque cupiditate nostrum, voluptates saepe voluptatem ipsa?",
    }
  
    // update the object description 
  data[carouselIndex].description = descriptions[carouselIndex]
}

function calculateDistance(latUser, lonUser, latDest, lonDest) {
  const earthRadius = 6371; // earths radius in km
  const dLat = toRadians(latDest - latUser);
  const dLon = toRadians(lonDest - lonUser);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(latUser)) *
      Math.cos(toRadians(latDest)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = earthRadius * c;

  return distance;
}

// helper function to convert degrees to radians for calculations
function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}

// function to update the distance display on the webpage
function updateDistance(userPosition, targetPosition) {
  const distance = calculateDistance(
    userPosition.coords.latitude,
    userPosition.coords.longitude,
    targetPosition.latitude,
    targetPosition.longitude
  );

  // Display the distance on the webpage
  $("#distance").text(`${distance.toFixed(0)} km away`);
}

// Function to handle the geolocation position update
function handlePositionUpdate() {
  if (!hikeData) {
    console.log("Hike data is not loaded yet.");
    return;
  }

  navigator.geolocation.watchPosition(
    // function to update location when hikeData is updated
    (position) => {
      const targetPosition = {
        latitude: parseFloat(hikeData.lat),
        longitude: parseFloat(hikeData.long),
      };

      // Update the distance display
      updateDistance(position, targetPosition);
    },
    handlePositionError,
    {
      enableHighAccuracy: true,
    }
  );
}

function handlePositionError(error) {
  console.error("Error occurred:", error.message);
}
// tracking position start
navigator.geolocation.watchPosition(handlePositionUpdate, handlePositionError, {
  enableHighAccuracy: true,
});
