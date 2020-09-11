var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, customElement, html } from 'lit-element';
import { r } from '../../arrays/range';
let Gatter = class Gatter extends LitElement {
    render() {
        return html `${r(0, 4).map((row) => r(0, 4).map((col) => html `<graph-gatter-element
            x="${row}"
            y="${col}"
          ></graph-gatter-element>`))}`;
    }
};
Gatter = __decorate([
    customElement('graph-gatter')
], Gatter);
export { Gatter };
//# sourceMappingURL=Gatter.js.map