// noinspection HtmlUnknownAnchorTarget,JSUnusedGlobalSymbols,HtmlUnknownTarget

class ResumeFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="footer-container w3-padding-32 w3-center">

        <a role="button" href="#" class="nav-to-top-button w3-margin"><i
                class="fa fa-arrow-up w3-margin-right"></i>To the top</a>

        <div class="w3-xlarge w3-section">
            <div>
                <a href="https://www.linkedin.com/in/lucas-schultz-a92958151" title="Lucas Schultz' LinkedIn"
                   target="_blank" class="w3-hover-text-blue"><i class="fa fa-brands fa-linkedin fa-lg"></i></a>
                <a href="https://github.com/lucaseschultz" title="Lucas Schultz' GitHub"
                   target="_blank" class="w3-hover-text-blue"><i class="fa fa-brands fa-github fa-lg"></i></a>
            </div>
        </div>
      </footer>
      `;
  }
}

customElements.define('resume-footer', ResumeFooter);
