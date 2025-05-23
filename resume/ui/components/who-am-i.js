// noinspection HtmlUnknownAnchorTarget,JSUnusedGlobalSymbols,HtmlUnknownTarget

class WhoAmI extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="about">
        <div class="component-header-container transition">
          <span class="component-header w3-xlarge">Who I Am</span>
        </div>
        <p class="transition">
          Software Engineer • Problem Solver • 2+ Years Experience
        </p>
      </div>
    `;
  }
}

customElements.define('who-am-i', WhoAmI);
