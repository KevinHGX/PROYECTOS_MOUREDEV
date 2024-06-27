import { motion } from "framer-motion";

const Logo = () => { 
    return (<>
        <motion.div id="container-logo" initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} 
            transition={{duration: 1, ease: "easeIn"}}>
            <h1 id="logo-transition"> QY </h1>
        </motion.div>
    </>)
}

const transition = (OComponent) => {
    //antes de mostrar el nuevo contenido, realizamos la animaciones
    return () => (
        <>
            <OComponent/>
            <motion.div style={{zIndex:6}} className="slide-in"
                initial={{scaleY:0}}
                animate={{scaleY:0}}
                exit={{scaleY:1}}
                transition={{ duration:2, ease:[0.22,1,0.36,1] }}
            ><Logo/></motion.div>
            <motion.div style={{zIndex:6}} className="slide-out"
                initial={{scaleY:1}}
                animate={{scaleY:0}}
                exit={{scaleY:0}}
                transition={{ duration:2, ease:[0.22,1,0.36,1] }}
            ><Logo/></motion.div>
        </>
    );
}

export default transition;