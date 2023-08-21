import React from 'react'
import { HomePage } from './homepage'
import { Booking } from './booking'
import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'


export const Main = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomePage />
        },
        {
            path: '/booking',
            element: <Booking />
        }
    ])
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}
