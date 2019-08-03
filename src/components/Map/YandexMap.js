import { YMaps, Map, Placemark } from 'react-yandex-maps';
import React from "react";
// import 'Map.css'

function YandexMap(props) {
    const {lat, lng} = props.data.locationsCoords;
  return(
      <YMaps>
          <div>
              <Map defaultState={{center: [lat, lng], zoom: 15, }}>
                  <Placemark geometry={[lat, lng]}/>
              </Map>
          </div>
      </YMaps>
  )
}
export default YandexMap
