//Json data array to allow deployment on github pages
const hikeJson = [
  {
    name: "Ticknock",
    lat: "53.255716553795814",
    long: "-6.2510793852498505",
    date: "Jul 22, 2023",
    time: "2pm",
    km: 10,
    duration: "2 hours",
    intensity: "Moderate",
    description:
      "A great network of walking trails through forests and mountains with incredible views of the greater Dublin area from the top of Three Rock Mountain.",
  },
  {
    name: "Tibradden",
    lat: "53.242979844676746",
    long: "-6.294514045563979",
    date: "Jul 29, 2023",
    time: "2pm",
    km: 2.5,
    duration: "1.5 hours",
    intensity: "Easy",
    description:
      "A stroll through an absurdly green forest followed by a hike up the mountain to the cairn at the summit.",
  },
  {
    name: "Howth Cliff",
    lat: "53.38961204534314",
    long: "-6.071991282868927",
    date: "Aug 05, 2023",
    time: "2pm",
    km: 12,
    duration: "3 hours",
    intensity: "Moderate",
    description:
      "One of the tougher walks in Howth, which takes in everything from Howth Hill and Red Rock Beach to Bailey Lighthouse and more.",
  },
  {
    name: "Djouce",
    lat: "53.15585306091994",
    long: "-6.188564839539633",
    date: "Aug 12, 2023",
    time: "2pm",
    km: 8,
    duration: "2 hours",
    intensity: "Easy",
    description:
      "A great pick if you’re in the mood for stretching your legs and want to get treated to some deadly views of Great Sugarloaf, Maulin, and the Powerscourt Waterfall.",
  },
  {
    name: "Sugarloaf",
    lat: "53.144508111702116",
    long: "-6.154635143215563",
    date: "Aug 19, 2023",
    time: "2pm",
    km: 10,
    duration: "2 hours",
    intensity: "Moderate",
    description:
      "The longer of two walks around and up the Great Sugarloaf Mountain. On clear days, it’s possible to see all the way 150km across the Irish Sea!",
  },
  {
    name: "Ballinastoe Forest",
    lat: "53.1026255627096",
    long: "-6.254810200706456",
    date: "Aug 26, 2023",
    time: "2pm",
    km: 5,
    duration: "1.5 hours",
    intensity: "Easy",
    description:
      "Looking a bit like a scene from Lord of the Rings, the Ballinastoe Forest short trail offers a boardwalk and the view from the JB Malone Memorial.",
  },
];
let userPositionAvailable = false;
let hikeData;
let distances = [];
// trigger to populate hike info information with current hike on load
$(".carousel-button").click(() => {
  updateHikeInformation();
});

function updateHikeInformation() {
  // find the index of the carousel item that is active
  let activeCard = document.querySelector("[data-active]");
  let carouselIndex = $(activeCard).index();

  // update the heading and text

  // On modal items
  $("#hike-heading").text(hikeJson[carouselIndex].name);
  $("#hike-description").text(hikeJson[carouselIndex].description);

  // On picture items
  $("#hike-name").text(hikeJson[carouselIndex].name);
  $("#hike-date").text(hikeJson[carouselIndex].date);
  $("#hike-time").text(`Start: ${hikeJson[carouselIndex].time.toUpperCase()}`);
  $("#hike-intensity").text(`Intensity: ${hikeJson[carouselIndex].intensity}`);
  $("#hike-km").text(`Trail Length: ${hikeJson[carouselIndex].km} km `);
  $("#hike-duration").text(`Est Time: ${hikeJson[carouselIndex].duration}`);

  //check if userPosition is available, if not display placeholder
  if (userPositionAvailable) {
    $("#hike-distance").text(`${hikeJson[carouselIndex].distance} km away`);
  } else {
    $("#hike-distance").text("Loading distance...");
  }

  // Save data of current slide in global variable, including index
  hikeData = {
    ...hikeJson[carouselIndex],
  };
  hikeData.index = carouselIndex;
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

// function to calculate distance form user to all of the
// hiking trails.
function calculateAllDistances(userPosition) {
  distances = hikeJson.map((hike) => {
    const targetPosition = {
      latitude: parseFloat(hike.lat),
      longitude: parseFloat(hike.long),
    };
    const distance = calculateDistance(
      userPosition.coords.latitude,
      userPosition.coords.longitude,
      targetPosition.latitude,
      targetPosition.longitude
    );

    // Update the 'distance' property in hikeJson with the calculated distance
    hike.distance = distance.toFixed(0);
  });
  //userposition data available, update info again
  userPositionAvailable = true;
  updateHikeInformation();
}

// error handler for geolocation
function handlePositionError(error) {
  console.error("Error occurred:", error.message);
}

// tracking position start
navigator.geolocation.watchPosition(
  calculateAllDistances,
  handlePositionError,
  {
    enableHighAccuracy: true,
  }
);
