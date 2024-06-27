import { useContext } from "react";
import { UserContext } from "../App";
import transition from "../transition";
import SvgComponent from "./svg/SvgComponent";
import { motion } from "framer-motion";

const animateText = {
    initial: { opacity: 0, y: -70 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 2, ease: "easeOut", delay: 0.2 }
};

const Home = () => {

    const user = useContext(UserContext);

    const handleClickInitGame = () => {
        user.status = true;
    }

    return (
        <>
            <SvgComponent />
            <div id="container-home">
                <motion.h1 id="title" variants={animateText} initial="initial" animate="animate" transition={{ duration: 2, ease: "easeOut", delay: 0.2 }} >
                    Qui<motion.span>z</motion.span>fy
                </motion.h1>
                <motion.div className="description" variants={animateText} initial="initial" animate="animate" transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}>
                    <p>Bienvenido a Quizify Elige tu temática y nivel de dificultad.</p>
                    <h3>¡Comienza a jugar!</h3>
                </motion.div>
                <motion.button id="btn-random" onClick={handleClickInitGame} whileTap={{ scale: 0.8 }}>Random</motion.button>
            </div>
        </>
    );
}

const NewHome = transition(Home);

export default NewHome;
