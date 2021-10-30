import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <div id="footer">
          <div id="icones-sociais">
            <a href="https://github.com/mateusturola" target="blank">
              <i className="fab fa-github-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/mateus-turola/" target="blank">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://wa.me/5524988545652" target="blank">
              <i className="fab fa-whatsapp-square"></i>
            </a>
          </div>
        <p>Desenvolvido por <a href="https://mateusturola.github.io/" target="blank">Mateus Turola</a></p>
        </div>
    );
  }
}

export default Footer;