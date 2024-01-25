import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div class="titleDiv">Stay updated!</div>
      <div class="subtitleDiv">
        Join 60,000+ product managers receiving monthly updates on:
      </div>
      <ul>
        <li>Product discovery and building what matters</li>
        <li>Measuring to ensure updates are a success</li>
        <li>And much more!</li>
      </ul>
      <form>
        <div class="labelDiv">
          <label for="email">Email address</label>
        </div>
        <input type="text" placeholder="email@company.com" />
      </form>

      <button class="Button">Subscribe to monthly newsletter</button>

      <div class="sucessWarning">
        <h1>Thanks for subscribing!</h1>
        <p>
          {" "}
          A confirmation email has been sent to ash@loremcompany com. Please
          open  it and click the button inside to confirm your subscription.
        </p>
        <button class="Button">Dismiss message</button>
      </div>

      <div class="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
      </div>
    </div>
  );
}

export default App;
