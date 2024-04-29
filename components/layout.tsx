import React from 'react'
import Navbar from './navbar'
import Footer from '@/app/(main)/_components/footer'

function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout