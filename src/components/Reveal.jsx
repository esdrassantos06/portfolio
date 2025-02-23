import { motion, useInView, useAnimation } from "motion/react";
import { useRef, useEffect } from "react";

// eslint-disable-next-line react/prop-types
export const Reveal = ({ children }) => {

    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) {
            controls.start("visible");
        }
    }, [controls, isInView]);

    return (
        <div ref={ref} className="relative h-full w-full">
            <motion.div
            variants={{
                hidden: {opacity: 0, y: 75},
                visible: {opacity: 1, y: 0}
            }}
            initial="hidden"
            animate={controls}
            transition={{duration: 0.5, delay: 0.25}}
            >{children}</motion.div>
        </div>
    );
}