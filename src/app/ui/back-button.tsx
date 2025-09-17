'use client'

import React from 'react'
import { useRouter } from 'next/navigation';


const BackButton = () => {
        const router = useRouter();
  return (
    <button onClick={() => router.back()}>Go Back</button>
  )
}

export default BackButton