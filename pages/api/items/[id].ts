import type { NextApiRequest, NextApiResponse } from 'next'
import DATA from '../../../data.json'
import { Item } from './index'

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Item | string>,
) {

    const item = DATA.find(i => i.id === +req.query.id)

    item ? res.status(200).json(item)
        : res.status(404).send('NOT FOUND')

}
