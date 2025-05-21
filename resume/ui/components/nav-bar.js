// noinspection HtmlUnknownAnchorTarget,JSUnusedGlobalSymbols

class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav class="w3-top">
        <div class="w3-row w3-large w3-light-grey header">
            <div class="w3-col">
                <a role="button" href="#about" class="navbar-button">About</a>
            </div>
            <div class="w3-col">
                <a role="button" href="#skills" class="navbar-button">Skills</a>
            </div>
            <div class="w3-col">
                <a role="button" href="#portfolio" class="navbar-button">Portfolio</a>
            </div>
            <div class="w3-col">
                <a role="button" href="#education" class="navbar-button">Education</a>
            </div>
            <div class="w3-col header-last-row">
                <a role="button" href="#experience" class="navbar-button">Experience</a>
            </div>
            <div class="w3-col header-last-row">
                <a role="button" href="#contact" class="navbar-button">Contact</a>
            </div>
        </div>
    </nav>
      `;
  }
}

customElements.define('nav-bar', NavBar);
