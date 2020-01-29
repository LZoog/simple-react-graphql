import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";

const GET_CHARACTERS = gql`
  query getCharacters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

function Characters() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);
  if (error) {
    return <div>Error</div>;
  }

  if (loading) {
    return (
      <div className="App">
        <h2>Loading...</h2>
      </div>
    );
  }
  if (data && data.characters.results.length > 0) {
    return (
    <div className="characters">
        {data.characters.results.map(({name, image, id}) => (
        <div key={id} className="character">
            <img src={image} alt={name} />
            <p>{name}</p>
        </div>
        ))}
    </div>
    );
  }
}

export default Characters;
