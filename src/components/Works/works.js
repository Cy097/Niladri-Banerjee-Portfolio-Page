import React from 'react';
import './works.css';
import Portfolio1 from "../../assets/work1.png";
import Portfolio2 from "../../assets/work2.png";
import Portfolio3 from "../../assets/work3.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="workTitle">My projects</h2>
      <span className="workDesc">filler here</span>
      <div className="worksImgs">
        <img src={Portfolio1} alt="" className="worksImg" />
        <img src={Portfolio2} alt="" className="worksImg" />
        <img src={Portfolio3} alt="" className="worksImg" />
        </div>
      <a href="https://github.com/Cy097?tab=repositories" target="_blank" rel="noopener noreferrer">
      <button className="workBTN">See More</button>
      </a>
    </section>
  );
}

export default Works;