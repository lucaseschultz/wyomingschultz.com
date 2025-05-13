// noinspection HtmlUnknownAnchorTarget,JSUnusedGlobalSymbols,HtmlUnknownTarget

class ContactMe extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="w3-padding-32 transition" id="contact">
        <div class='w3-padding-32'>
            <h3 class="w3-bottombar w3-border-dark-grey w3-padding-16"
                style="width: 9ch; margin-top: 0;">Contact Me</h3>
        </div>
        <div style="margin-top: 0;">
            <ul style="list-style-type: none;">
                <li style="margin-bottom: .3rem;"><a href="tel:3072999958">Phone: (307) 299-9958</a> <i class="fa fa-external-link"></i></li>
                <li>
                  Email: <a href="mailto:lucaseschultz@gmail.com" target="_blank">lucaseschultz@gmail.com</a> <i class="fa fa-external-link"></i>
                </li>
            </ul>
        </div>
      </div>
      `;
  }
}

customElements.define('contact-me', ContactMe);
