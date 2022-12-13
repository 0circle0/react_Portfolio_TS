import BoxGroupItems from "./BoxGroupItems"
import ListGroupItem from "./ListGroupItem"
export default function WorkExperience() {
    let WalMartJob = [
        "January 2012 - October 2017",
        "Inventory Control Specialist",
        "Customer service, Machine Operator, Trainer, Backroom",
        "Multiple Associate of the Month awards"
    ]

    let ComputerTechJob = [
        "Febuary 2012 - September 2015",
        "Computer and Electronics Repair",
        "Repaired computers and electronics for customers in the local area of Twin Lakes WI."
    ]

    let AmazonJob = [
        "September 2017 - January 2018",
        "Ambassador, Manager, Pace Coach, Trainer",
        "#1 for my department across all shifts for 3 months."
    ]

    let SpriteCreatorJob = [
        "August 1 2011 - July 22 2022",
        "Computer Programmer, UI Designer, Java/C#/JavaScript Developer, Unity3D Developer, Customer Service",
        "SpriteCreator3 VX Released for free on Sept 2011 in Java.",
        "SpriteCreator3 XP Released for free on Dec 2011 in Java.",
        "SpriteCreator3 LPC Released for free on Aug 2018 in Unity3D C#.",
        "Dice Released on itch.io for sale and free browser WebGL June 2021.",
        "SpriteCreator3 VX, XP, LPC All in One Released on itch.io for sale Aug 2021."
    ]

    let TarusMediaJob = [
        "January 12 2015 - May 12 2022",
        "Java Software Developer",
        "Developed internal prototype applications not released to the public"
    ]

    let SecuritasJob = [
        "May 18 2022 - August 1 2022",
        "California Licensed Security Officer"
    ]

    let SAICJob = [
        "July 22 2022 - Current",
        "Associate Software Engineer",
        "Developed an internal project using Blazor .NET Framework, Azure Dev-Ops, MS SQL, with Unit Testing"
    ]

    return (
        <BoxGroupItems Title="Experience">
            <ListGroupItem List={SAICJob} Title="SAIC Technology Integration Gateway" />
            <ListGroupItem List={SecuritasJob} Title="Securitas USA" />
            <ListGroupItem List={TarusMediaJob} Title="Taurus Media LLC" />
            <ListGroupItem List={SpriteCreatorJob} Title="Sprite Creator By CircleWorks" />
            <ListGroupItem List={AmazonJob} Title="Amazon" />
            <ListGroupItem List={ComputerTechJob} Title="Computer Technician" />
            <ListGroupItem List={WalMartJob} Title="Wal-Mart" />
        </BoxGroupItems>
    );
}