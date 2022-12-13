type PersonalInfoProps = {
    Address1: string
    Address2: string
    LinkedIn: string
    Email: string
    ImageTitle: string
    Image: string
}

export default function PersonalInfo({ Address1, Address2, LinkedIn, Email, ImageTitle, Image } : PersonalInfoProps) {
    return (
        <div className="d-flex justify-content-between mb-5 mb-lg-0">
            <img src={Image} className="faceImg rounded" title={ImageTitle} alt="" />
            <div className="d-inline-flex list-group justify-content-start">
                <ul className="list-group">
                    <li className="email list-group-item">{Email}</li>
                </ul>
                <ul className="list-group border-0">
                    <li className="list-group-item">
                        {Address1}
                        <br />
                        {Address2}
                    </li>
                </ul>
                <ul className="list-group">
                    <li className="list-group-item">
                        <a href={LinkedIn}>LinkedIn</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}