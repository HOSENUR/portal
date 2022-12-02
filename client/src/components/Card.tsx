import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEthereum } from '@fortawesome/free-brands-svg-icons'
export default function Card() {
    return (
        <div className='border p-5 w-[30rem] rounded border'>
            <FontAwesomeIcon icon={faEthereum} className='text-5xl' />
        </div>
    )
}
