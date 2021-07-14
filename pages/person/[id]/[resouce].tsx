import React from 'react'
import { useRouter } from 'next/router'

const PersonDetailResourceIndex = () => {
    const router = useRouter()

    console.log('person/[id]/[resource] >> %o', router.query)

    return (
        <div className='container'>
            This is the Person Detail index page
        </div>
    )
}

export default PersonDetailResourceIndex
