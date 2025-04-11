import { useEffect, useState } from "react";
import {AnimationControls, motion, TargetAndTransition, VariantLabels} from "framer-motion";
import { useInView } from "react-intersection-observer";

interface VisibilityAnimationProps {
    children: React.ReactNode;
    initial?: TargetAndTransition | VariantLabels | boolean;
    animate?: AnimationControls | TargetAndTransition | VariantLabels | boolean;
    exit?: AnimationControls | TargetAndTransition | VariantLabels | boolean;
    transition?: object;
    className?: string;
}

const VisibilityAnimation = ({
                                 children,
                                 initial = { opacity: 0 },
                                 animate = { opacity: 1 },
                                 exit = { opacity: 0 },
                                 transition = { duration: 0.8, ease: "easeOut" },
                                 className = "",
                             }: VisibilityAnimationProps) => {
    const [inView, setInView] = useState(false);
    const { ref, inView: isInView } = useInView({
        triggerOnce: false, // Keep triggering as it enters and exits
        threshold: 0.1, // Trigger when 10% of the element is visible
    });

    useEffect(() => {
        setInView(isInView);
    }, [isInView]);

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={initial === undefined ? { opacity: 0 } : initial}
            animate={inView ? animate : exit}
            transition={transition}
        >
            {children}
        </motion.div>
    );
};

export default VisibilityAnimation;