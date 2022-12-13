import Paragraphs from "../components/Paragraphs";

const About = () => {
    document.title = "About Me";

    let AboutMe = [`Self taught programmer using books, stackoverflow.com, API Docs, and youtube videos. 
    My first language was QBASIC creating simple programs and giving more lives in Nibbles and Gorillas. 
    My first games were created with Allegro and C/C++ at 16.`,

        `I released my first application August 1 2013 called Sprite Creator 3. 
    It was a free to use and share application that was created using Java Swing. 
    It started as a learning Java project that later was recreated with Unity3D. 
    Sprite Creator 3 has over 300k downloads in 100+ countries as the free version using Java. 
    The recreated Unity3D version was put on itch.io for purchase in 2020.`,

        `Later Unity3D and NodeJS Server/Client games became my passion. 
    I started to focus on backend services around 2020 during the pandemic learning Client side prediction, 
    Server validation, Input Validation, Credential validation, Session validation, Account creation, 
    Email verification, Credential validation, State Machines, Rollback and History`];

    let Languages = ["C#, JavaScript, HTML, CSS, SQL, Java, C/C++"]
    let Technologies = ["Azure DevOps, Microsoft SQL Server, Visual Studio, Rider, Unity3D, MongoDB, NodeJS"]
    let Frameworks = [".Net, Blazor/Razor, Java Swing, React"]
    return (
        <>
            <Paragraphs Title="About Me" Data={AboutMe} />
            <Paragraphs Title="Languages" Data={Languages} CenterData={true} />
            <Paragraphs Title="Technologies" Data={Technologies} CenterData={true} />
            <Paragraphs Title="Frameworks" Data={Frameworks} CenterData={true} />
        </>
    );
}

export default About;