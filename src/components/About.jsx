
import { motion } from "framer-motion";

const About = () => {
    return(
        <motion.section
            id="about"
            className="p-10 min-h-screen bg-base-100 text-base-content transition-colors duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
                <div className="flex flex-col items-center md:items-end md:pr-16 lg:pr-32 h-full w-full">
                    <h2 className="text-6xl font-bold mb-4 text-center md:text-right w-full">About Me</h2>
                    <div className="h-1 w-28 mb-4 bg-primary rounded-full transition-colors duration-500"></div>
                    <p className="max-w-2xl text-lg md:text-xl text-base-content text-center md:text-right font-poppins">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                    </p>
                    <br/>
                    <p className="max-w-2xl text-lg md:text-xl text-base-content text-center md:text-right font-poppins">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                    </p>
                    
                </div>
        </motion.section>
    );
}

export default About;