import { CreateKey } from "./CreateKey";
type ListGroupItemProps = {
    Title: string
    List: string[]
}
export default function ListGroupItem({ Title, List }: ListGroupItemProps) {
    return (
        <li className="list-group-item border">
            {Title}
            <ul>
                {List.map((item) => {
                    let key = CreateKey(item);
                    return (
                        <li key={key}>{item}</li>
                    )
                }
                )}
            </ul>
        </li>
    );
}