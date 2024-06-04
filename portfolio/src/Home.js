import './Styles.css'

import mucsin2 from './images/mucsin2.jpeg';

function Home() {
    return (
        <main className="home">
            <img src={mucsin2} alt="profilepic" className="home--profile-pic"/>
            <h1 className="home--title">I am Mucsin</h1>
            <h4 className="home--description">
                A junior developer, I write clean, maintainable code, assist in debugging and testing, 
                and collaborate on new features and bug fixes, all while learning and improving my skills.
            </h4>
        </main>
    );
}

export default Home;
