import ListGroup from "./ListGroup";

export default function Skills() {
    let LanguageSkills = ["Java", "C/C++", "JavaScript", "HTML", "CSS", "C#"]
    let PrimarySkills = [".Net", "Unity3D", "NodeJS", "MongoDB", "Github", "Windows OS"]
    let SecondarySkills = ["Forklift", "Electric Pallet Jack", "Scissor Lift", "Order Picker"]
    return (
        <div className="mt-5">
            <h2 className="d-flex justify-content-center">Skills</h2>
            <div className="d-flex justify-content-center">
                <div className="d-lg-inline gap-3 d-flex align-items-start">
                    <ListGroup List={LanguageSkills} />
                    <ListGroup List={PrimarySkills} />
                    <ListGroup List={SecondarySkills} />
                </div>
            </div>
        </div>
    );
}