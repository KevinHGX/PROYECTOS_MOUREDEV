import transition from "../transition";
import { useState } from "react";

//Icons

import { motion } from "framer-motion";
import SvgComponent from "./svg/SvgComponent";

const style = [{ backgroundColor: `var(--color-select-pink)` }, { color: `var(--color-bg-blue)` }];

function SectionCategory({ setCategory }) {
    const [current, setCurrent] = useState('');
    let Categories = new Map([["Books", 1], ["Films", 2], ["Musicals & Theatres", 3], ["Television", 4],
    ["Video Games", 5], ["Board Games", 6], ["Mythology", 7], ["Sports", 8],
    ["Geography", 9], ["Politics", 10], ["Art", 11], ["Celebrities", 12], ["Animals", 13],
    ["Vehicles", 14], ["Comics", 15], ["Gadgets", 16], ["Anime & Manga", 17], ["Cartoons", 18]]);

    const Category = ({ target, index }) => {

        const handleClickCategory = () => {
            setCategory(index);
            setCurrent((current !== index) ? index : '');
        }

        return (
            <div className="category" style={(current === index) ? style[0] : {}} onClick={handleClickCategory}>
                <h1 id="title-c" style={(current === index) ? style[1] : {}}>{target}</h1>
            </div>
        );
    }

    return (
        <div id="section-category">
            <h1 id="title"> Select the Category </h1>
            <div className="list-category">
                {[...Categories].map(([target, index]) => (
                    <Category key={index} target={target} index={index} />
                ))}
            </div>
        </div>
    );
}

/* ----------------------------------------------------------------------- */

function SectionLevel({ setLevel }) {
    const [current, setCurrent] = useState('');
    const levels = ["Easy", "Medium", "Hard"];

    const Level = ({ target }) => {

        const handleClickLevel = () => {
            setLevel(target);
            setCurrent((current !== target) ? target : '');
        }

        return (
            <div className="level" style={(current === target) ? style[0] : {}} onClick={handleClickLevel}>
                <h1 id="title-l" style={(current === target) ? style[1] : {}}>{target.slice(0, 1)}</h1>
            </div>
        );
    }

    return (
        <div id="section-level">
            <h1 id="title">Levels</h1>
            <div className="list-levels">
                {levels.map((target, index) => (
                    <Level key={index} target={target} />
                ))}
            </div>
        </div>
    );
}

/*------------------------------------------------------*/
const animateText = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 2, ease: "easeOut", delay: 0.2 }
};

const Select = () => {
    const [category, setCategory] = useState('');
    const [level, setLevel] = useState('');

    const handleClickInitGame = () => {
        user.status = true;
    }

    return (
        <>
            <SvgComponent />
            <motion.div className="container-select" variants={animateText} initial="initial" animate="animate" transition={{ duration: 2, ease: "easeOut", delay: 0.2 }}>
                <SectionCategory setCategory={setCategory} />
                <SectionLevel setLevel={setLevel} />
                <button id="btn-iniciar" onClick={handleClickInitGame}>Iniciar</button>
            </motion.div>
        </>
    );
}

const NewSelect = transition(Select);

export default NewSelect;
