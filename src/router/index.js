import React from "react"
import Index from "@/pages/Index"
import Test from "@/pages/Test"

const routes = [
    {
        path: '/',
        name: '首页',
        element: <Index />
    },
    {
        path: '/test',
        name: 'Demo',
        element: <Test />
    }
]

export default routes