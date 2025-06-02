// noinspection HtmlUnknownAnchorTarget,JSUnusedGlobalSymbols

class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav class="nav-bar-container">
        <div class="nav-bar">
            <div class="nav-bar-button-container">
                <a role="button" href="#about" class="nav-bar-button">About</a>
            </div>
            <div class="nav-bar-button-container">
                <a role="button" href="#skills" class="nav-bar-button">Skills</a>
            </div>
            <div class="nav-bar-button-container">
                <a role="button" href="#portfolio" class="nav-bar-button">Portfolio</a>
            </div>
            <div class="nav-bar-button-container">
                <a role="button" href="#education" class="nav-bar-button">Education</a>
            </div>
            <div class="nav-bar-button-container">
                <a role="button" href="#experience" class="nav-bar-button">Experience</a>
            </div>
            <div class="nav-bar-button-container">
                <a role="button" href="#contact" class="nav-bar-button">Contact</a>
            </div>
        </div>
    </nav>
      `;

    this.removeUrlOnNav();
  }

  removeUrlOnNav() {
    const navButtons = this.querySelectorAll('.nav-bar-button');

    navButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = button.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}

customElements.define('nav-bar', NavBar);
