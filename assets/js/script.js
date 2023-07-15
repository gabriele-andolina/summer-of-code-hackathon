const hikingIcon = document.createElement("img");
hikingIcon.src = "assets/images/hiking-icon.png";
hikingIcon.classList.add("marker");

async function initMap() {
    // const codeInstitute = { lat: 53.298621297843354, lng: -6.178393105375929 };
    // const map = new google.maps.Map(document.getElementById("map"), {
    //     zoom: 12,
    //     center: codeInstitute,
    // });
    // const marker = new google.maps.Marker({
    //     position: codeInstitute,
    //     map: map,
    // });

    // const irishTown = new google.maps.Marker({
    //     position: { lat: 53.33757053883488, lng: -6.219446177987027 },
    //     map: map,
    //     icon: "./images/hiking-icon.png",
    // });

    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const map = new Map(document.getElementById("map"), {
        center: { lat: 53.298621297843354, lng: -6.178393105375929 },
        zoom: 13,
        mapId: "4504f8b37365c3d0",
    });

    const marker = new AdvancedMarkerElement({
        map,
        position: { lat: 53.298621297843354, lng: -6.178393105375929 },
        content: hikingIcon,
    });
}

initMap();
