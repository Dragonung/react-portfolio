function Footer(props) {
    return (
        <footer>
            <Container className="footer">
                <Row>
                    <ul className="footer-icons">
                        <li className="social-icons">
                            <a href="https://github.com/Dragonung"
                                target="_blank"
                            >
                    /*insert Github icon*/
                            </a>
                        </li>
                        <li className="social-icons">
                            <a href="https://www.linkedin.com/in/daniel-chen-100/"
                                target="_blank"
                            >
                    /*insert LinkedIn icon*/
                            </a>
                        </li>
                        <li className="social-icons">
                            <a href="https://www.instagram.com/dchenerate/"
                                target="_blank">
                    /*insert Instagram icon*/
                            </a>
                        </li>
                    </ul>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;