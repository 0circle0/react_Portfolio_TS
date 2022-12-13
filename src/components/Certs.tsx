import BoxGroupItems from "./BoxGroupItems";
import ListGroupItem from "./ListGroupItem";

const Certs = () => {
    return (
        <BoxGroupItems Title="Certifications">
            <ListGroupItem List={["Expires 10/17/2025"]} Title="Security+ 601" />
        </BoxGroupItems>
    );
}

export default Certs;