import {LitElement, html, customElement, css} from 'lit-element';

import './pages/presentation-page';
import './pages/presentation-created-with';
import './content/Rectangle';
import './content/2D/Graph';
import './content/Hexagon';
import './content/3D/Graph';
import {HexagonContainer} from './content/Hexagon';
import {InteractiveHexagon} from './content/Hexagon/InteractiveHexagon';

@customElement('presentation-core')
export class PresentationCore extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100%;
      overflow: scroll-y;
      text-align: center;
    }
    h1 {
      color: var(--colorFocus);
      font-size: 15rem;
      line-height: 10rem;
      position: absolute;
      bottom: 0;
    }
    h2 {
      color: var(--colorContrast);
      font-size: 5rem;
      line-height: 5rem;
      margin-top: 4rem;
    }
    .pushToMiddle {
      margin-top: 20%;
    }
    video {
      width: 100%;
      height: 70%;
    }
    div.lessons {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
    div.lesson {
      width: 30%;
      margin-top: 2rem;
      padding: 10px;
    }
    h3.lesson {
      color: var(--colorFocus);
    }
  `;

  pathsTo = {
    first: '7:2',
    second: {
      ignoreObstacle: true,
      target: '7:2',
    },
    third: {
      target: '7:2',
      label: 'none',
    },
    fourth: {
      target: '7:3',
      label: 'none',
    },
    fifth: {
      target: '7:3',
      label: 'none',
    },
  };

  render() {
    return html`
      <presentation-page first>
        <h1>what math can teach about coding</h1>
      </presentation-page>
      <presentation-page>
        <h2 class="pushToMiddle">"There are two reasons why you can do maths as developer: data science and gaming."</h2>
        <h3>Myself</h3>
      </presentation-page>
      <presentation-page>
        <h2>So let's build this, right?</h2>
        <video src="assets/the-mill.mp4" autoplay loop muted></video>
      </presentation-page>
      <presentation-page>
        <h1>Distance</h1>
        <h2>Game mechanics</h2>
      </presentation-page>
      <presentation-page>
        <h2>Movement Costs/Distance</h2>
        <rectangle-container distance="none" show="distance" selectDefault="0:0" cols="1"></rectangle-container>
      </presentation-page>
      <presentation-page>
        <h2>Can we use what we learned in school?</h2>
        <graph-element />
      </presentation-page>
      <presentation-page>
        <h2>Can we use what we learned in school??</h2>
        <graph-element withGatter withLines></graph-element>
        Distance! Paths! Euclid ftw!!
      </presentation-page>
      <presentation-page>
        <h2 class="pushToMiddle">Distance between two points</h2>
        <pre style="font-size:2rem;">d = √<span style="border-top:2px solid black;">(x2 − x1)² + (y2 − y1)²</span></pre>
      </presentation-page>
      <presentation-page>
        <h2>Distance on a game field</h2>
        <pre>d = √<span style="border-top:1px solid black;">(x2 − x1)² + (y2 − y1)²</span></pre>
        <rectangle-container distance="geometry" />
      </presentation-page>
      <presentation-page>
        <h1>maths, you betrayed me again!</h1>
      </presentation-page>
      <presentation-page>
        <h2><del>Euclid</del> Taxicab</h2>
        <rectangle-container 
          show="none" showPath="euclid" distance="none" 
          showPathControls
          selectDefault="0:0" euclidPathTo="3:3" manhattanPathTo="3:3" 
          />
      </presentation-page>
      <presentation-page>
        <h2>How we want distance on a game field</h2>
        <pre>d = ?</span></pre>
        <rectangle-container distance="none" />
      </presentation-page>
      <presentation-page>
        <h2>How we want distance on a game field</h2>
        <pre>d = |x2 − x1| + |y2 − y1|</span></pre>
        <rectangle-container />
      </presentation-page>
      <presentation-page>
        <h2>How we want distance on a game field</h2>
        <pre>d = |x2 − x1| + |y2 − y1|</span></pre>
        <rectangle-container show="distance" selectDefault="0:0" />
      </presentation-page>
      <presentation-page>
        <h1 class="lesson">Lesson 1</h1>
        <h2 class="lesson">Visualisation is awesome</h2>
      </presentation-page>
      <presentation-page>
        <h1 class="lesson">Lesson 2</h1>
        <h2 class="lesson">If something's weirdly off, you might be applying the wrong system</h2>
      </presentation-page>
      <presentation-page>
        <h1>But we want Hexagons!</h1>
      </presentation-page>
      <presentation-page>
        <h2>Hexagons</h2>
        <hexagon-container showButtons></hexagon-container>
      </presentation-page>
      <presentation-page>
        <h2>Hexagons Distance</h2>
        <pre>d = |x2 − x1| + |y2 − y1|</pre>
        <hexagon-container distance="manhattan-box"></hexagon-container>
      </presentation-page>
      <presentation-page>
        <h2>Issues?</h2>
        <hexagon-container distance="manhattan-box" label="distance" selectDefault="2:2"></hexagon-container>
      </presentation-page>
      <presentation-page>
        <h2>Issue</h2>
        <pre>We cannot move directly in a row</pre>
        <hexagon-container .highlight="${{row: 0}}"></hexagon-container>
      </presentation-page>
      <presentation-page>
        <h2>Fix</h2>
        <pre>Move row in one line</pre>
        <hexagon-container coordinates="even-q" rows="4" cols="7" .highlight="${{
          row: 0,
        }}"></hexagon-container>
      </presentation-page>
      <presentation-page>
        <h2>Has it fixed our distance?</h2>
        <pre>d = |x2 − x1| + |y2 − y1|</pre>
        <hexagon-container coordinates="even-q" rows="4"  cols="7" label="distance" selectDefault="2:2"></hexagon-container>
      </presentation-page>
      <presentation-page>
        <h1>take a step back</h1>
      </presentation-page>
      <presentation-page>
        <h2>Observation</h2>
        <pre>We can move in 6 directions</pre>
        <hexagon-element size="20rem" orientation="pointy" showDirections style="margin-top:3rem;" />
      </presentation-page>
      <presentation-page>
        <h2>Observation</h2>
        <pre>Just like in 3D</pre>
        <graph-3d style="width: 60%; height: 60%; margin: 0 auto;">
          <hexagon-element size="20rem" orientation="pointy" showCube style="margin-top:3rem;">
          </hexagon-element>
        </graph-3d>
      </presentation-page>
      <presentation-page>
        <h2>Convert to cube</h2>
        <pre style="text-align: left; font-size: 2rem; width: 60%; margin: 0 auto; padding-top: 3rem;">
