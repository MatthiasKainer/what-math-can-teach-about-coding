import {LitElement, html} from 'lit';

import './content/Rectangle';
import './content/2D/Graph';
import './content/Hexagon';
import './content/3D/Graph';
import './content/Hexagon';
import './content/Hexagon/InteractiveHexagon';

import styles from './presentation-core.styles';
import {pureLit} from 'pure-lit';
import {InteractiveHexagon} from './content/Hexagon/InteractiveHexagon';

const pathsTo = {
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

export default pureLit(
  'presentation-core',
  (element: LitElement) =>
    html`
    <presentation-body>
      <presentation-slide first>
        <h1>what math can teach about coding</h1>
      </presentation-slide>
      <presentation-slide>
        <h2 class="pushToMiddle">"There are two reasons why you can do maths as developer: data science and gaming."</h2>
        <h3>Myself</h3>
        <h3 style="position: absolute; bottom: 1rem; width: 100%; text-align:center;">Note: This presentation, especially when we come to hexagons, will work best in firefox</h3>
      </presentation-slide>
      <presentation-slide>
        <h2>So let's build this, right?</h2>
        <video src="assets/the-mill.mp4" autoplay loop muted></video>
      </presentation-slide>
      <presentation-slide>
        <h1>Distance</h1>
        <h2>Game mechanics</h2>
      </presentation-slide>
      <presentation-slide>
        <h2>Movement Costs/Distance</h2>
        <pre>Click on a field to see the distance to the others</pre>
        <rectangle-container distance="none" show="distance" select-default="0:0" cols="1"></rectangle-container>
      </presentation-slide>
      <presentation-slide>
        <h2>Can we use what we learned in school?</h2>
        <graph-element />
      </presentation-slide>
      <presentation-slide>
        <h2>Can we use what we learned in school??</h2>
        <graph-element with-gatter with-lines></graph-element>
        Distance! Paths! Euclid ftw!!
      </presentation-slide>
      <presentation-slide>
        <h2 class="pushToMiddle">Distance between two points</h2>
        <pre style="font-size:2rem;">d = √<span style="border-top:2px solid black;">(x2 − x1)² + (y2 − y1)²</span></pre>
      </presentation-slide>
      <presentation-slide>
        <h2>Distance on a game field</h2>
        <pre>d = √<span style="border-top:1px solid black;">(x2 − x1)² + (y2 − y1)²</span></pre>
        <pre>Click on a field and then hover over others to see the calculation result</pre>
        <rectangle-container distance="geometry" style="margin-top: 2rem;" />
      </presentation-slide>
      <presentation-slide>
        <h1>maths, you betrayed me again!</h1>
      </presentation-slide>
      <presentation-slide>
        <h2 class="pushToMiddle">Let's not blame math just now, let's blame ourself and continue our investigation</h2>
      </presentation-slide>
      <presentation-slide>
        <h2><del>Euclid</del> Taxicab</h2>
        <pre>Switch between the two systems to see the calculated path</pre>
        <rectangle-container 
          show="none" .showPath=${"euclid"} distance="none" 
          show-path-controls
          .selectDefault=${"0:0"} .euclidPathTo=${"3:3"} .manhattanPathTo=${"3:3"} 
          />
      </presentation-slide>
      <presentation-slide>
        <h2 class="pushToMiddle">So it was indeed us - we used the incorrect solution space for our problem</h2>
      </presentation-slide>
      <presentation-slide>
        <h2>How can we calculate distance on a game field that way?</h2>
        <pre>d = ?</pre>
        <pre>Think about a possible solution by looking at the problem</pre>
        <rectangle-container distance="none" />
      </presentation-slide>
      <presentation-slide>
        <h2>And the solution is...</h2>
        <pre>d = |x2 − x1| + |y2 − y1|</pre>
        <pre>Click on the fields to see the calculated result for every other field on the map</pre>
        <rectangle-container show="distance" .selectDefault=${"0:0"} />
      </presentation-slide>
      <presentation-slide>
        <h1 class="lesson">Lesson 1</h1>
        <h2 class="lesson">Visualisation is awesome</h2>
      </presentation-slide>
      <presentation-slide>
        <h1 class="lesson">Lesson 2</h1>
        <h2 class="lesson">If something's weirdly off, you might be applying the wrong system</h2>
      </presentation-slide>
      <presentation-slide>
        <h1>But we want Hexagons!</h1>
      </presentation-slide>
      <presentation-slide>
        <h2>Hexagons</h2>
        <pre>Click on the buttons to see different variants of how we can align hexagons</pre>
        <hexagon-container show-buttons></hexagon-container>
      </presentation-slide>
      <presentation-slide>
        <h2>Hexagons Distance - see any issues?</h2>
        <pre>d = |x2 − x1| + |y2 − y1|</pre>
        <hexagon-container distance="manhattan-box" label="distance" .selectDefault=${"2:2"}></hexagon-container>
      </presentation-slide>∂
      <presentation-slide>
        <h2>Issue</h2>
        <pre>We cannot move directly in a row</pre>
        <hexagon-container .highlight="${{row: 0}}"></hexagon-container>
      </presentation-slide>
      <presentation-slide>
        <h2>Fix</h2>
        <pre>Move row in one line</pre>
        <hexagon-container coordinates="even-q" rows="4" cols="7" .highlight="${{
          row: 0,
        }}"></hexagon-container>
      </presentation-slide>
      <presentation-slide>
        <h2>Has it fixed our distance?</h2>
        <pre>d = |x2 − x1| + |y2 − y1|</pre>
        <hexagon-container coordinates="even-q" rows="4"  cols="7" label="distance" .selectDefault=${"2:2"}></hexagon-container>
      </presentation-slide>
      <presentation-slide>
        <h1>take a step back</h1>
      </presentation-slide>
      <presentation-slide>
        <h2>Observation</h2>
        <pre>We can move in 6 directions</pre>
        <hexagon-element .size=${"20rem"} orientation="pointy" show-directions style="margin-top:3rem;" />
      </presentation-slide>
      <presentation-slide>
        <h2>Observation</h2>
        <pre>Just like in 3D</pre>
        <graph-3d style="width: 60%; height: 60%; margin: 0 auto;">
          <hexagon-element .size=${"20rem"} orientation="pointy" show-cube style="margin-top:3rem;">
          </hexagon-element>
        </graph-3d>
      </presentation-slide>
      <presentation-slide>
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
      </presentation-slide>
      <presentation-slide>
        <h2>Coordinates</h2>
        <div style="display:flex; margin:0 auto; align-items: center;justify-content: center;">
          <hexagon-container coordinates="even-q" rows="2" cols="3" label="coords" selectDefault="1:1"></hexagon-container>
          <hexagon-container coordinates="even-q" rows="2" cols="3" label="cube-coords" selectDefault="1:1"></hexagon-container>
        </div>
      </presentation-slide>
      <presentation-slide>
        <h2>Can you guess the distance?</h2>
        <div class="flex">
        <hexagon-container coordinates="even-q" rows="3" cols="5" distance="manhattan-cube-hint" label="cube-coords" .selectDefault=${"1:1"}></hexagon-container>
        </div>
      </presentation-slide>
      <presentation-slide>
        <h2 class="pushToMiddle">Taxicab distance between two cubes</h2>
        <pre style="font-size:2rem;">d = max(|x2 − x1|, |y2 − y1|, |z2 − z1|)</pre>
      </presentation-slide>
      <presentation-slide>
        <h2>Distance</h2>
        <pre>d = max(|x2 − x1|, |y2 − y1|, |z2 − z1|)</pre>
        <hexagon-container coordinates="even-q" rows="4" cols="7" label="cube-distance" .selectDefault=${"2:2"}></hexagon-container>
      </presentation-slide>
      <presentation-slide>
        <h1 class="lesson">Lesson 3</h1>
        <h2 class="lesson">When extending/refactoring your product, taking a step back and searching for different solutions is often more useful than just adding things to make it work</h2>
      </presentation-slide>
      <presentation-slide>
        <h1>Path Finding</h1>
        <h2>Game mechanics</h2>
      </presentation-slide>
      <presentation-slide>
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
      </presentation-slide>
      <presentation-slide>
        <h2>Shortest Path</h2>
        <pre></pre>
        <hexagon-container 
          coordinates="even-q" 
          rows="4" cols="7"  label="cube-distance" .selectDefault=${"0:0"} .pathFrom=${"0:0"} .pathTo="${
            pathsTo.first
          }" .showPath=${"taxicab"}
          @select="${(e: CustomEvent) => {
            pathsTo.first = (e.detail.hexagon as InteractiveHexagon).cube
              .toPosition()
              .toString();
            element.requestUpdate();
            e.preventDefault();
          }}"
        ></hexagon-container>
      </presentation-slide>
      <presentation-slide>
        <h2>Shortest Path with obstacle</h2>
        <pre></pre>
        <hexagon-container 
          coordinates="even-q" 
          rows="4" cols="7"  label="cube-distance" 
          .selectDefault=${"0:0"} .pathFrom=${"0:0"} .pathTo="${
            pathsTo.second.target
          }" .showPath=${"taxicab"}
          .blocked="${['4:0', '4:1', '4:2', '4:3']}"
          .ignoreBlocked="${pathsTo.second.ignoreObstacle}"
          @select="${(e: CustomEvent) => {
            pathsTo.second.target = (e.detail
              .hexagon as InteractiveHexagon).cube
              .toPosition()
              .toString();
            element.requestUpdate();
            e.preventDefault();
          }}"
        ></hexagon-container>
        <input type="checkbox" @click="${() => (
          (pathsTo.second.ignoreObstacle = !pathsTo.second.ignoreObstacle),
          element.requestUpdate()
        )}" /> Check me to make the path comply to reality
      </presentation-slide>
      <presentation-slide>
        <h2 class="pushToMiddle">How can we find the path without knowing the way?</h2>
      </presentation-slide>
      <presentation-slide>
        <h2>Breadth First Search</h2>
        <pre style="text-align:left; font-size: 2rem;">
  const frontier = new Queue&lt;Cube>();
  frontier.push(start);
  const cameFrom = {};

  const neverVisitedNeighbors => (current: Cube) => 
    neighbors(current).filter(field => !cameFrom[next] || <span style="color: var(--colorHighlight);">isBlocked(field)</span>)

  while (frontier.length > 0) {
    const current = frontier.pop();
    for (const next of neverVisitedNeighbors(current)) {
      frontier.push(next);
      cameFrom[next] = current;
    }
  }
        </pre>
      </presentation-slide>
      <presentation-slide>
        <h2>Shortest Path</h2>
        <pre></pre>
        <hexagon-container 
          coordinates="even-q" 
          rows="4" cols="7" .label="${pathsTo.third.label}" 
          .selectDefault=${"0:0"} .pathFrom=${"0:0"} .pathTo="${pathsTo.third.target}"
          .blocked="${['4:0', '4:1', '4:2', '4:3']}"
        ></hexagon-container>
        <button @click="${() => {
          pathsTo.third.label = 'none';
          element.requestUpdate();
          setTimeout(() => {
            pathsTo.third.label =
              pathsTo.third.label === 'none'
                ? 'uncover-cube-breadth-distance'
                : 'none';
            element.requestUpdate();
          }, 1);
        }}">Trigger uncover the distance</button>
      </presentation-slide>
      <presentation-slide>
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
      </presentation-slide>
      <presentation-slide>
        <h1 class="lesson">Lesson 4</h1>
        <h2 class="lesson">The right line of code can improve your performance a lot, the right idea drastically so</h2>
      </presentation-slide>
      <presentation-slide>
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
      </presentation-slide>

      <presentation-slide>
        <h2>A* Shortest Path</h2>
        <pre></pre>
        <hexagon-container 
          coordinates="even-q" 
          rows="6" cols="9" .label="${pathsTo.fourth.label}" 
          .selectDefault=${"0:0"} .pathFrom=${"0:0"} .pathTo="${
            pathsTo.fourth.target
          }"
          .blocked="${['4:0', '4:1', '4:2', '4:3']}"
        ></hexagon-container>
        <button @click="${() => {
          pathsTo.fourth.label = 'none';
          element.requestUpdate();
          setTimeout(() => {
            pathsTo.fourth.label =
              pathsTo.fourth.label === 'none'
                ? 'uncover-cube-a*-distance'
                : 'none';
                element.requestUpdate();
          }, 1);
        }}">Trigger uncover the distance</button>
      </presentation-slide>
      <presentation-slide>
        <h2 class="pushToMiddle">And if it's not a wall but only a little muddy?</h2>
      </presentation-slide>
      <presentation-slide>
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
      </presentation-slide>
      <presentation-slide>
        <h2>A* Shortest Path</h2>
        <pre></pre>
        <hexagon-container 
          coordinates="even-q" 
          rows="6" cols="9" .label="${pathsTo.fifth.label}" 
          .selectDefault=${"0:0"} .pathFrom=${"0:0"} .pathTo="${
            pathsTo.fifth.target
          }" .showPath=${"taxicab"}
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
          pathsTo.fifth.label = 'none';
          element.requestUpdate();
          setTimeout(() => {
            pathsTo.fifth.label =
              pathsTo.fifth.label === 'none'
                ? 'uncover-cube-a*-distance'
                : 'none';
                element.requestUpdate();
          }, 1);
        }}">Trigger uncover the distance</button>
      </presentation-slide>
      <presentation-slide>
        <h2 class="pushToMiddle">Would you have found this solution if we'd started searching for a solution from the requirement of muddy roads?</h2>
      </presentation-slide>
      <presentation-slide>
        <h1 class="lesson">Lesson 5</h1>
        <h2 class="lesson">Not starting with the requirement but finding the path to the requirement will improve your solution</h2>
      </presentation-slide>
      <presentation-slide>
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
      </presentation-slide>
      
      <presentation-slide last>
        <div class="profile">
          <img class="round" src="images/mkainer.jpg" alt="Matthias Kainer" />
          <h5>Matthias Kainer</h5>
          <h6>Thoughtworks</h6>
          <div class="info">
            <div>
              <div class="title">
                <span class="icon-font">
                  <svg class="icon">
                    <use xlink:href="#icon-twitter"></use>
                  </svg>
                </span>
              </div>
              <div class="txt"><a href="https://twitter.com/MatKainer">@MatKainer</a></div>
            </div>

            <div>
              <div class="title">
                <span class="icon-font">
                  <svg class="icon">
                    <use xlink:href="#icon-github"></use>
                  </svg>
                </span>
              </div>
              <div class="txt"><a href="https://github.com/MatthiasKainer">MatthiasKainer</a></div>
            </div>

            <div>
              <div class="title">
                <span class="icon-font">
                  <svg class="icon">
                    <use xlink:href="#icon-linkedin"></use>
                  </svg>
                </span>
              </div>
              <div class="txt"><a href="https://linkedin.com/in/matthiaskainer">matthiaskainer</a></div>
            </div>

            <div>
              <div class="title">
                <span class="icon-font">
                  <svg class="icon">
                    <use xlink:href="#icon-link"></use>
                  </svg>
                </span>
              </div>
              <div class="txt"><a href="https://matthias-kainer.de">matthias-kainer.de</a></div>
            </div>
          </div>
        </div>
      </presentation-slide>
      </presentation-body>
      <svg hidden="hidden">
      <defs>
        <symbol id="icon-github" viewBox="0 0 32 32">
          <title>github</title>
          <path
            d="M16.192 0.512c-8.832 0-16 7.168-16 16 0 7.072 4.576 13.056 10.944 15.168 0.8 0.16 1.088-0.352 1.088-0.768 0-0.384 0-1.632-0.032-2.976-4.448 0.96-5.376-1.888-5.376-1.888-0.736-1.856-1.792-2.336-1.792-2.336-1.44-0.992 0.096-0.96 0.096-0.96 1.6 0.128 2.464 1.664 2.464 1.664 1.44 2.432 3.744 1.728 4.672 1.344 0.128-1.024 0.544-1.728 1.024-2.144-3.552-0.448-7.296-1.824-7.296-7.936 0-1.76 0.64-3.168 1.664-4.288-0.16-0.416-0.704-2.016 0.16-4.224 0 0 1.344-0.416 4.416 1.632 1.28-0.352 2.656-0.544 4-0.544s2.72 0.192 4 0.544c3.040-2.080 4.384-1.632 4.384-1.632 0.864 2.208 0.32 3.84 0.16 4.224 1.024 1.12 1.632 2.56 1.632 4.288 0 6.144-3.744 7.488-7.296 7.904 0.576 0.512 1.088 1.472 1.088 2.976 0 2.144-0.032 3.872-0.032 4.384 0 0.416 0.288 0.928 1.088 0.768 6.368-2.112 10.944-8.128 10.944-15.168 0-8.896-7.168-16.032-16-16.032z"
          ></path>
          <path
            d="M6.24 23.488c-0.032 0.064-0.16 0.096-0.288 0.064-0.128-0.064-0.192-0.16-0.128-0.256 0.032-0.096 0.16-0.096 0.288-0.064 0.128 0.064 0.192 0.16 0.128 0.256v0z"
          ></path>
          <path
            d="M6.912 24.192c-0.064 0.064-0.224 0.032-0.32-0.064s-0.128-0.256-0.032-0.32c0.064-0.064 0.224-0.032 0.32 0.064s0.096 0.256 0.032 0.32v0z"
          ></path>
          <path
            d="M7.52 25.12c-0.096 0.064-0.256 0-0.352-0.128s-0.096-0.32 0-0.384c0.096-0.064 0.256 0 0.352 0.128 0.128 0.128 0.128 0.32 0 0.384v0z"
          ></path>
          <path
            d="M8.384 26.016c-0.096 0.096-0.288 0.064-0.416-0.064s-0.192-0.32-0.096-0.416c0.096-0.096 0.288-0.064 0.416 0.064 0.16 0.128 0.192 0.32 0.096 0.416v0z"
          ></path>
          <path
            d="M9.6 26.528c-0.032 0.128-0.224 0.192-0.384 0.128-0.192-0.064-0.288-0.192-0.256-0.32s0.224-0.192 0.416-0.128c0.128 0.032 0.256 0.192 0.224 0.32v0z"
          ></path>
          <path
            d="M10.912 26.624c0 0.128-0.16 0.256-0.352 0.256s-0.352-0.096-0.352-0.224c0-0.128 0.16-0.256 0.352-0.256 0.192-0.032 0.352 0.096 0.352 0.224v0z"
          ></path>
          <path
            d="M12.128 26.4c0.032 0.128-0.096 0.256-0.288 0.288s-0.352-0.032-0.384-0.16c-0.032-0.128 0.096-0.256 0.288-0.288s0.352 0.032 0.384 0.16v0z"
          ></path>
        </symbol>

        <symbol id="icon-location" viewBox="0 0 32 32">
          <title>location</title>
          <path
            d="M16 31.68c-0.352 0-0.672-0.064-1.024-0.16-0.8-0.256-1.44-0.832-1.824-1.6l-6.784-13.632c-1.664-3.36-1.568-7.328 0.32-10.592 1.856-3.2 4.992-5.152 8.608-5.376h1.376c3.648 0.224 6.752 2.176 8.608 5.376 1.888 3.264 2.016 7.232 0.352 10.592l-6.816 13.664c-0.288 0.608-0.8 1.12-1.408 1.408-0.448 0.224-0.928 0.32-1.408 0.32zM15.392 2.368c-2.88 0.192-5.408 1.76-6.912 4.352-1.536 2.688-1.632 5.92-0.288 8.672l6.816 13.632c0.128 0.256 0.352 0.448 0.64 0.544s0.576 0.064 0.832-0.064c0.224-0.096 0.384-0.288 0.48-0.48l6.816-13.664c1.376-2.752 1.248-5.984-0.288-8.672-1.472-2.56-4-4.128-6.88-4.32h-1.216zM16 17.888c-3.264 0-5.92-2.656-5.92-5.92 0-3.232 2.656-5.888 5.92-5.888s5.92 2.656 5.92 5.92c0 3.264-2.656 5.888-5.92 5.888zM16 8.128c-2.144 0-3.872 1.728-3.872 3.872s1.728 3.872 3.872 3.872 3.872-1.728 3.872-3.872c0-2.144-1.76-3.872-3.872-3.872z"
          ></path>
          <path
            d="M16 32c-0.384 0-0.736-0.064-1.12-0.192-0.864-0.288-1.568-0.928-1.984-1.728l-6.784-13.664c-1.728-3.456-1.6-7.52 0.352-10.912 1.888-3.264 5.088-5.28 8.832-5.504h1.376c3.744 0.224 6.976 2.24 8.864 5.536 1.952 3.36 2.080 7.424 0.352 10.912l-6.784 13.632c-0.32 0.672-0.896 1.216-1.568 1.568-0.48 0.224-0.992 0.352-1.536 0.352zM15.36 0.64h-0.064c-3.488 0.224-6.56 2.112-8.32 5.216-1.824 3.168-1.952 7.040-0.32 10.304l6.816 13.632c0.32 0.672 0.928 1.184 1.632 1.44s1.472 0.192 2.176-0.16c0.544-0.288 1.024-0.736 1.28-1.28l6.816-13.632c1.632-3.264 1.504-7.136-0.32-10.304-1.824-3.104-4.864-5.024-8.384-5.216h-1.312zM16 29.952c-0.16 0-0.32-0.032-0.448-0.064-0.352-0.128-0.64-0.384-0.8-0.704l-6.816-13.664c-1.408-2.848-1.312-6.176 0.288-8.96 1.536-2.656 4.16-4.32 7.168-4.512h1.216c3.040 0.192 5.632 1.824 7.2 4.512 1.6 2.752 1.696 6.112 0.288 8.96l-6.848 13.632c-0.128 0.288-0.352 0.512-0.64 0.64-0.192 0.096-0.384 0.16-0.608 0.16zM15.424 2.688c-2.784 0.192-5.216 1.696-6.656 4.192-1.504 2.592-1.6 5.696-0.256 8.352l6.816 13.632c0.096 0.192 0.256 0.32 0.448 0.384s0.416 0.064 0.608-0.032c0.16-0.064 0.288-0.192 0.352-0.352l6.816-13.664c1.312-2.656 1.216-5.792-0.288-8.352-1.472-2.464-3.904-4-6.688-4.16h-1.152zM16 18.208c-3.424 0-6.24-2.784-6.24-6.24 0-3.424 2.816-6.208 6.24-6.208s6.24 2.784 6.24 6.24c0 3.424-2.816 6.208-6.24 6.208zM16 6.4c-3.072 0-5.6 2.496-5.6 5.6 0 3.072 2.528 5.6 5.6 5.6s5.6-2.496 5.6-5.6c0-3.104-2.528-5.6-5.6-5.6zM16 16.16c-2.304 0-4.16-1.888-4.16-4.16s1.888-4.16 4.16-4.16c2.304 0 4.16 1.888 4.16 4.16s-1.856 4.16-4.16 4.16zM16 8.448c-1.952 0-3.552 1.6-3.552 3.552s1.6 3.552 3.552 3.552c1.952 0 3.552-1.6 3.552-3.552s-1.6-3.552-3.552-3.552z"
          ></path>
        </symbol>

        <symbol id="icon-twitter" viewBox="0 0 32 32">
          <title>twitter</title>
          <path
            d="M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"
          ></path>
        </symbol>

        <symbol id="icon-link" viewBox="0 0 32 32">
          <title>link</title>
          <path
            d="M17.984 11.456c-0.704 0.704-0.704 1.856 0 2.56 2.112 2.112 2.112 5.568 0 7.68l-5.12 5.12c-2.048 2.048-5.632 2.048-7.68 0-1.024-1.024-1.6-2.4-1.6-3.84s0.576-2.816 1.6-3.84c0.704-0.704 0.704-1.856 0-2.56s-1.856-0.704-2.56 0c-1.696 1.696-2.624 3.968-2.624 6.368 0 2.432 0.928 4.672 2.656 6.4 1.696 1.696 3.968 2.656 6.4 2.656s4.672-0.928 6.4-2.656l5.12-5.12c3.52-3.52 3.52-9.248 0-12.8-0.736-0.672-1.888-0.672-2.592 0.032z"
          ></path>
          <path
            d="M29.344 2.656c-1.696-1.728-3.968-2.656-6.4-2.656s-4.672 0.928-6.4 2.656l-5.12 5.12c-3.52 3.52-3.52 9.248 0 12.8 0.352 0.352 0.8 0.544 1.28 0.544s0.928-0.192 1.28-0.544c0.704-0.704 0.704-1.856 0-2.56-2.112-2.112-2.112-5.568 0-7.68l5.12-5.12c2.048-2.048 5.632-2.048 7.68 0 1.024 1.024 1.6 2.4 1.6 3.84s-0.576 2.816-1.6 3.84c-0.704 0.704-0.704 1.856 0 2.56s1.856 0.704 2.56 0c1.696-1.696 2.656-3.968 2.656-6.4s-0.928-4.704-2.656-6.4z"
          ></path>
        </symbol>

        <symbol id="icon-linkedin" viewBox="0 0 97.75 97.75">
          <title>linkedin</title>
          <path
            d="M48.875,0C21.882,0,0,21.882,0,48.875S21.882,97.75,48.875,97.75S97.75,75.868,97.75,48.875S75.868,0,48.875,0z
                     M30.562,81.966h-13.74V37.758h13.74V81.966z M23.695,31.715c-4.404,0-7.969-3.57-7.969-7.968c0.001-4.394,3.565-7.964,7.969-7.964
                    c4.392,0,7.962,3.57,7.962,7.964C31.657,28.146,28.086,31.715,23.695,31.715z M82.023,81.966H68.294V60.467
                    c0-5.127-0.095-11.721-7.142-11.721c-7.146,0-8.245,5.584-8.245,11.35v21.869H39.179V37.758h13.178v6.041h0.185
                    c1.835-3.476,6.315-7.14,13-7.14c13.913,0,16.481,9.156,16.481,21.059V81.966z"
          />
        </symbol>
      </defs>
    </svg>
    `,
  {
    styles,
  }
);