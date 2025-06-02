// noinspection HtmlUnknownAnchorTarget,JSUnusedGlobalSymbols,HtmlUnknownTarget

class ContactMe extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="w3-padding-32 transition" id="contact">
        <div class='component-header-container'>
            <h3 class="component-header"
                style="width: 9ch; margin-top: 0;">Contact Me</h3>
        </div>
        <div style="margin-top: 0;">
            <ul style="list-style-type: none;">
                <li style="margin-bottom: .3rem;">Phone: <a href="tel:3072999958">(307) 299-9958 <i class="fa fa-external-link"></i></a></li>
                <li>
                  Email: <a href="mailto:lucaseschultz@gmail.com" target="_blank">lucaseschultz@gmail.com <i class="fa fa-external-link"></i></a>
                </li>
            </ul>
        </div>
      </div>
      `;
  }
}

customElements.define('contact-me', ContactMe);
