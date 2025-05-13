// noinspection HtmlUnknownAnchorTarget,JSUnusedGlobalSymbols,HtmlUnknownTarget

class EducationHistory extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="w3-row-padding transition" id="education">
          <div class="w3-padding-32">
              <h3
                      class="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16"
                      style="width: 8ch;">Education</h3>
          </div>
          <div>
              <ul class="education-list">
                  <li>
                      <a href='https://www.freecodecamp.org/learn/front-end-development-libraries/' target="_blank">
                          Front End Development Libraries Certification <i class="fa fa-external-link"></i>
                      </a>
                      <span>Completed 2024</span>
                  </li>
                  <li>
                      <a href="https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/"
                         target="_blank">
                          JavaScript Algorithms and Data Structures Certification <i class="fa fa-external-link"></i>
                      </a>
                      <span>Completed 2024</span>
                  </li>
                  <li style="margin-bottom: .3rem;">
                      <a href="https://internetingishard.netlify.app/html-and-css/" target="_blank">
                          HTML & CSS Is Hard - Web Dev Tutorial <i class="fa fa-external-link"></i>
                      </a>
                      <span>Completed 2024</span>
                  </li>
                  <li style="margin-bottom: .3rem;">
                      <a href="https://replit.com/learn/100-days-of-python/hub" target="_blank">
                          100 Days of Code - The Complete Python Course <i class="fa fa-external-link"></i>
                      </a>
                      <span>Completed 2023</span>
                  </li>
                  <li style="margin-bottom: .3rem;">
                      <b>Associates Degree in Criminal Justice</b>:
                      <span>Rock Valley College, Rockford, Il</span>
                      <span>Earned 2021</span>
                  </li>
              </ul>
          </div>
      </div>
      `;
  }
}

customElements.define('education-history', EducationHistory);
