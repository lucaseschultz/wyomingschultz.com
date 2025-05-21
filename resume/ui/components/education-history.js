// noinspection HtmlUnknownAnchorTarget,JSUnusedGlobalSymbols,HtmlUnknownTarget

class EducationHistory extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="ransition" id="education">
        <div class="w3-padding-32">
          <h3 class="component-header w3-xlarge" style="width: 8ch;">Education</h3>
        </div>
        <div>
          <ul class="education-list">
            <li>
              <div class="education-header">
                <h4>Technical Certifications</h4>
                <span class="education-date">2023-2024</span>
              </div>
              <div class="education-details">
                <p><a href='https://www.freecodecamp.org/learn/front-end-development-libraries/' target="_blank">
                  Front End Development Libraries Certification <i class="fa fa-external-link"></i>
                </a></p>
                <p class="education-description">
                  React, Redux, Bootstrap, jQuery, SASS
                </p>
                
                <p><a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/" target="_blank">
                  JavaScript Algorithms and Data Structures Certification <i class="fa fa-external-link"></i>
                </a></p>
                <p class="education-description">
                  Advanced JS, algorithms, functional programming, OOP patterns
                </p>
                
                <p><a href="https://replit.com/learn/100-days-of-python/hub" target="_blank">
                  100 Days of Code - The Complete Python Course <i class="fa fa-external-link"></i>
                </a></p>
                <p class="education-description">
                  Python fundamentals, web development, data analysis, API integration
                </p>
              </div>
            </li>
            <li>
              <div class="education-header">
                <h4>Associates Degree</h4>
                <span class="education-date">2021</span>
              </div>
              <div class="education-details">
                <p>Rock Valley College, Rockford, IL</p>
                <p class="education-description">
                  Coursework included data analysis, research methodology, and logical reasoning
                </p>
              </div>
            </li>
            <li>
              <div class="education-header">
                <h4>Ongoing Professional Development</h4>
              </div>
              <div class="education-details">
                <ul>
                  <li>Full-stack application development with modern frameworks</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    `;
  }
}

customElements.define('education-history', EducationHistory);
