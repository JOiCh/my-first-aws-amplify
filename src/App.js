import logo from './logo.svg';
import './App.css';
import Amplify from "aws-amplify";
import {AmplifyAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import awsconfig from "./awsconfig";


function App() {
  // 設定amplify服務
  Amplify.configure(awsconfig);
  return (
    <AmplifyAuthenticator>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        <AmplifySignOut />
        </header>
      </div>
    </AmplifyAuthenticator>
  );
}

export default App;
