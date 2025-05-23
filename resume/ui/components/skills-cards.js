// noinspection HtmlUnknownAnchorTarget,JSUnusedGlobalSymbols,HtmlUnknownTarget

class SkillsCards extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="skills">
        <div class='component-header-container transition'>
          <h3 class="component-header w3-xlarge" style="width: 4ch;">Skills</h3>
        </div>
          
        <div class="skills-categories">
          <div class="skill-category transition">
            <h4>Frontend</h4>
            <div class="skill-items">
              <div class="skill-item"><img src="../images/html-icon.png" alt="HTML Logo"/> HTML/CSS</div>
              <div class="skill-item"><img src="../images/javascript-icon.png" alt="JavaScript Logo"/> JavaScript/TypeScript</div>
              <div class="skill-item"><img src="../images/react-icon.png" alt="React Logo"/> React/Next.js</div>
              <div class="skill-item"><img src="../images/angular-icon.png" alt="Angular Logo"/> Angular</div>
              <div class="skill-item"><img src="../images/scss-icon.png" alt="Tailwind Logo"/> CSS Frameworks</div>
            </div>
          </div>
          
          <div class="skill-category transition">
            <h4>Backend</h4>
            <div class="skill-items">
              <div class="skill-item"><img src="../images/nodejs-icon.png" alt="Node Logo"/> Node.js/Express</div>
              <div class="skill-item"><img src="../images/python-icon.png" alt="Python Logo"/> Python</div>
              <div class="skill-item"><img src="../images/sql-icon.png" alt="SQL Logo"/> SQL/NoSQL Databases</div>
              <div class="skill-item"><img src="../images/php-icon.png" alt="PHP Logo"/> PHP</div>
            </div>
          </div>
          
          <div class="skill-category transition">
            <h4>Tools & Practices</h4>
            <div class="skill-items">
              <div class="skill-item"><img src="../images/git-icon.png" alt="Git Logo"/> Git/GitHub</div>
              <div class="skill-item"><img src="../images/ci_cd-icon.png" alt="CI/CD Icon"/> CI/CD</div>
              <div class="skill-item"><img src="../images/agile_icon.png" alt="Agile Logo"/> Agile</div>
              <div class="skill-item"><img src="../images/ui_ux-icon.png" alt="UI/UX Icon"/> UI/UX Design</div>
              <div class="skill-item"><img src="../images/openai-icon.png" alt="OpenAI Logo"/> AI Integration</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('skills-cards', SkillsCards);
