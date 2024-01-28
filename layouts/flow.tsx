import { Navbar } from '@/components/navbar';
import { Link } from '@nextui-org/react';
import React from 'react'
import { Head } from './head';

export default function Flow(
    {
        children
    }: {
        children: React.ReactNode;
    }
) {

    return (<div className="relative flex flex-col h-screen">
            <Head/>
            <Navbar/>
            <main className="container mx-auto max-w-7xl px-6 w-full flex flex-col justify-center items-center">
                {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
                <Link
                    isExternal
                    className="flex items-center gap-1 text-current"
                    href="https://newedge.bt"
                    title="nextui.org homepage"
                >
                    <span className="text-default-600">Powered by</span>
                    <p className="text-primary">New Edge Technologies Pvt. Ltd</p>
                </Link>
            </footer>
        </div>
    )
}