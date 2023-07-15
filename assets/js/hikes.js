
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
        // json loaded successfully. now populate the elements on the modal. find active card 
        // first find current Carousel index 
        let activeCard = document.querySelector('[data-active]')
        let carouselIndex = $(activeCard).index()

        // update the heading and text 
        // This number is chosen depending on the Carousel card that is currently selected. 
        $('#hike-heading').text(data[carouselIndex].name)
        $('#hike-description').text(data[carouselIndex].description)
    })
       
}