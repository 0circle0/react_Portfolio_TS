import UnorderedList from "./UnorderedList";

export default function Qualifications() {
    let QualificationList = ["Strong technical aptitude with exceptional talent in training and personal development.",
        "Outstanding interpersonal and communication skills with ability to listen and respond appropriately to technical questions.",
        "Ability to function effectively as a team player as well as individually to achieve objectives.",
        "Very efficient individual who is able to meet and exceed deadlines while also maintaining a very high level of work quality.",
        "Types at a rate of over 60 words per minute while maintaining a high level of accuracy.",
        "Possesses a great imagination that allows for the development and implementation of alternate and more efficient solutions.",
        "Focused on WCAG 2.1 compliance"]
    return (
        <UnorderedList List={QualificationList} Title="Summary of Qualifications" />
    );
}