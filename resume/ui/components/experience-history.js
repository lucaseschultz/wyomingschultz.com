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
            <div>
                <div class="transition experience-item" style="margin-top: 0;">
                    <img class="experience-img" src="../images/leetcode_logo.webp" alt="" />
                    <div class="experience-content crescent-content">
                        <p><b>LeetCode</b></p>
                        <ul>
                            <li>
                                Consistently write code superior in run time and memory utilization than average user’s
                                code
                                <ul><li>Ex: Top 96.99% runtime and 94% memory usage efficiency</li></ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="transition experience-item">
                    <img class="experience-img" src="../images/intervarsity_logo.png" alt="" />
                    <div class="experience-content">
                        <p><b>Intervarsity (IV) of Rock Valley College (RVC) President</b></p>
                        <ul>
                            <li>Awarded the 2021 RVC Male Student Leadership Award</li>
                            <li>
                                Led IV’s “Core Group” in meeting all organizational goals
                                <ul><li>Appointed tasks to those most qualified, ensuring optimal operational efficiency
                                </li></ul>
                            </li>
                            <li>
                                Effectively communicated with non-technical stakeholders
                                <ul><li>Proposed and followed through with innovative organizational practices</li></ul>
                            </li>
                            <li>Organized and ran weekly meetings, maintaining member engagement</li>
                            <li>Increased organizational engagement, by facilitating former and prospective member
                                outreach</li>
                        </ul>
                    </div>
                </div>
                <div class="transition experience-item">
                    <img class="experience-img" src="../images/crescent_electric_supply_logo.jpg" alt=""/>
                    <div class="experience-content">
                        <p><b>Crescent Electric Supply Company</b></p>
                        <ul>
                            <li>Increased 2024 YTD sales by $147K</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
      `;
  }
}

customElements.define('experience-history', ExperienceHistory);
