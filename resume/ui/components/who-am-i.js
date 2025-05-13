// noinspection HtmlUnknownAnchorTarget,JSUnusedGlobalSymbols,HtmlUnknownTarget

class WhoAmI extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="w3-row-padding transition" id="about">
        <div class="w3-padding-32">
          <span class="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16">Who I Am</span>
        </div>
        <div>
          <p>
            Financially & operationally driven professional  •  Software Engineer  •  2+ years experience <!-- Started May 2023 -->
          </p>
        </div>
      </div>
    `;
  }
}

customElements.define('who-am-i', WhoAmI);
