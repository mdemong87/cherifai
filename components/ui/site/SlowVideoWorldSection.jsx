"use client";
import { useEffect, useRef } from "react";

export default function SlowVideoSection() {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = 0.5; // 0.5 = half speed, 1 = normal, 2 = double speed
        }
    }, []);

    return (
        <section className="relative w-full h-[500px] flex items-center justify-center overflow-hidden -translate-y-[-12.5%]">
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-fit object-cover"
            >
                <source
                    src="https://res.cloudinary.com/dg83pvgls/video/upload/v1761566322/globe2_rroqae.mp4"
                    type="video/mp4"
                />
            </video>

            <div className="absolute inset-0 bg-black/40" />
        </section>
    );
}
