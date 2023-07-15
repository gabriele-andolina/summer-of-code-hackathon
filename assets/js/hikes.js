
// trigger to populate modal information with current hike 
$('#btn-show-modal').click( () => {
    updateHikeInformation()
})

// trigger to populate modal information with current hike 
function updateHikeInformation() {
    // load the information about hike into JS object
    fetch("../../data/hikes.json").then( (response) => {
        return response.json()
    })
    .then( (data) => {
        // json loaded successfully. now populate the elements on the modal 
        console.log(data)
        console.log(data[0].name)
        // update the heading . Currently just for the first Hike.
        // This number should be chosen depending on the Carousel card that is currently selected. 
        // Will have to fix this in the next commit.
        $('#hike-heading').text(data[0].name)
        $('#hike-description').text(data[0].description)
    })
       
}