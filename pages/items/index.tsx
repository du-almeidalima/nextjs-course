import React, { useEffect, useState } from 'react'
import { Item } from '../api/items'

const Index = () => {
    const [items, setItems] = useState<Item[]>([])

    useEffect(() => {
        fetch('/api/items')
            .then(async (res) => {
                const resItems = await res.json() as Item[]
                setItems(resItems)
            })
            .catch(() => {
                console.log('Houston, we have a...')
            })
    }, [setItems])

    const buildItems = (items: Item[]) => {
        return items.map(i => (
                <li key={i.id}>
                    <b>{i.id}</b> - {i.name}
                </li>
            ),
        )
    }

    return (
        <div className='container'>
            <ul>
                {buildItems(items)}
            </ul>
        </div>
    )
}

export default Index
