import React from 'react'
import { projectsAtom } from '../../main'
import { useAtom } from 'jotai'
import Card from '../../components/Card'

const HomePage: React.FC = () => {
    const [projects] = useAtom(projectsAtom)

    return (
        <div>
            homePage
            <div>
                {projects.map((project, idx) => (
                    // <div key={'project' + idx}>
                    //     <div className=" ">{project.name}</div>
                    // </div>
                    <Card project={project} key={'project' + idx}/>
                ))}
            </div>
        </div>
    )
}

export default HomePage
