// noinspection HtmlUnknownAnchorTarget,JSUnusedGlobalSymbols,HtmlUnknownTarget

class ExperienceHistory extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="w3-row w3-container" id="experience">
            <div class="w3-padding-64 transition">
                <h3
                        class="w3-xlarge w3-bottombar w3-border-dark-grey w3-padding-16" style="width: 9ch;">
                    Experience</h3>
            </div>
            <div class="experience-list">
                <div class="transition experience-item">
                    <img class="experience-img" src="../images/crescent_electric_supply_logo.jpg" alt=""/>
                    <div class="experience-content">
                        <p><b>Crescent Electric Supply Company</b></p>
                        <ul>
                            <li>Implemented data-driven customer management approach, improving efficiency</li> 
                            <li>Identified process bottlenecks and developed effective solutions</li>
                            <li>Collaborated across teams to streamline workflows and enhance customer experience</li>
                        </ul>
                    </div>
                </div>

                <div class="transition experience-item">
                  <img class="experience-img" src="../images/intervarsity_logo.png" alt="" />
                  <div class="experience-content">
                      <p><b>Intervarsity (IV) of Rock Valley College (RVC) President</b></p>
                      <ul>
                          <li>Awarded 2021 RVC Male Student Leadership Award for exceptional leadership</li>
                          <li>Analyzed team strengths to optimize resource allocation and improve efficiency</li>
                          <li>Created documented frameworks for consistent implementation of organizational goals</li>
                          <li>Designed iterative improvement cycles and data-driven strategies to increase engagement</li>
                      </ul>
                  </div>
              </div>
            </div>
        </div>
      `;
  }
}

customElements.define('experience-history', ExperienceHistory);
