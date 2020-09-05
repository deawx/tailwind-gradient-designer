class PreviewHero extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["name", "group"];
  }

  get name() {
    return this.getAttribute("name");
  }

  get group() {
    return this.getAttribute("group");
  }

  renderRoot() {
    return `
    <div class="h-full ${this.classes()}"></div>
    `;
  }

  classes() {
    return currentToClasses(this.group, this.name);
  }

  attributeChangedCallback() {
    this.innerHTML = this.renderRoot();
  }
}

customElements.define("preview-hero", PreviewHero);