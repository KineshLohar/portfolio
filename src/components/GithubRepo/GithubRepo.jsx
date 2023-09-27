import React from "react";
import './githubRepo.css';
import gitRepoList from "./githubRepoList";
import { Link } from "react-router-dom";

const GithubRepo = () => {

    const borderColors = ["#00c853", "#ffd600", "#00b0ff", "#ff9800", "#00E5FF", "#7E57C2", "#D4E157", "#EC407A", "#F44336", "#BCAAA4", "#EA80FC"];

    return (
        <section id="github">
            <h1 className="githubHeading">
                Github Repositories
            </h1>
            <div className="gitRepoList">

                {
                    gitRepoList.map((repo, index) => {

                        const randomColor = borderColors[Math.floor(Math.random() * borderColors.length)];

                        return (
                            <Link to={repo.repoUrl} style={{cursor:"pointer"}}>
                                <div className="gitBar" key={index} style={{ borderLeft: `6px solid ${randomColor}` }}>
                                    <h3>{repo.repoName}</h3>
                                    <p>{repo.techStack}</p>
                                </div>  
                            </Link>
                            
                        )
                    })
                }
            </div>
        </section>
    )
}

export default GithubRepo;