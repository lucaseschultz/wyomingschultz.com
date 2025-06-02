// noinspection HtmlUnknownAnchorTarget,JSUnusedGlobalSymbols,HtmlUnknownTarget

class ResumeFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <footer class="footer-container">

        <a role="button" href="#" class="nav-to-top-button"><i
                class="fa fa-arrow-up footer-up-icon"></i>To the top</a>

        <div class="social-nav-container">
            <div>
                <a href="https://www.linkedin.com/in/lucas-schultz-a92958151" title="Lucas Schultz' LinkedIn"
                   target="_blank"><i class="fa fa-brands fa-linkedin fa-lg"></i></a>
                <a href="https://github.com/lucaseschultz" title="Lucas Schultz' GitHub"
                   target="_blank"><i class="fa fa-brands fa-github fa-lg"></i></a>
            </div>
        </div>
      </footer>
      `;
  }
}

customElements.define('resume-footer', ResumeFooter);
