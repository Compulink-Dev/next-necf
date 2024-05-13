import React from 'react'
import Navbar from './navbar'
import Footer from '@/app/(main)/_components/footer'
import MainHero from '@/app/(main)/_components/mainhero'

function MainLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
            <MainHero />
            {children}
            <Footer />
        </div>
    )
}

export default MainLayout