import { CreateKey } from "./CreateKey";

type ParagraphsProps = {
    Title: string
    Data: string[]
    CenterData?: boolean
}
export default function Paragraphs({ Title, Data, CenterData = false } : ParagraphsProps) {
    
    let items = Data.map((item) => {
        let key = CreateKey(item);
        return (
            <p key={key}>{item}</p>
        )
    });
    return (
        <div className="w-75 m-auto mb-1 border p-3">
            <div className={`d-flex flex-column ${(CenterData === true ? " align-items-center" : "")}`}>
                <h1 className="text-center">{Title}</h1>
                {items}
            </div>
        </div>
    );
}