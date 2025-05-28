'use strict';

export class EmCorna extends HTMLElement {
  public static get is(): string {
    return 'em-corna';
  }

  private template: string = `
  <svg
    width="210"
    height="420"
    viewBox="0 0 210 420"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_52_9004)">
      <path
        d="M165 420H30V285H15V240H0V135H15V45H30V30H45V45H60V90H105V75H135V15H150V0H180V15H195V210H210V255H195V285H180V300H165V420Z"
        fill="black"
      />
      <path d="M60 390H45V375H60V390Z" fill="white" />
      <path d="M90 390H75V375H90V390Z" fill="white" />
      <path d="M75 375H60V360H75V375Z" fill="white" />
      <path d="M60 360H45V345H60V360Z" fill="white" />
      <path d="M90 360H75V345H90V360Z" fill="white" />
      <path d="M120 390H105V375H120V390Z" fill="white" />
      <path d="M150 390H135V375H150V390Z" fill="white" />
      <path d="M135 375H120V360H135V375Z" fill="white" />
      <path d="M120 360H105V345H120V360Z" fill="white" />
      <path d="M150 360H135V345H150V360Z" fill="white" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M75 180H120V195H180V210H195V255H180V285H165V300H150V315H45V285H30V240H15V135H30V45H45V150H30V195H45V210H75V195H45V165H75V180ZM120 285H135V270H120V285ZM105 270H120V225H105V270ZM75 225H105V210H75V225Z"
        fill="white"
      />
      <path d="M180 180H135V165H150V15H180V180Z" fill="white" />
      <path d="M90 165H75V150H60V105H90V165Z" fill="white" />
      <path d="M135 165H105V90H135V165Z" fill="white" />
    </g>
    <defs>
      <clipPath id="clip0_52_9004">
        <rect width="210" height="420" fill="white" />
      </clipPath>
    </defs>
  </svg>`;

  public constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = this.template;
  }
}

window.customElements.define(EmCorna.is, EmCorna);
