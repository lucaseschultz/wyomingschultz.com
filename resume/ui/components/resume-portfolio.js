// noinspection HtmlUnknownAnchorTarget,JSUnusedGlobalSymbols,HtmlUnknownTarget

class ResumePortfolio extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="w3-row-padding transition" id="portfolio">
          <div class='w3-padding-32'>
              <h3
                      class="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16"
                      style="width: 18ch;">
                  Programming Portfolio</h3>
          </div>
          <div>
              <ul>
                  <li>
                      <a
                              href="https://wyomingschultz.com/palindrome-checker/" target="_blank">
                          Palindrome Checker <i class="fa fa-external-link"></i>
                      </a>
                  </li>
                  <li>
                      <a href="https://wyomingschultz.com/roman-numeral-calculator/" target="_blank">
                          Roman Numeral Calculator <i class="fa fa-external-link"></i>
                      </a>
                  </li>
                  <li>
                      <a href="https://wyomingschultz.com/phone-number-validator/" target="_blank">
                          Phone Number Validator <i class="fa fa-external-link"></i>
                      </a>
                  </li>
              </ul>
          </div>
      </div>
      `;
  }
}

customElements.define('resume-portfolio', ResumePortfolio);
