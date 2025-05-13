// noinspection HtmlUnknownAnchorTarget,JSUnusedGlobalSymbols,HtmlUnknownTarget

class SkillsCarousel extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="w3-row-padding transition" id="skills">
        <div class='w3-padding-32'>
          <h3 class="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16" style="width: 4ch;">Skills</h3>
        </div>
        <div class="infinite-carousel">
          <!-- png's -->
          <div class="carousel-slide pause">
            <img src="../images/openai-icon.png" alt="OpenAI Logo"/>
            <img src="../images/html-icon.png" alt="HTML Logo"/>
            <img src="../images/css-icon.png" alt="CSS Logo"/>
            <img src="../images/less-icon.png" alt="LESS Logo"/>
            <img src="../images/sass-icon.png" alt="SASS Logo"/>
            <img src="../images/tailwind-icon.png" alt="Tailwind Logo"/>
            <img src="../images/bootstrap-icon.png" alt="Bootstrap Logo"/>
            <img src="../images/javascript-icon.png" alt="JavaScript Logo"/>
            <img src="../images/typescript-icon.png" alt="TypeScript Logo"/>
            <img src="../images/react-icon.png" alt="React Logo"/>
            <img src="../images/nextjs-icon.png" alt="Next Logo"/>
            <img src="../images/vercel-icon.png" alt="Vercel Logo"/>
            <img src="../images/angular-icon.png" alt="Angular Logo"/>
            <img src="../images/nodejs-icon.png" alt="Node Logo"/>
            <img src="../images/expressjs-icon.png" alt="Express Logo"/>
            <img src="../images/php-icon.png" alt="PHP Logo"/>
            <img src="../images/python-icon.png" alt="Python Logo"/>
            <img src="../images/ruby-icon.jpg" alt="Ruby Logo"/>
            <img src="../images/sql-icon.png" alt="SQL Logo"/>
            <img src="../images/postgresql-icon.png" alt="PostgreSQL"/>
            <img src="../images/mongodb-icon.png" alt="MongoDB Logo"/>
            <img src="../images/mongoose-icon.png" alt="Mongoose Logo"/>
            <img src="../images/jquery-icon.png" alt="jQeury Icon"/>
            <img src="../images/git-icon.png" alt="Git Logo"/>
            <img src="../images/github-icon.png" alt="GitHub Logo"/>
            <img src="../images/ui_ux-icon.png" alt="UI/UX Icon"/>
            <img src="../images/ci_cd-icon.png" alt="CI/CD Icon"/>
            <img src="../images/agile_icon.png" alt="Agile Logo"/>
          </div>
          <!-- Duplicate of icons to create carousel -->
          <div class="carousel-slide pause">
            <img src="../images/openai-icon.png" alt="OpenAI Logo"/>
            <img src="../images/html-icon.png" alt="HTML Logo"/>
            <img src="../images/css-icon.png" alt="CSS Logo"/>
            <img src="../images/less-icon.png" alt="LESS Logo"/>
            <img src="../images/sass-icon.png" alt="SASS Logo"/>
            <img src="../images/tailwind-icon.png" alt="Tailwind Logo"/>
            <img src="../images/bootstrap-icon.png" alt="Bootstrap Logo"/>
            <img src="../images/javascript-icon.png" alt="JavaScript Logo"/>
            <img src="../images/typescript-icon.png" alt="TypeScript Logo"/>
            <img src="../images/react-icon.png" alt="React Logo"/>
            <img src="../images/nextjs-icon.png" alt="Next Logo"/>
            <img src="../images/vercel-icon.png" alt="Vercel Logo"/>
            <img src="../images/angular-icon.png" alt="Angular Logo"/>
            <img src="../images/nodejs-icon.png" alt="Node Logo"/>
            <img src="../images/expressjs-icon.png" alt="Express Logo"/>
            <img src="../images/php-icon.png" alt="PHP Logo"/>
            <img src="../images/python-icon.png" alt="Python Logo"/>
            <img src="../images/ruby-icon.jpg" alt="Ruby Logo"/>
            <img src="../images/sql-icon.png" alt="SQL Logo"/>
            <img src="../images/postgresql-icon.png" alt="PostgreSQL"/>
            <img src="../images/mongodb-icon.png" alt="MongoDB Logo"/>
            <img src="../images/mongoose-icon.png" alt="Mongoose Logo"/>
            <img src="../images/jquery-icon.png" alt="jQeury Icon"/>
            <img src="../images/git-icon.png" alt="Git Logo"/>
            <img src="../images/github-icon.png" alt="GitHub Logo"/>
            <img src="../images/ui_ux-icon.png" alt="UI/UX Icon"/>
            <img src="../images/ci_cd-icon.png" alt="CI/CD Icon"/>
            <img src="../images/agile_icon.png" alt="Agile Logo"/>
          </div>
        </div>
      </div>
      `;
  }
}

customElements.define('skills-carousel', SkillsCarousel);
