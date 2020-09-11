import {LitElement, customElement, html, css} from 'lit-element';

const withHtmlAndWebComponents = () => html`<h3>HTML, CSS &amp; WebComponents</h3>
<pre style="text-align:left;padding-left:2rem;">
&lt;presentation-page>
    &lt;h2>Coordinates&lt;/h2>
    &lt;div style="display:flex; justify-content: center;">
        &lt;hexagon-container 
            coordinates="even-q" 
            rows="2" 
            cols="3" 
            label="coords" 
            selectDefault="1:1" />
        &lt;hexagon-container 
            coordinates="even-q" 
            rows="2" 
            cols="3" 
            label="cube-coords" 
            selectDefault="1:1" />
    &lt;/div>
&lt;/presentation-page>
</pre>`

const withTypeScriptAndLitElements = () => html`<h3>Typescript & LitElements/pureLit</h3>
<pre style="text-align:left;">
pureLit('line-element'
  ({parent, orientation, color}) => {
    if (orientation === 'none') return "";
    const {x1, x2, y1, y2} = lineCoords(parent)(orientation);
    return html\`&lt;svg>
        &lt;line
            x1="$\{x1}" y1="$\{y1}"
            x2="$\{x2}" y2="$\{y2}"
            style="$\{color ? \"stroke:$\{color};\" : ""}"
        />
    &lt;/svg>\`;
  }, {
    styles: [LineStyle],
    defaults: {
      orientation: 'none',
      parent: 'rectangle'
      color: null
    }
  })
</pre>`

@customElement('presentation-created-with')
export class PresentationPageCreatedWith extends LitElement {
  static styles = css`
    :host {
      position:relative;
      display: inline-block;
      width: 100%;
      height: 100%;
    }
    .footer {
      position: absolute;
      bottom:0;
      right:0;
    }
    `;

  render() {
    return html`<presentation-page last first>
    <h2 style="font-size: 4rem;">Presentation created with</h2>
    <div style="display:flex; margin:0 auto;">
      <div style="flex-grow:1;">
        ${withHtmlAndWebComponents()}
      </div>
      <div style="flex-grow:1;">
        ${withTypeScriptAndLitElements()}
      </div>
    </div>
    <div class="footer">Created by <a href="https://matthias-kainer.de">Matthias Kainer</a> | Follow me on <a href="http://twitter.com/matkainer">Twitter</a> and <a href="github.com/matthiaskainer/">Github</a></div>
  </presentation-page>`;
  }
}
