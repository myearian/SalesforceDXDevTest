({
    jsLoaded: function (component, event, helper) {

        var map = L.map('map', {zoomControl: true}).setView([41.31805658029149, -96.11388146970849], 14);
        L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}',
            {
                attribution: 'Tiles © Esri'
            }).addTo(map);
        L.marker([41.31805658029149, -96.11388146970849]).addTo(map)
            .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            .openPopup();
        component.set("v.map", map);
        component.set('v.cols', [{label: 'Name', fieldName: 'name', type: 'text'},
            {label: 'Address', fieldName: 'address', type: 'text'},
            {label: 'Phone', fieldName: 'phone', type: 'phone'}]);
        component.set('v.data', [{
            id: '1',
            name: 'Jack Test',
            address: '2600 Dodge St. Omaha NE',
            phone: '4025556565'
        },
            {id: '2', name: 'Nick Test', address: '7928 Ontario St. Omaha NE', phone: '4025556565'},
            {id: '3', name: 'John Test', address: '10347 Center St Omaha NE', phone: '4025556565'},
            {id: '4', name: 'Jane Test', address: '9103 Hanover ST Omaha NE', phone: '4025556565'}]);
    },
    
    updateMap: function (component, event) {
        var map = component.get("v.map");
        L.marker([31.31805658029149, -96.11388146970849]).addTo(map)
            .bindPopup('A new pop up wooooooo.<br> Easily customizable.')
            .openPopup();
        component.set("v.map", map);
    }
})