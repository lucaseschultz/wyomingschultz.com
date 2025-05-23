// noinspection HtmlUnknownAnchorTarget,JSUnusedGlobalSymbols,HtmlUnknownTarget

class PortfolioCards extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="portfolio">
        <div class='component-header-container transition'>
          <h3 class="component-header" style="width: 18ch;">
            Programming Portfolio
          </h3>
        </div>
        <div class="portfolio-grid">
          <div class="portfolio-item transition" onclick="window.open('https://wyomingschultz.com/palindrome-checker/', '_blank')">
            <i class="fa fa-external-link portfolio-link-icon"></i>
            <div class="portfolio-content">
              <h4>Palindrome Checker</h4>
              <p>JavaScript app for efficient palindrome validation</p>
              <p><strong>Tech:</strong> JavaScript, HTML, CSS</p>
            </div>
          </div>
          <div class="portfolio-item transition" onclick="window.open('https://wyomingschultz.com/roman-numeral-calculator/', '_blank')">
            <i class="fa fa-external-link portfolio-link-icon"></i>
            <div class="portfolio-content">
              <h4>Roman Numeral Calculator</h4>
              <p>Interactive decimal/Roman numeral converter</p>
              <p><strong>Tech:</strong> JavaScript, HTML, CSS</p>
            </div>
          </div>
          <div class="portfolio-item transition" onclick="window.open('https://wyomingschultz.com/phone-number-validator/', '_blank')">
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
