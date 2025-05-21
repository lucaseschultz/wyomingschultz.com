// noinspection HtmlUnknownAnchorTarget,JSUnusedGlobalSymbols,HtmlUnknownTarget

class PortfolioCards extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="w3-row-padding transition" id="portfolio">
        <div class='w3-padding-32'>
          <h3 class="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16" style="width: 18ch;">
            Programming Portfolio
          </h3>
        </div>
        <div class="portfolio-grid">
          <div class="portfolio-item" onclick="window.open('https://wyomingschultz.com/palindrome-checker/', '_blank')">
            <i class="fa fa-external-link portfolio-link-icon"></i>
            <div class="portfolio-content">
              <h4>Palindrome Checker</h4>
              <p>JavaScript app for efficient palindrome validation</p>
              <p><strong>Tech:</strong> JavaScript, HTML, CSS</p>
            </div>
          </div>
          <div class="portfolio-item" onclick="window.open('https://wyomingschultz.com/roman-numeral-calculator/', '_blank')">
            <i class="fa fa-external-link portfolio-link-icon"></i>
            <div class="portfolio-content">
              <h4>Roman Numeral Calculator</h4>
              <p>Interactive decimal/Roman numeral converter</p>
              <p><strong>Tech:</strong> JavaScript, HTML, CSS</p>
            </div>
          </div>
          <div class="portfolio-item" onclick="window.open('https://wyomingschultz.com/phone-number-validator/', '_blank')">
            <i class="fa fa-external-link portfolio-link-icon"></i>
            <div class="portfolio-content">
              <h4>Phone Number Validator</h4>
              <p>Regex-based phone format validation tool</p>
              <p><strong>Tech:</strong> JavaScript, HTML, CSS, RegEx</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('portfolio-cards', PortfolioCards);