function toCube({col, row}) {

  const x = col

  const z = row - (col + (col&1)) / 2 

  const y = -x-z

  return new Cube(x, y, z)
}
        </pre>
        <h3>Note: Would be slighly different for odd-push and pointy variants</h3>
      </presentation-page>
      <presentation-page>
        <h2>Coordinates</h2>
        <div style="display:flex; margin:0 auto; align-items: center;justify-content: center;">
          <hexagon-container coordinates="even-q" rows="2" cols="3" label="coords" selectDefault="1:1"></hexagon-container>
          <hexagon-container coordinates="even-q" rows="2" cols="3" label="cube-coords" selectDefault="1:1"></hexagon-container>
        </div>
      </presentation-page>
      <presentation-page>
        <h2>Can you guess the distance?</h2>
        <div class="flex">
        <hexagon-container coordinates="even-q" rows="3" cols="5" distance="manhattan-cube-hint" label="cube-coords" selectDefault="1:1"></hexagon-container>
        </div>
      </presentation-page>
      <presentation-page>
        <h2 class="pushToMiddle">Taxicab distance between two cubes</h2>
        <pre style="font-size:2rem;">d = max(|x2 − x1|, |y2 − y1|, |z2 − z1|)</pre>
      </presentation-page>
      <presentation-page>
        <h2>Distance</h2>
        <pre>d = max(|x2 − x1|, |y2 − y1|, |z2 − z1|)</pre>
        <hexagon-container coordinates="even-q" rows="4" cols="7" label="cube-distance" selectDefault="2:2"></hexagon-container>
      </presentation-page>
      <presentation-page>
        <h1 class="lesson">Lesson 3</h1>
        <h2 class="lesson">When extending/refactoring your product, taking a step back and searching for different solutions is often more useful than just adding things to make it work</h2>
      </presentation-page>
      <presentation-page>
        <h1>Path Finding</h1>
        <h2>Game mechanics</h2>
      </presentation-page>
      <presentation-page>
        <h2>Naive shortest path</h2>
        <pre style="text-align:left; font-size: 2rem;">




  const distance = 0;
  let current = start;
  const path = [];
  while (!current.equals(goal)) {
    current = neighbors(current)
      .map(next => distance(next, goal))
      .sort().first();
    path.push(current)
  }
        </pre>
      </presentation-page>
      <presentation-page>
        <h2>Shortest Path</h2>
        <pre></pre>
        <hexagon-container 
          coordinates="even-q" 
          rows="4" cols="7"  label="cube-distance" selectDefault="0:0" pathFrom="0:0" pathTo="${
            this.pathsTo.first
          }" showPath="taxicab"
          @select="${(e: CustomEvent) => {
            this.pathsTo.first = (e.detail.hexagon as InteractiveHexagon).cube
              .toPosition()
              .toString();
            this.requestUpdate();
            e.preventDefault();
          }}"
        ></hexagon-container>
      </presentation-page>
      <presentation-page>
        <h2>Shortest Path with obstacle</h2>
        <pre></pre>
        <hexagon-container 
          coordinates="even-q" 
          rows="4" cols="7"  label="cube-distance" 
          selectDefault="0:0" pathFrom="0:0" pathTo="${
            this.pathsTo.second.target
          }" showPath="taxicab"
          .blocked="${['4:0', '4:1', '4:2', '4:3']}"
          ?ignoreBlocked="${this.pathsTo.second.ignoreObstacle}"
          @select="${(e: CustomEvent) => {
            this.pathsTo.second.target = (e.detail
              .hexagon as InteractiveHexagon).cube
              .toPosition()
              .toString();
            this.requestUpdate();
            e.preventDefault();
          }}"
        ></hexagon-container>
        <input type="checkbox" @click="${() => (
          (this.pathsTo.second.ignoreObstacle = !this.pathsTo.second
            .ignoreObstacle),
          this.requestUpdate()
        )}" /> Comply to reality
      </presentation-page>
      <presentation-page>
        <h2 class="pushToMiddle">How can we find the path without knowing the way?</h2>
      </presentation-page>
      <presentation-page>
        <h2>Breadth First Search</h2>
        <pre style="text-align:left; font-size: 2rem;">
  const frontier = new Queue&lt;Cube>();
  frontier.push(start);
  const cameFrom = {};

  const neverVisitedNeighbors => (current: Cube) => 
    neighbors(current).filter(field => !cameFrom[next] || isBlocked(field))

  while (frontier.length > 0) {
    const current = frontier.pop();
    for (const next of neverVisitedNeighbors(current)) {
      frontier.push(next);
      cameFrom[next] = current;
    }
  }
        </pre>
      </presentation-page>
      <presentation-page>
        <h2>Shortest Path</h2>
        <pre></pre>
        <hexagon-container 
          coordinates="even-q" 
          rows="4" cols="7" label="${this.pathsTo.third.label}" 
          selectDefault="0:0" pathFrom="0:0" pathTo="${
            this.pathsTo.third.target
          }"
          .blocked="${['4:0', '4:1', '4:2', '4:3']}"
        ></hexagon-container>
        <button @click="${() => {
          this.pathsTo.third.label = 'none';
          this.requestUpdate();
          setTimeout(() => {
            this.pathsTo.third.label =
              this.pathsTo.third.label === 'none'
                ? 'uncover-cube-breadth-distance'
                : 'none';
            this.requestUpdate();
          }, 1);
        }}">Trigger uncover the distance</button>
      </presentation-page>
      <presentation-page>
        <h2>Breadth First Search - Early exit</h2>
        <pre style="text-align:left; font-size: 2rem;">
  const frontier = new Queue&lt;Cube>();
  frontier.push(start);
  const cameFrom = {};

  const neverVisitedNeighbors = (current: Cube) => 
    neighbors(current).filter(field => !cameFrom[field] || isBlocked(field))

  while (frontier.length > 0) {
    const current = frontier.pop();
    <span style="color: var(--colorHighlight);">if (current.equals(goal)) break;</span>

    for (const next of neverVisitedNeighbors(current)) {
      frontier.push(next);
      cameFrom[next] = current;
    }
  }
        </pre>
      </presentation-page>
      <presentation-page>
        <h1 class="lesson">Lesson 4</h1>
        <h2 class="lesson">The right line of code can improve your performance a lot, the right idea drastically so</h2>
      </presentation-page>
      <presentation-page>
        <h2>A*</h2>
        <pre style="text-align:left; font-size: 2rem;">
  const frontier = new <span style="color: var(--colorHighlight);">Priority</span>Queue&lt;Cube>();
  frontier.push(start, <span style="color: var(--colorHighlight);">0</span>);
  const cameFrom = {};

  const neverVisitedNeighbors = (current: Cube) => 
  neighbors(current).filter(field => !cameFrom[field] || isBlocked(field))

  while (frontier.length > 0) {
    const current = frontier.pop();
    if (current.equals(goal)) break;

    for (const next of neverVisitedNeighbors(current)) {
      <span style="color: var(--colorHighlight);">const priority = distance(next, goal);
      frontier.push(next, priority);</span>

      cameFrom[next] = current;
    }
  }
        </pre>
      </presentation-page>

      <presentation-page>
        <h2>A* Shortest Path</h2>
        <pre></pre>
        <hexagon-container 
          coordinates="even-q" 
          rows="6" cols="9" label="${this.pathsTo.fourth.label}" 
          selectDefault="0:0" pathFrom="0:0" pathTo="${
            this.pathsTo.fourth.target
          }"
          .blocked="${['4:0', '4:1', '4:2', '4:3']}"
        ></hexagon-container>
        <button @click="${() => {
          this.pathsTo.fourth.label = 'none';
          this.requestUpdate();
          setTimeout(() => {
            this.pathsTo.fourth.label =
              this.pathsTo.fourth.label === 'none'
                ? 'uncover-cube-a*-distance'
                : 'none';
            this.requestUpdate();
          }, 1);
        }}">Trigger uncover the distance</button>
      </presentation-page>
      <presentation-page>
        <h2 class="pushToMiddle">And if it's not a wall but only a little muddy?</h2>
      </presentation-page>
      <presentation-page>
        <h2>A*</h2>
        <pre style="text-align:left; font-size: 1.5rem;">
  const frontier = new PriorityQueue&lt;Cube>();
  frontier.push(start, 0);
  const cameFrom = {};

  <span style="color: var(--colorHighlight);">const costSoFar: { [key: string]: number } = {};
  costSoFar[start] = 0;</span>

  const neverVisitedNeighbors = (current: Cube) => 
  neighbors(current).filter(field => !cameFrom[field] || isBlocked(field))

  while (frontier.length > 0) {
    const current = frontier.pop();
    if (current.equals(goal)) break;

    for (const next of neverVisitedNeighbors(current)) {
      <span style="color: var(--colorHighlight);">
      const newCost = costSoFar[current] + costs(current);
      if (!costSoFar[next] || newCost < costSoFar[next]) {
        costSoFar[next] = newCost;</span>
        const priority = <span style="color: var(--colorHighlight);">newCost + </span>distance(next, goal);
        frontier.push(next, priority);

        cameFrom[next] = current;
      }
    }
  }
        </pre>
      </presentation-page>
      <presentation-page>
        <h2>A* Shortest Path</h2>
        <pre></pre>
        <hexagon-container 
          coordinates="even-q" 
          rows="6" cols="9" label="${this.pathsTo.fifth.label}" 
          selectDefault="0:0" pathFrom="0:0" pathTo="${
            this.pathsTo.fifth.target
          }" showPath="taxicab"
          .blocked="${['3:3', '3:4', '3:5']}"
          .expensive="${[
            '4:0',
            '4:2',
            '4:3',
            '4:4',
            '4:5',
            '3:0',
            '3:2',
            '5:3',
            '5:0',
            '5:2',
            '6:1',
            '6:2',
            '7:1',
          ]}"
        ></hexagon-container>
        <button @click="${() => {
          this.pathsTo.fifth.label = 'none';
          this.requestUpdate();
          setTimeout(() => {
            this.pathsTo.fifth.label =
              this.pathsTo.fifth.label === 'none'
                ? 'uncover-cube-a*-distance'
                : 'none';
            this.requestUpdate();
          }, 1);
        }}">Trigger uncover the distance</button>
      </presentation-page>
      <presentation-page>
        <h2 class="pushToMiddle">Would you have found this solution if we'd started searching for a solution from the requirement of muddy roads?</h2>
      </presentation-page>
      <presentation-page>
        <h1 class="lesson">Lesson 5</h1>
        <h2 class="lesson">Not starting with the requirement but finding the path to the requirement will improve your solution</h2>
      </presentation-page>
      <presentation-page>
        <h2 class="lesson">Lessons learned</h2>

        <div class="lessons">
          <div class="lesson">
            <h3 class="lesson">Lesson 1</h1>
            <h4 class="lesson">Visualisation is awesome</h2>
          </div>
          <div class="lesson">
            <h3 class="lesson">Lesson 2</h1>
            <h4 class="lesson">If something's weirdly off, you might be applying the wrong system</h2>
          </div>
          <div class="lesson">
            <h3 class="lesson">Lesson 3</h1>
            <h4 class="lesson">When extending/refactoring your product, taking a step back and searching for different solutions is often more useful than just adding things to make it work</h2>
          </div>
          <div class="lesson">
            <h3 class="lesson">Lesson 4</h1>
            <h4 class="lesson">The right line of code can improve your performance a lot, the right idea drastically so</h2>
          </div>
          <div class="lesson">
            <hexagon-element size="20rem" orientation="pointy" showCube style="margin-top:3rem;">
            </hexagon-element>
          </div>
          <div class="lesson">
            <h3 class="lesson">Lesson 5</h1>
            <h4 class="lesson">Not starting with the requirement but finding the path to the requirement will improve your solution</h2>
          </div>
        </div>
      </presentation-page>
      <presentation-created-with></presentation-created-with>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'presentation-core': PresentationCore;
    'hexagon-container': HexagonContainer;
  }
}
