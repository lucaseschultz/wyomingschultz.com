// noinspection HtmlUnknownAnchorTarget,JSUnusedGlobalSymbols,HtmlUnknownTarget

class ResumePortfolio extends HTMLElement {
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
          <div class="portfolio-item">
            <h4>Palindrome Checker</h4>
            <p>JavaScript app for efficient palindrome validation</p>
            <p><strong>Tech:</strong> JavaScript, HTML, CSS</p>
            <a href="https://wyomingschultz.com/palindrome-checker/" target="_blank" class="portfolio-link">
              View Project <i class="fa fa-external-link"></i>
            </a>
          </div>
          <div class="portfolio-item">
            <h4>Roman Numeral Calculator</h4>
            <p>Interactive decimal/Roman numeral converter</p>
            <p><strong>Tech:</strong> JavaScript, HTML, CSS</p>
            <a href="https://wyomingschultz.com/roman-numeral-calculator/" target="_blank" class="portfolio-link">
              View Project <i class="fa fa-external-link"></i>
            </a>
          </div>
          <div class="portfolio-item">
            <h4>Phone Number Validator</h4>
            <p>Regex-based phone format validation tool</p>
            <p><strong>Tech:</strong> JavaScript, HTML, CSS, RegEx</p>
            <a href="https://wyomingschultz.com/phone-number-validator/" target="_blank" class="portfolio-link">
              View Project <i class="fa fa-external-link"></i>
            </a>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('resume-portfolio', ResumePortfolio);
