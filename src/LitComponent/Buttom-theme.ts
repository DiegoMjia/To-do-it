import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";

export class ThemeButton extends LitElement {
  static styles = css`

    .ContainerTogle {
      background-color: #15171c;
      position: relative;
      width: 70px;
      height: 30px;
      box-shadow: inset 4px 4px 6px #4b4b4b;
      cursor: pointer;
      border-radius: 25px;
      margin: 0px auto;
      background-color: rgba(24, 49, 83, 1);
      transition: all 0.5s ease-in-out;
    }

    .Toggle {
      position: absolute;
      top: 0;
      left: 0;
      width: 30px;
      height: 30px;
      background-color: #ffffff;
      border-radius: 50%;
      transform: scale(0.7);
      transition: all 0.3s ease-in-out;
      box-shadow: 3px 3px 8px #c4c4c4, -3px -3px -8px #ffffff;
    }

    .ContainerTogle.active .Toggle {
      left: 40px;
      background-color: #ffd43b;
    }

    .ContainerTogle.active {
      background-color: #ccc;
    }
  `;

  @property({ type: Boolean })
  active = false;

  public themeToggle() {
    this.active = !this.active;
  }

  render() {
    return html`
      <div
        class="ContainerTogle ${this.active ? "active" : ""}"
        @click="${this.themeToggle}"
      >
        <div class="Toggle"></div>
      </div>
    `;
  }
}

customElements.define("theme-button", ThemeButton);