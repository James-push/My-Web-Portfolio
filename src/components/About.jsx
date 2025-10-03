
import { motion } from "framer-motion";

const About = () => {
    return(
        <motion.section
            id="about"
            className="p-10 min-h-screen bg-base-100 text-base-content border-t border-base-300 transition-colors duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <h2 className="text-6xl font-bold mb-6 text-center">About Me</h2>
            <div className="w-20 h-1 bg-primary rounded-full mt-2 mb-8 mx-auto"></div>
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-500 dark:text-neutral-300 text-center font-poppins transition-colors duration-500">
                Write about yourself here...
            </p>
        </motion.section>
    );
}

export default About;