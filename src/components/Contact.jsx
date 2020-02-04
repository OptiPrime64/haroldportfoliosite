import React from "react";

function Contact() {
    const year = new Date().getFullYear();
    return (
        <footer id="sectioncontact">

            <a class="footer-item fab fa-twitter" href="https://twitter.com/harold_vol_3"></a>
            <a class="footer-item fab fa-linkedin" href="https://www.linkedin.com/in/harold-jennett/"></a>
            <a class="footer-item fas fa-envelope" href="mailto:haroldjennett@outlook.com"></a>

            <p>Copyright ⓒ {year}</p>
        </footer>
    );
}

export default Contact;
