// noinspection HtmlUnknownAnchorTarget,JSUnusedGlobalSymbols,HtmlUnknownTarget

class ResumePanel extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <div class="panel">
            <h1 id="name"><b>LUCAS E. SCHULTZ</b></h1>
            <img class="profile" src="../images/lucas-schultz.png" alt="" />
            <p></p>
        </div>
      `;
  }
}

customElements.define('resume-panel', ResumePanel);
