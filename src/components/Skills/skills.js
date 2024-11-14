import React from 'react';
import './skills.css';
import Debugger from '../../assets/bug.png';
import Programmer from '../../assets/coding.png';
import IDEDev from '../../assets/IDEDev.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I am good at</span>
        <span className="skillDesc">
            I am a skilled programmer and know my way around JavaScript, React, Python, and basic HTML.
        </span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={Debugger} alt="Debugger" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Debugger</h2>
                    <p>I try to find the best way to fix the errors easily and quickly so that the work progress goes on and on without a limit break</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={Programmer} alt="Programmer" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Programmer</h2>
                    <p>Writing stable code snippets and building fluent and responsive webapplications.<br/> Iam good in Python Java Reactjs & css</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={IDEDev} alt="IDEDev" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Development</h2>
                    <p>Developing efficient mobile applications web applications and lightweight desktop applications using flutter and kotlin and Python (pygame)</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills;
