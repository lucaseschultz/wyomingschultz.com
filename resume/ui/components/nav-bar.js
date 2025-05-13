// noinspection HtmlUnknownAnchorTarget

class NavBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <nav class="w3-top">
        <div class="w3-row w3-large w3-light-grey header">
            <div class="w3-col">
                <a role="button" href="#about" class="w3-button">About</a>
            </div>
            <div class="w3-col">
                <a role="button" href="#skills" class="w3-button">Skills</a>
            </div>
            <div class="w3-col">
                <a role="button" href="#portfolio" class="w3-button">Portfolio</a>
            </div>
            <div class="w3-col">
                <a role="button" href="#education" class="w3-button">Education</a>
            </div>
            <div class="w3-col header-last-row">
                <a role="button" href="#experience" class="w3-button">Experience</a>
            </div>
            <div class="w3-col header-last-row">
                <a role="button" href="#contact" class="w3-button">Contact</a>
            </div>
        </div>
    </nav>
      `;
  }
}

customElements.define('NavBar', NavBar);
