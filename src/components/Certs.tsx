import BoxGroupItems from "./BoxGroupItems";
import ListGroupItem from "./ListGroupItem";

export default function Certs() {
    return (
        <BoxGroupItems Title="Certifications">
            <ListGroupItem List={["Expires 10/17/2025"]} Title="Security+ 601" />
        </BoxGroupItems>
    );
}