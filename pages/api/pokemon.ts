import {NextApiRequest, NextApiResponse} from "next";

interface Pokemon {
    id: number;
    name: string;
    type: string;
    power: number;
}

const allPokemon: Pokemon[] = [
    {
        id: 1,
        name: "Bulbasaur",
        type: "Grass",
        power: 100
    },
    {
        id: 2,
        name: "Charmander",
        type: "Fire",
        power: 100
    },
    {
        id: 3,
        name: "Squirtle",
        type: "Water",
        power: 100
    },
    {
        id: 4,
        name: "Pikachu",
        type: "Electric",
        power: 100
    },
    {
        id: 5,
        name: "Eevee",
        type: "Normal",
        power: 100
    },
    {
        id: 6,
        name: "Mew",
        type: "Psychic",
        power: 100
    },
    {
        id: 7,
        name: "Mewtwo",
        type: "Psychic",
        power: 100
    },
    {
        id: 8,
        name: "Snorlax",
        type: "Normal",
        power: 100
    },
    {
        id: 9,
        name: "Gengar",
        type: "Ghost",
        power: 100
    },
    {
        id: 10,
        name: "Moltres",
        type: "Fire",
        power: 100
    },
    {
        id: 11,
        name: "Zapdos",
        type: "Electric",
        power: 100
    },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json([...allPokemon])
}