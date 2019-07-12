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
    [ 21.14, 79.09 ],
    [ 21.17,79.14 ],
    [ 21.6, 79.00 ],
    [ 21.14, 79.09 ]
  ]
    let poly=polyline.encode(locationArray)


     let polyDecoded=polyline.decode(poly);
     let pathLoc=[];
      polyDecoded.map(stop => {
             pathLoc.push({lat:stop[0],lng:stop[1]})                                  
             });     
      const markers=pathLoc.map((element)=>{
          return <Marker position={element}></Marker>
      })
      let distanceArray=[];
      for(let i=0;i<locationArray.length;i++){
        if(i+1!==locationArray.length)
        distanceArray[i]=geodist({lat:locationArray[i][0],lon:locationArray[i][1]},{lat:locationArray[i+1][0],lon:locationArray[i+1][1]})
        else{
          distanceArray[i]=geodist({lat:locationArray[0][0],lon:locationArray[0][1]},{lat:locationArray[i][0],lon:locationArray[i][1]})
        }
      }
      // const DirectionsService = new window.google.maps.DirectionsService();
      // DirectionsService.route({
      //   origin: new window.google.maps.LatLng(41.8507300, -87.6512600),
      //   destination: new window.google.maps.LatLng(41.8525800, -87.6514100),
      //   travelMode: window.google.maps.TravelMode.DRIVING,
      // }, (result, status) => {
      //   if (status === window.google.maps.DirectionsStatus.OK) {
      //     console.log(result)
      //   } else {
      //     console.error(`error fetching directions ${result}`);
      //   }
      // });
    return (
        <GoogleMap
          defaultZoom={4}
          center={ { lat:  20.59, lng: 78.96 } }
          >
              {markers}
              <Polyline
                    path={pathLoc}
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


