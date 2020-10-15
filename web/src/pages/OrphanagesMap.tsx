import React from 'react';
import mapMarkImg from '../images/map-marker.svg';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import '../styles/pages/orphanages-map.css'
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function OrphanagesMapp(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkImg} alt="Happy" />
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>

                <footer>
                    <strong>Florianopolis</strong>
                    <span>Santa Catarina</span>
                </footer>
            </aside>

            <Map center={[-27.5998783,-48.5487406]}
             zoom={15} 
             style={{
                 width: "100%",
                 height: "100%"
             }}
             >
                <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/outdoors-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
            </Map>

            <Link to="" className="create-orphanage">
                <FiPlus size={32} color='#fff' />
            </Link>
        </div>
    )
}

export default OrphanagesMapp;