import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <footer id="footer">
          <div id="icones-sociais">
            <a href="https://github.com/mateusturola" target="_blank">
              <i class="fab fa-github-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/mateus-turola/" target="_blank">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="https://wa.me/5524988545652" target="_blank">
              <i class="fab fa-whatsapp-square"></i>
            </a>
          </div>
        <p>Desenvolvido por <a href="https://mateusturola.github.io/" target="blank">Mateus Turola</a></p>
        </footer>
    );
  }
}

export default Footer;