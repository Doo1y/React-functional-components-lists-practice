import { moves } from './data';
import PokeMoveCard from './PokeMoveCard';

export default function PokeMoves() {
    return (
        <div>
            <h1>
                PokeMoves
            </h1>
            <ul>
                {moves.map((x) => (
                    <PokeMoveCard key={x.id} {...x}/>
                ))}
            </ul>
        </div>
    )
}