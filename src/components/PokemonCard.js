import { capitalize } from "../utils/capitalize";
import StatsList from "./StatsList";

function PokemonCard(props) {
  const { name, sprites, stats } = props.pokemon;

  const imageSrc = sprites.other["official-artwork"]["front_default"];

  return (
    <li className="card light-shadow">
      <h2>{capitalize(name)}</h2>
      <div className="frame square">
        <img src={imageSrc} alt={name} />
      </div>
      <StatsList stats={stats} />
      <div className="grid:center">
        <button className="select-btn">Select</button>
      </div>
    </li>
  );
}

export default PokemonCard;
