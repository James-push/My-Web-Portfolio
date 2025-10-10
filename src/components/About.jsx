
import { motion } from "framer-motion";
import { fadeIn } from "../variant";

const About = () => {
    return(
        <motion.section
            id="about"
            className="px-4 sm:px-6 md:px-10 py-10 min-h-screen bg-base-100 text-base-content transition-colors duration-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <div className="flex flex-col items-center md:items-end md:pr-8 lg:pr-32 h-full w-full">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-center md:text-right w-full">About Me</h2>
                <div className="h-1 w-16 sm:w-20 md:w-28 mb-4 bg-primary rounded-full transition-colors duration-500 mx-auto md:ml-auto md:mr-0"></div>
                <p className="max-w-md sm:max-w-lg md:max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-base-content text-center md:text-right font-poppins">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                </p>
                <br/>
                <p className="max-w-md sm:max-w-lg md:max-w-2xl text-sm sm:text-base md:text-lg lg:text-xl text-base-content text-center md:text-right font-poppins">
                    Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.
                </p>
            </div>
        </motion.section>
    );
}

export default About;