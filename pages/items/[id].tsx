import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Item } from '../api/items'

const ItemDetail = () => {
    const router = useRouter()
    const [item, setItem] = useState<Item | null>(null)

    useEffect(() => {
        fetch('/api/items/' + router.query.id)
            .then(async (res) => {
                const resItem = await res.json() as Item
                setItem(resItem)
            })
            .catch(() => {
                console.log('Houston, we have a...')
            })
    }, [router.query.id, setItem])

    return (
        <div className='container'>
            {item ? <span>{item?.id} - {item?.name}</span> : '404 NOT FOUND'}
        </div>
    )
}

export default ItemDetail
