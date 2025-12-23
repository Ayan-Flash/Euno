import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const BlurText = ({
    text = '',
    delay = 0.2,
    className = '',
    animateBy = 'words', // 'words' or 'letters'
    direction = 'top', // 'top' or 'bottom'
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const elements = animateBy === 'words' ? text.split(' ') : text.split('');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1, delayChildren: delay }
        }
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            filter: 'blur(10px)',
            y: direction === 'top' ? -20 : 20
        },
        visible: {
            opacity: 1,
            filter: 'blur(0px)',
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" }
        }
    };

    return (
        <motion.span
            ref={ref}
            className={className}
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ display: 'inline-flex', flexWrap: 'wrap', gap: animateBy === 'words' ? '0.25em' : '0em' }}
        >
            {elements.map((el, i) => (
                <motion.span key={i} variants={itemVariants} style={{ display: 'inline-block' }}>
                    {el === ' ' ? '\u00A0' : el}
                </motion.span>
            ))}
        </motion.span>
    );
};

export default BlurText;
