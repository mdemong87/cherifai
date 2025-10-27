'use client'


import Container from "@/components/layout/sitelayout/Container";
import { gsap } from "gsap";
import { Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { BsStars } from "react-icons/bs";
import deashboardImage from "../../../public/deashboardImage.png";


const Hero = () => {


    const boxRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(boxRef.current, { scale: 0 }, { scale: 1, duration: 2 });
    }, []);



    return (

        <section className="min-h-screen w-screen relative">
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `
        radial-gradient(125% 125% at 50% 10%, #040717 40%, #006777ff 80%)
      `,
                    backgroundSize: "100% 100%",
                    zIndex: -1,
                }}
            />
            {/* Your Content/Components */}

            <Container>
                <div className="flex items-center flex-col h-screen w-full justify-start text-white z-20 text-2xl font-bold pt-[150px]
                ">
                    <div className="text-center space-y-6 translate-y-[-20%]" >
                        <div className="flex items-center justify-center w-full">

                            <h2 data-aos="fade-up" className="text-gray-300 text-sm font-normal border border-gray-500 rounded-full px-4 py-1 w-fit flex items-center relative">
                                {/* <div className="absolute inset-0 rounded-2xl border-gradient"></div> */}
                                <BsStars className="brandColor text-lg herostartAnimation" />
                                <span>&nbsp; Powered by <span className="brandColor">CherifAI</span></span>
                            </h2>
                        </div>
                        <h1 data-aos="fade-up" className="text-gray-100 text-4xl sm:text-5xl font-bold leading-tight">
                            AI-Powered Real Estate Assistant <br className="hidden sm:block" />
                            <span className="">for Smarter, Faster Deals</span>
                        </h1>

                        <p data-aos="fade-up" className="text-lg max-w-lg text-gray-500 text-center mx-auto">
                            CherifAI helps agents, brokers, and investors analyze deals,
                            generate leases, and discover funding opportunities —
                            all powered by GPT-4 and real-time market data.
                        </p>

                        <div className="flex justify-center md:justify-start gap-4">

                            <div data-aos="zoom-out-up" className="flex w-full items-center justify-center ">
                                <Link
                                    href="/dashboard"
                                    className="btn mt-3 px-4 py-2 rounded-lg font-semibold shadow brandBg transition text-[17px] flex items-center gap-2"
                                >
                                    <Sparkles className="h-4 w-4 herostartAnimation" />
                                    Get Started
                                </Link>
                            </div>

                        </div>
                    </div>

                    <div className="w-full h-full border-gradient p-0.5 rounded-xl max-w-6xl shadow-lg" data-aos="zoom-in">
                        <Image className="h-full w-full object-cover object-top  rounded-xl" src={deashboardImage} alt="logo" width={1000} height={1000} />
                    </div>
                </div>
            </Container>

        </section>
    )
}

export default Hero;