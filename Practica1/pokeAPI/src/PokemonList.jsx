import React from "react";
import PokemonCard from "./PokemonCard";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';


function PokemonList(props) {

  return (
  <>
    
    <div className="div-whole-left">
      {props.loading  ? "Loading......." :
        props.pokedata.map(pokedata => {
          return <PokemonCard
            key={pokedata.name}
            pokeid={pokedata.id}
            pokeimg={pokedata.sprites.other.dream_world.front_default}
            pokename={pokedata.name}
          />
        }
        )}

    </div>
  </>
  );
}

export default PokemonList;

