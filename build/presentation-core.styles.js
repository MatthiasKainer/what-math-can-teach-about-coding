import { css } from "lit";
export default css `
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
    .pushToMiddle, .title {
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
    .profile {
      margin-top: 20px;
  }
  
  .profile .round {
      max-width: 25%;
    border: 1px solid var(--colorHighlight);
    border-radius: 50%;
    padding: 7px;
  }
  .profile h5 {
    margin: 10px 0;
      font-size: 3rem;
  }
  .profile h6 {
    margin: 5px 0;
      font-size: 2rem;
    text-transform: uppercase;
  }
  .profile .info {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: flex-start;
      margin-top: 35px;
  }
  
  .profile .info > div {
      padding: 10px 35px;
      min-width: 150px;
  }
  
  .profile .info .title {
      align-items: center;
      justify-content: center;
  }
  .icon {
    display: inline-block;
    width: 5rem;
    height: 5rem;
    margin-bottom: 20px;
    stroke-width: 0;
  }
  .icon-font {
    display: inline-flex;
  }
  `;
//# sourceMappingURL=presentation-core.styles.js.map