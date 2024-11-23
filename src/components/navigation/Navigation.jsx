import { useState, useEffect } from 'react';
import Header from '../header/Header';
import Project from '../project/Project';

function aboutMe() {
    return (
        <Card className="aboutme">
            <p style={{ textAlight: "justify" }}>
                My name is Daniel Chen. I enjoy puzzles and various games as my hobbies in order to be effective
                and succeed. In my professional field, I am currently in business as an accountant/bookkeeper.
                I am currently attending a coding bootcamp in order to not only expand on professional and learning
                skills, but also accomplish feats that I can look back on and be proud of.
            </p>
        </Card>
    )
};

function Contact() {
    return (

    )
};

function Navigation() {
    const [Nav, setNav] = useState([]);

    const addNav = (item) => {

        const newNavigation = [item, ...Nav];
        console.log(newNavigation);

        setNav(newNavigation);
    };

    useEffect(() => {
        const [projects, getProjects] = useState([]);
        //div w/ Github link, get
    }, []);

    return (
        <div className = "container">
            <Navigation results={Nav} />
        </div>
    );
};

export default Navigation;