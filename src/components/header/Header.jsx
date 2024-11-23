function Header(props) {
    return (
        <header>
            <Container classname="header">
                <Row>
                    <h1>Daniel Chen</h1>
                    <Container classname="navigation">
                        <a className="link" href="#aboutme">About Me</a>
                        <a className="link" href="#portfolio">Portfolio</a>
                        <a className="link" href="#contactme">Contact Me</a>
                        <a className="link" href="#resume">Resume</a>
                    </Container>
                </Row>
            </Container>
        </header>
    );
}

export default Header;