// noinspection HtmlUnknownAnchorTarget,JSUnusedGlobalSymbols,HtmlUnknownTarget

class SkillsCards extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div id="skills">
        <div class='component-header-container transition'>
          <h3 class="component-header" style="width: 4ch;">Skills</h3>
        </div>
          
        <div class="skills-categories">
          <div class="skill-category transition">
            <h4>Frontend</h4>
            <div class="skill-items">
              <div class="skill-item"><img src="../images/html-icon.png" alt="HTML Icon"/> HTML/CSS</div>
              <div class="skill-item"><img src="../images/scss-icon.png" alt="SCSS Icon"/> CSS Frameworks</div>
              <div class="skill-item"><img src="../images/javascript-icon.png" alt="JavaScript Icon"/> JavaScript/TypeScript</div>
              <div class="skill-item"><img src="../images/react-icon.png" alt="React Icon"/> React/Next.js</div>
              <div class="skill-item"><img src="../images/angular-icon.png" alt="Angular Icon"/> Angular</div>
            </div>
          </div>
          
          <div class="skill-category transition">
            <h4>Backend</h4>
            <div class="skill-items">
              <div class="skill-item"><img src="../images/nodejs-icon.png" alt="Node Icon"/> Node.js/Express</div>
              <div class="skill-item"><img src="../images/python-icon.png" alt="Python Icon"/> Python</div>
              <div class="skill-item"><img src="../images/sql-icon.png" alt="SQL Icon"/> SQL/NoSQL Databases</div>
              <div class="skill-item"><img src="../images/php-icon.png" alt="PHP Icon"/> PHP</div>
            </div>
          </div>
          
          <div class="skill-category transition">
            <h4>Tools & Practices</h4>
            <div class="skill-items">
              <div class="skill-item"><img src="../images/git-icon.png" alt="Git Icon"/> Git/GitHub</div>
              <div class="skill-item"><img src="../images/ci_cd-icon.png" alt="CI/CD Icon"/> CI/CD</div>
              <div class="skill-item"><img src="../images/agile_icon.png" alt="Agile Icon"/> Agile</div>
              <div class="skill-item"><img src="../images/ui_ux-icon.png" alt="UI/UX Icon"/> UI/UX Design</div>
              <div class="skill-item"><img src="../images/ai-icon.png" alt="AI Icon"/> AI Integration</div>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('skills-cards', SkillsCards);
