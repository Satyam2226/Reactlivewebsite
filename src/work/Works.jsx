import React, { useEffect, useState } from 'react';
import { projectsData, projectsNav } from "./Data";
import WorkItems from './WorkItems';

const Works = () => {
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [projects, setProjects] = useState([]);
    const [active, setActive] = useState(0);

    useEffect(() => {
        if (selectedFilter === 'all') {
            setProjects(projectsData);
        } else {
            const filteredProjects = projectsData.filter(project => project.category === selectedFilter);
            setProjects(filteredProjects);
        }
    }, [selectedFilter]);

    const handleFilterClick = (filterName, index) => {
        setSelectedFilter(filterName);
        setActive(index);
    };

    return (
        <div>
            <div className='work__filters'>
                {projectsNav.map((item, index) => (
                    <span
                        key={index}
                        className={`work__item ${active === index ? 'active' : ''}`}
                        onClick={() => handleFilterClick(item.name, index)}
                    >
                        {item.name}
                    </span>
                ))}
            </div>

            <div className='work__container container grid'>
                {projects.map(project => (
                    <WorkItems item={project} key={project.id} />
                ))}
            </div>
        </div>
    );
}

export default Works;
