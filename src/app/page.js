'use client';
import Lenis from '@studio-freight/lenis'
import Footer from "@/components/Footer";
import { useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion';
import Preloader from "@/components/Preloader";
import Projects from '../components/Projects';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);


    useEffect( () => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    useEffect(() => {
        setTimeout( () => {
            setIsLoading(false);
            document.body.style.cursor = 'default'
            window.scrollTo(0,0);
          }, 2000)
    }, [])

    return (
        <main className="">
            <AnimatePresence mode='wait'>
                {isLoading && <Preloader />}
            </AnimatePresence>
            <div className="h-[100vh]">
                <div className="h-full bg-black flex justify-center items-center">
                    <h1 className="text-8xl text-white">Scroll</h1>
                </div>
            </div>
            <div className="h-[100vh]">
                <div className="h-full bg-white flex justify-center items-center">
                    <h1 className="text-8xl text-black">Happy Birthday</h1>
                </div>
            </div>

            <div className="h-[100vh]">
                <div className="h-full bg-black flex justify-center items-center">
                    <h1 className="text-8xl text-white">P O O C H A</h1>
                </div>
            </div>
            
            
            <div className="h-fit ">
                <div className="h-full w-full bg-white  justify-center items-center">
                    <h1 className="text-8xl text-black">Happy Birthday</h1>
                <Projects />
                </div>
            </div>
            <div className="h-[100vh]">
                <div className="h-full bg-black flex justify-center items-center">
                    <h1 className="text-8xl text-white">P O O C H A</h1>
                </div>
            </div>
            
            <Footer />
        </main>
    );
}