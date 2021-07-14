import React from 'react'
import { useRouter } from 'next/router'

const PersonDetailIndex = () => {
    const router = useRouter()

    console.log('person/[id] >> %o', router.query)

    return (
        <div className='container'>
            This is the Person Detail index page
        </div>
    )
}

export default PersonDetailIndex
