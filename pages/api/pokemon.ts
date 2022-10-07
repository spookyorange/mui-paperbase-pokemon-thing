import {NextApiRequest, NextApiResponse} from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json([{id: 1, name: 'Pikachu'}, {id: 2, name: 'Bulbasaur'},
    {id: 3, name: 'Charmander'}, {id: 4, name: 'Squirtle'}, {id: 5, name: 'Caterpie'},
    {id: 6, name: 'Weedle'}, {id: 7, name: 'Pidgey'}, {id: 8, name: 'Rattata'},
    {id: 9, name: 'Spearow'}, {id: 10, name: 'Ekans'}, {id: 11, name: 'Pikachu'},
    {id: 12, name: 'Sandshrew'}, {id: 13, name: 'Nidoran'}, {id: 14, name: 'Nidoran'},
    {id: 15, name: 'Clefairy'}, {id: 16, name: 'Vulpix'}, {id: 17, name: 'Jigglypuff'},
])
}