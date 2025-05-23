// noinspection HtmlUnknownAnchorTarget,JSUnusedGlobalSymbols,HtmlUnknownTarget

class ExperienceHistory extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <div class="w3-row" id="experience">
            <div class="component-header-container transition">
                <h3 class="component-header" style="width: 9ch;">Experience</h3>
            </div>
            <div class="experience-list">
                <div class="transition">
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

                <div class="transition">
                  <img class="experience-img" src="../images/intervarsity_logo.png" alt="" />
                  <div class="experience-content">
                      <p><b>Intervarsity (IV) of Rock Valley College (RVC) President</b></p>
                      <ul>
                          <li>Received 2021 RVC Male Student Leadership Award for exceptional leadership</li>
                          <li>Optimized team performance through strategic resource allocation and documented frameworks</li>
                          <li>Increased engagement using data-driven strategies and continuous improvement cycles</li>
                      </ul>
                  </div>
              </div>
            </div>
        </div>
      `;
  }
}

customElements.define('experience-history', ExperienceHistory);
