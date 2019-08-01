import React, { Component } from "react"
import { compose } from "recompose"
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
  Polyline
} from "react-google-maps"
import polyline from 'google-polyline'
import geodist from 'geodist'

//This Map returns A map with polyline  and markers
const Map = compose(withGoogleMap((props) =>{
  let locationArray=[
    [21.33,79.5],
  [ 21.14, 79.09 ],
  [ 21.17,79.14 ],
  [ 21.6, 79.00 ],
  ]
    let poly=polyline.encode(locationArray)


     let polyDecoded=polyline.decode(poly);
     let pathLoc=[],pathLocs;
      polyDecoded.map(stop => {
             pathLoc.push({lat:stop[0],lng:stop[1]})                                  
             });     
      const markers=pathLoc.map((element)=>{
          return <Marker position={element}></Marker>
      })
      
    return (
        <GoogleMap
          defaultZoom={4}
          center={ { lat:  20.59, lng: 78.96 } }
          >
              {markers}
              <Polyline
                    path={pathLocs}
                    geodesic={true}
                    options={{
                                    strokeColor: "#ff2527",
                                    strokeOpacity: 0.75,
                                    strokeWeight: 2,
                                    icons: [
                                        {
                                            offset: "0",
                                            repeat: "20px"
                                        }
                                    ]
                                }}
                            />
        </GoogleMap>
      );
    }
  ))
  
  export default Map;


