type BoxGroupProps = {
    Title: string
    children: React.ReactNode
}

const BoxGroupItems = ({ Title, children }: BoxGroupProps) : JSX.Element => {
    return (
        <div className="mt-5 mb-5">
            <h2 className="d-flex justify-content-center">{Title}</h2>
            <div className="d-flex justify-content-center">
                <ul className="list-group gap-1 w-75" >
                    {children}
                </ul>
            </div>
        </div>
    );
}

export default BoxGroupItems;