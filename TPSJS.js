// ########### About us Map #############

// Initialize and add the map
function initMap() {
    // The location of my old place in Stony
    const Ontario = { lat: 52.05640827732168, lng: -0.8504520908370468 }; // Home Location 52.05640827732168, -0.8504520908370468
    
    const map = new google.maps.Map(document.getElementById("teamMap"), {
    zoom: 10,
    center: Ontario, // centres on Lakehead
    mapTypeId: "terrain",
    });


    // Marker for Dale

    const DaleLocation = {lat: 123, lng: 123}
    const marker = new google.maps.Marker({
    position: DaleLocation,
    map: map,
    });
    
    const DaleContent = 
    '<div><h2>Dale Langford</h2></div>' +
    '<div>Cartographic Specialist</div>';
    
    const DaleIW = new google.maps.InfoWindow({
        content: DaleContent,
    });
    
    marker.addListener("click", () => {
        DaleIW.open(map, marker)
    });
    
    // Marker for EricMcNeil

    const EMcLocation = {lat: 123, lng: 123} // Get location
    const marker = new google.maps.Marker({
    position: EMcLocation,
    map: map,
    });
    
    const EMcContent = 
    '<div><h2>Eric McNeill</h2></div>' +
    '<div>Cartographic Specialist</div>';
    
    const EMcIW = new google.maps.InfoWindow({
        content: EMcContent,
    });
    
    marker.addListener("click", () => {
        EMcIW.open(map, marker)
    });

    // Eric Millan

    const EMillanLocation = {lat: 123, lng: 123} // Get location
    const marker = new google.maps.Marker({
    position: EMillanLocation,
    map: map,
    });
    
    const EMillanContent = 
    '<div><h2>Eric Millan</h2></div>' +
    '<div>Applications Specialist</div>';
    
    const EMillanIW = new google.maps.InfoWindow({
        content: EMillanContent,
    });
    
    marker.addListener("click", () => {
        EMillanIW.open(map, marker)
    });

    // Gowsigan Sritharan

    const GSLocation = {lat: 123, lng: 123} // Get location
    const marker = new google.maps.Marker({
    position: GSLocation,
    map: map,
    });
    
    const GSContent = 
    '<div><h2>Gowsigan Sritharan</h2></div>' +
    '<div>Applications Specialist</div>';
    
    const GSIW = new google.maps.InfoWindow({
        content: GSContent,
    });
    
    marker.addListener("click", () => {
        GSIW.open(map, marker)
    });
    }