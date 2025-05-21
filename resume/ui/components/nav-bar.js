// noinspection HtmlUnknownAnchorTarget,JSUnusedGlobalSymbols

class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav class="nav-bar-container">
        <div class="nav-bar w3-row w3-large w3-light-grey header">
            <div class="w3-col">
                <a role="button" href="#about" class="nav-bar-button">About</a>
            </div>
            <div class="w3-col">
                <a role="button" href="#skills" class="nav-bar-button">Skills</a>
            </div>
            <div class="w3-col">
                <a role="button" href="#portfolio" class="nav-bar-button">Portfolio</a>
            </div>
            <div class="w3-col">
                <a role="button" href="#education" class="nav-bar-button">Education</a>
            </div>
            <div class="w3-col header-last-row">
                <a role="button" href="#experience" class="nav-bar-button">Experience</a>
            </div>
            <div class="w3-col header-last-row">
                <a role="button" href="#contact" class="nav-bar-button">Contact</a>
            </div>
        </div>
    </nav>
      `;
  }
}

customElements.define('nav-bar', NavBar);
