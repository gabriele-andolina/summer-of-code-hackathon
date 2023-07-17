// LOADS THE MAP JS LIBRARY BY DYNAMIC IMPORT
((g) => {
    var h,
        a,
        k,
        p = "The Google Maps JavaScript API",
        c = "google",
        l = "importLibrary",
        q = "__ib__",
        m = document,
        b = window;
    b = b[c] || (b[c] = {});
    var d = b.maps || (b.maps = {}),
        r = new Set(),
        e = new URLSearchParams(),
        u = () =>
            h ||
            (h = new Promise(async (f, n) => {
                await (a = m.createElement("script"));
                e.set("libraries", [...r] + "");
                for (k in g)
                    e.set(
                        k.replace(/[A-Z]/g, (t) => "_" + t[0].toLowerCase()),
                        g[k]
                    );
                e.set("callback", c + ".maps." + q);
                a.src = `https://maps.${c}apis.com/maps/api/js?` + e;
                d[q] = f;
                a.onerror = () => (h = n(Error(p + " could not load.")));
                a.nonce = m.querySelector("script[nonce]")?.nonce || "";
                m.head.append(a);
            }));
    d[l]
        ? console.warn(p + " only loads once. Ignoring:", g)
        : (d[l] = (f, ...n) => r.add(f) && u().then(() => d[l](f, ...n)));
})({
    key: "AIzaSyDZPlAee3BfrvukuuGg6dkQF3-ODG0cV8s",
    v: "weekly",
    // Use the 'v' parameter to indicate the version to use (weekly, beta, alpha, etc.).
    // Add other bootstrap parameters as needed, using camel case.
});

// ADDS CUSTOMISED HIKING ICON
const hikingIcon = document.createElement("img");
hikingIcon.src = "assets/images/hiking-icon.png";
hikingIcon.classList.add("marker");

// INITIALISES AND SHOWS THE MAP
let map;

async function initMap() {
    // This needs to be updated dynamically based on user location.
    const position = { lat: 53.298621281198805, lng: -6.176633558510968 };
    // Request needed libraries.
    //@ts-ignore
    const { Map, InfoWindow } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement, PinElement } =
        await google.maps.importLibrary("marker");

    map = new Map(document.getElementById("map"), {
        zoom: 9,
        center: position,
        mapId: "DEMO_MAP_ID",
    });

    const meetUps = [
        {
            position: { lat: 53.255716553795814, lng: -6.2510793852498505 },
            title: "Ticknock",
            date: "22/07/2023",
        },
        {
            position: { lat: 53.242979844676746, lng: -6.294514045563979 },
            title: "Tibradden",
            date: "29/07/2023",
        },
        {
            position: { lat: 53.38961204534314, lng: -6.071991282868927 },
            title: "Howth Cliff",
            date: "05/08/2023",
        },
        {
            position: { lat: 53.15585306091994, lng: -6.188564839539633 },
            title: "Djouce",
            date: "12/08/2023",
        },
        {
            position: { lat: 53.144508111702116, lng: -6.154635143215563 },
            title: "Sugarloaf",
            date: "19/08/2023",
        },
        {
            position: { lat: 53.1026255627096, lng: -6.254810200706456 },
            title: "Ballinastoe Forest",
            date: "26/08/2023",
        },
    ];

    const infoWindow = new InfoWindow();

    // Create the markers.
    meetUps.forEach(({ position, title, date }, i) => {
        const pin = new PinElement({
            glyph: `${i + 1}`,
        });
        const marker = new AdvancedMarkerElement({
            position,
            map,
            title: `${i + 1}. ${title} - ${date}`,
            content: pin.element,
        });

        // Add a click listener for each marker, and set up the info window.
        marker.addListener("click", ({ domEvent, latLng }) => {
            const { target } = domEvent;

            infoWindow.close();
            infoWindow.setContent(marker.title, marker.date);
            infoWindow.open(marker.map, marker);
        });
    });
}

initMap();
