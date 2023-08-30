import React from 'react'
import './Skills.css'
import PythonSvg from '../svgs/PythonSvg'
import NodeJsSvg from '../svgs/NodeJsSvg'
import TypescriptSvg from '../svgs/TypescriptSvg'
import SQLSvg from '../svgs/SQLSvg'
import ReactSvg from '../svgs/ReactSvg'
import VueJsSvg from '../svgs/VueJsSvg'
import DjangoSvg from '../svgs/DjangoSvg'

const Skills = () => {
    return (
        <div className='container'>
            <h1>
                Skills
            </h1>
            <p className="subheading">
                I can juggle two oranges, bake amazing brownies, and have one three chicken wing eating 
                competitions in one night. Some may say I am a haver of many skills. If I were to list them,
                we would run out of time and space. So instead, I will list the languages and framworks that I 
                am most comfortable with.
            </p>
            <div className="skills">
                <div className='skill-item'>
                    <div className="skill-svg">
                        <PythonSvg />
                    </div>
                    <p>Python</p>
                </div>
                <div className="skill-item">
                    <div className='skill-svg'>
                        <DjangoSvg />
                    </div>
                    <p>Django</p>
                </div>
                <div className='skill-item'>
                    <div className="skill-svg">
                        <VueJsSvg />
                    </div>
                    <p>Vue.js</p>
                </div>
                <div className='skill-item'>
                    <div className="skill-svg">
                        <ReactSvg />
                    </div>
                    <p>React.js</p>
                </div>
                <div className='skill-item'>
                    <div className="skill-svg">
                        <TypescriptSvg />
                    </div>
                    <p>Typescript</p>
                </div>
                <div className='skill-item'>
                    <div className="skill-svg">
                        <NodeJsSvg />
                    </div>
                    <p>Node.js</p>
                </div>
                <div className='skill-item'>
                    <div className="skill-svg">
                        <SQLSvg />
                    </div>
                    <p>SQL</p>
                </div>
            </div>
        </div>
    )
}

export default Skills