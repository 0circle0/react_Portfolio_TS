import BoxGroupItems from "./BoxGroupItems";
import ListGroupItem from "./ListGroupItem";
export default function Education() {
    let HighSchool = ["Kenosha Unified, Kenosha WI", "Graduation with DIploma December 2002"];
    return (
        <BoxGroupItems Title="Education">
            <ListGroupItem List={HighSchool} Title="High School" />
        </BoxGroupItems>
    );
}
