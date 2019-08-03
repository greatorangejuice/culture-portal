import { YMaps, Map, Placemark } from 'react-yandex-maps';
import React from "react";
import './Map.css'

function YandexMap(props) {
    const {lat, lng} = props.data.locationsCoords;
  return(
          <div className="map">
              <h5>Значимое место</h5>
              <YMaps>
                  <Map defaultState={{center: [lat, lng], zoom: 15,}}>
                      <Placemark geometry={[lat, lng]}/>
                  </Map>
              </YMaps>
          </div>
  )
}
export default YandexMap
