import React, { useState } from "react";
import { mappls } from 'mappls-web-maps'


function MapC() {
  const [latitude, setLatitude] = useState(0)
  const [longitude, setLongitude] = useState(0)

  if (navigator.geolocation) {
    navigator.geolocation.watchPosition((position) => {
      setLongitude(position.coords.longitude)
      setLatitude(position.coords.latitude)
    });
  } else {
    console.log("Geolocation is not supported by this browser.")
  }

  const styleMap = { width: '99%', height: '99vh', display: 'inline-block' }
  const mapProps = { center: [28.567396, 77.251571], traffic: false, zoom: 18, geolocation: true, clickableIcons: true }
  var mapObject;
  var mapplsClassObject = new mappls();
  mapplsClassObject.initialize("9756e4ab723995b33a4621b276f7bdc4", () => {
    mapObject = mapplsClassObject.Map({ id: "map", properties: mapProps });


    mapObject.on("load", () => {

      var geoData =
      {
        "type": "FeatureCollection",
        "features":
          [
            {
              "type": "Feature",
              "properties":
              {
                "description": "Pgdav college canteen",
                "icon": "https://i.postimg.cc/R0gBhGQL/B.png",
              },
              "geometry":
              {
                "type": "Point",
                "coordinates": [28.567396, 77.251571]
              }
            },
            {
              "type": "Feature",
              "properties":
              {
                "description": "Volleyball  ground",
                "icon": "https://i.postimg.cc/R0gBhGQL/B.png"
              },
              "geometry":
              {
                "type": "Point",
                "coordinates": [28.5665214, 77.2509104]

              }
            },
            {
              "type": "Feature",
              "properties":
              {
                "description": "Pgdav gym",
                "icon": "https://i.postimg.cc/R0gBhGQL/B.png"
              },
              "geometry":
              {
                "type": "Point",
                "coordinates": [28.5665264, 77.2507012]

              }
            },
            {
              "type": "Feature",
              "properties":
              {
                "description": "Basketball ground",
                "icon": "https://i.postimg.cc/R0gBhGQL/B.png"
              },
              "geometry":
              {
                "type": "Point",
                "coordinates": [28.5680158, 77.2507035]

              }
            },
            {
              "type": "Feature",
              "properties":
              {
                "description": "Air quality index , noise pollution measurement, direction of air",
                "icon": "https://i.postimg.cc/R0gBhGQL/B.png"
              },
              "geometry":
              {
                "type": "Point",
                "coordinates": [28.5679260, 77.2505020]

              }
            },
            {
              "type": "Feature",
              "properties":
              {
                "description": "Pahal by hero motocorp",
                "icon": "https://i.postimg.cc/R0gBhGQL/B.png"
              },
              "geometry":
              {
                "type": "Point",
                "coordinates": [28.5670688, 77.2523249]
              }
            },
            {
              "type": "Feature",
              "properties":
              {
                "description": "New building",
                "icon": "https://i.postimg.cc/R0gBhGQL/B.png"
              },
              "geometry":
              {
                "type": "Point",
                "coordinates": [28.5669661, 77.2521596]

              }
            },
            {
              "type": "Feature",
              "properties":
              {
                "description": "Herbal ground",
                "icon": "https://i.postimg.cc/R0gBhGQL/B.png"
              },
              "geometry":
              {
                "type": "Point",
                "coordinates": [28.5667267, 77.2519598]

              }
            },
            {
              "type": "Feature",
              "properties":
              {
                "description": "Principal office",
                "icon": "",
              },
              "geometry":
              {
                "type": "Point",
                "coordinates": [28.5668547, 77.2515849]
              }
            },
            {
              "type": "Feature",
              "properties":
              {
                "description": "Shor ground",
                "icon": "https://i.postimg.cc/R0gBhGQL/B.png"
              },
              "geometry":
              {
                "type": "Point",
                "coordinates": [28.5664331, 77.2514854]
              }
            },
            {
              "type": "Feature",
              "properties":
              {
                "description": "Choti Canteen",
                "icon": "https://i.postimg.cc/R0gBhGQL/B.png"
              },
              "geometry":
              {
                "type": "Point",
                "coordinates": [28.5665441, 77.2520081]
              }
            },
          ]
      };
      var markerObject = mapplsClassObject.Marker({
        map: mapObject,
        position: geoData,
        clusters: true,
        fitbounds: true,
        width: 50,
        height: 50,
        fitboundOptions:
        {
          padding: 120,
          duration: 1000
        },
        popupOptions:
        {
          offset: { 'bottom': [0, -20] }
        }
      });

    })
  });
  return (
    <>
    <h1 style={{textAlign:"center"}}>PGDAV COLLEGE</h1>
      <div>
        <div id="map" style={styleMap}></div>
      </div>
      <div>
        Latitude : {latitude}
        <br />
        Longitude : {longitude}
      </div>
    </>
  );
}

export default MapC;