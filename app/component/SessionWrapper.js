"use client"
import { SessionProvider } from "next-auth/react"

import React from 'react'

const SessioWrapper = ({ children }) => {
    return (


        <SessionProvider >
            {children}
        </SessionProvider>


    )
}

export default SessioWrapper
