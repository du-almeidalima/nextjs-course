import React from 'react'
import { useRouter } from 'next/router'

const BlogPost = () => {
    const router = useRouter()

    console.log('blob/[...slug] >> %o', router.query)

    return (
        <div className="container">Blog Post pages</div>
    )
}

export default BlogPost
