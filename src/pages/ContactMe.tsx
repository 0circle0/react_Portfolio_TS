const ContactMe: React.FC = ():JSX.Element => {
    document.title = "Contact Me";
    return (
        <div className="container w-auto-75-33 text-center p-3 shadow-sm">
            <h3>Contact Me</h3>
            <form target="_blank" action="https://formsubmit.co/e8b687c7d61729756583878447522e19" method="POST">

                <div className="col p-1">
                    <input type="text" name="name" className="form-control" placeholder="Name" required />
                </div>

                <div className="col p-1">
                    <input type="email" name="email" className="form-control" placeholder="Email" required />
                </div>

                <div className="p-1">
                    <textarea name="message" className="form-control" placeholder="Message" maxLength={288} rows={3} required />
                </div>

                <div className="visually-hidden">
                    <input type="text" name="_captcha" defaultValue="false" />
                    <input type="text" name="_honey" />
                </div>

                <button type="submit" className="btn btn-lg btn-primary btn-block mt-3">Send</button>

            </form>
        </div>

    );
}

export default ContactMe;