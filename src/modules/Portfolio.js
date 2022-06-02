import {useState} from 'react';
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

function Portfolio({projects}) {
  const [selected, select] = useState('All');
  const projectsAll = projects.filter(project => {
    if (selected === 'All') {
      return true;
    }

    return project.category  === selected;
  });

  return (
    <>
      <Toolbar 
        filters={["All", "Websites", "Flayers", "Business Cards"]}
        selected={selected}
        onSelectFilter={(filter) => {select(filter)}}
      />
      <ProjectList projects={projectsAll} />
    </>
  );
}

export default Portfolio;