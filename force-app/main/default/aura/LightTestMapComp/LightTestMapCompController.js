({
    jsLoaded: function (component, event, helper) {
        var map = L.map('map', {zoomControl: false}).setView([41.31805658029149, -96.11388146970849], 14);
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
            {
                attribution: 'Tiles © Esri'
            }).addTo(map);
        component.set("v.map", map);
    }
})