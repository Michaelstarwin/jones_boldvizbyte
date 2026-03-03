import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, PerspectiveCamera, MeshDistortMaterial, Stars, Text, Html } from '@react-three/drei';
import * as THREE from 'three';

// --- 3D Components ---

function techMaterial() {
    return new THREE.MeshStandardMaterial({
        color: "#00f3ff",
        roughness: 0.2,
        metalness: 0.8,
        emissive: "#00f3ff",
        emissiveIntensity: 0.2
    });
}

function DigitalCore() {
    const meshRef = useRef();
    const outerRef = useRef();

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.4;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.6;
        }
        if (outerRef.current) {
            outerRef.current.rotation.x = -state.clock.getElapsedTime() * 0.2;
            outerRef.current.rotation.z = state.clock.getElapsedTime() * 0.1;
        }
    });

    return (
        <Float speed={4} rotationIntensity={1} floatIntensity={1}>
            {/* Core */}
            <mesh ref={meshRef}>
                <icosahedronGeometry args={[1.5, 0]} />
                <MeshDistortMaterial
                    color="#00f3ff"
                    envMapIntensity={2}
                    clearcoat={1}
                    clearcoatRoughness={0}
                    metalness={0.9}
                    roughness={0.1}
                    distort={0.4} // Lively distortion
                    speed={2}
                />
            </mesh>

            {/* Outer Wireframe Cage */}
            <mesh ref={outerRef} scale={[1.8, 1.8, 1.8]}>
                <dodecahedronGeometry args={[1, 0]} />
                <meshBasicMaterial color="#bc13fe" wireframe transparent opacity={0.3} />
            </mesh>
        </Float>
    );
}

function FlyingParticles() {
    const points = useRef();

    useFrame((state) => {
        if (points.current) {
            points.current.rotation.y = state.clock.getElapsedTime() * 0.05;
            points.current.rotation.x = state.clock.getElapsedTime() * 0.02;
        }
    });

    return (
        <points ref={points}>
            <sphereGeometry args={[8, 64, 64]} />
            <pointsMaterial size={0.03} color="#ffffff" transparent opacity={0.6} sizeAttenuation />
        </points>
    );
}

// --- Main Component ---

const LoadingScreen = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [bootText, setBootText] = useState("INITIALIZING...");

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress(prev => {
                // Ensure it reaches 100% reasonably fast but feels "loading"
                let next = prev + Math.random() * 8;

                // Text stages based on progress
                if (next > 20 && next < 40) setBootText("LOADING_ASSETS...");
                if (next > 40 && next < 70) setBootText("ESTABLISHING_UPLINK...");
                if (next > 70 && next < 90) setBootText("CONFIGURING_INTERFACE...");
                if (next > 90) setBootText("SYSTEM_READY.");

                if (next >= 100) {
                    clearInterval(timer);
                    setTimeout(onComplete, 800); // Wait a bit at 100%
                    return 100;
                }
                return next;
            });
        }, 120);

        return () => clearInterval(timer);
    }, [onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden"
            exit={{
                opacity: 0,
                transition: { duration: 1, ease: "easeInOut" } // Smooth fade out
            }}
        >
            {/* 3D Scene Layer */}
            <div className="absolute inset-0 z-0">
                <Canvas gl={{ antialias: true, toneMapping: THREE.ReinhardToneMapping }} dpr={[1, 2]}>
                    <PerspectiveCamera makeDefault position={[0, 0, 8]} />

                    {/* Lighting */}
                    <ambientLight intensity={0.5} />
                    <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f3ff" />
                    <pointLight position={[-10, -10, -10]} intensity={1.5} color="#bc13fe" />
                    <spotLight position={[0, 10, 0]} intensity={1} angle={0.5} penumbra={1} color="#ffffff" />

                    {/* Objects */}
                    <DigitalCore />
                    <FlyingParticles />
                    <Stars radius={150} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
                </Canvas>
            </div>

            {/* UI Overlay Layer */}
            <div className="relative z-10 flex flex-col items-center justify-center w-full h-full pointer-events-none">

                {/* Center Content */}
                <div className="mt-[30vh] md:mt-[35vh] text-center">
                    <h1 className="text-4xl md:text-6xl font-orbitron font-black text-white tracking-widest relative drop-shadow-[0_0_20px_rgba(0,243,255,0.6)]">
                        <span className="relative z-10">BOLD<span className="text-neon-blue">VIZ</span>BYTE</span>
                    </h1>

                    {/* Progress Bar & Text */}
                    <div className="mt-8 w-72 md:w-96 mx-auto">
                        <div className="flex justify-between text-[10px] md:text-xs font-mono text-neon-blue/80 mb-2 tracking-widest">
                            <motion.span
                                key={bootText}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                {bootText}
                            </motion.span>
                            <span>{Math.round(progress)}%</span>
                        </div>

                        <div className="h-1.5 w-full bg-white/5 border border-white/10 rounded-full overflow-hidden p-[1px]">
                            <motion.div
                                className="h-full bg-gradient-to-r from-neon-blue via-cyan-400 to-neon-purple shadow-[0_0_10px_#00f3ff]"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            />
                        </div>
                    </div>
                </div>

                {/* Footer Deco */}
                <div className="absolute bottom-10 left-10 text-[9px] md:text-[10px] text-white/30 font-mono hidden md:block">
                    RENDER_ENGINE: WEBGL 2.0<br />
                    LATENCY: 12ms<br />
                    STATUS: OPTIMAL
                </div>
            </div>

            {/* Vignette / Grain Overlay for cinematic feel */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] z-[1] pointer-events-none opacity-80" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] z-[1] pointer-events-none" />

        </motion.div>
    );
};

export default LoadingScreen;
