import React, { useState } from 'react';
import './skills.css';
import skillsList from './skills';

const Skills = ({ skills }) => {
    const [selectedSkills, setSelectedSkills] = useState(Array(skillsList.length).fill(false));

    const handleSkillClick = (index) => {
      // Create a copy of the selectedSkills array to modify it
      const updatedSelectedSkills = [...selectedSkills];
      // Toggle the selected state for the clicked skill
      updatedSelectedSkills[index] = !updatedSelectedSkills[index];
      setSelectedSkills(updatedSelectedSkills);

    };
    
    const borderColors = ["#00c853", "#ffd600", "#00b0ff", "#ff9800", "#00E5FF", "#7E57C2", "#D4E157", "#EC407A", "#F44336", "#BCAAA4", "#EA80FC"];


  return (
    <section id='skills'>
        <h1 className="skillTitle">Skills</h1>
        <div className="skillBars">
        {
                skillsList.map((skill, index)=>{

                    const randomColor = borderColors[Math.floor(Math.random() * borderColors.length)];

                    return (
                        <div key={index}
                        onClick={() => handleSkillClick(index)}
                        className={selectedSkills[index] ? 'skillBar selected' : 'skillBar'}
                        style={{ borderLeft: `4px solid ${randomColor}` }}
                        >
                            <h2>{skill.title}</h2>
                            {selectedSkills[index] && (
                                <p>{skillsList[index].description}</p>
                            )}
                        </div>
                    )
                })
            }
        </div>

      {/* <ul>
        {skills.map((skill, index) => (
          <li
            key={index}
            onClick={() => handleSkillClick(index)}
            className={index === selectedSkill ? 'selected' : ''}
          >
            {skill.name}
          </li>
        ))}
      </ul>
      {selectedSkill !== null && (
        <p className="skill-description">{skills[selectedSkill].description}</p>
      )} */}
    </section>
  );
};

export default Skills;
