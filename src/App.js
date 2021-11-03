import logo from './logo.svg';
import './App.css';
import Amplify from "aws-amplify";
import {AmplifyAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";
import awsconfig from "./awsconfig";
import { API } from 'aws-amplify'

const useAPIGateWay = () => {
  /**
   * 呼叫api
   */
  const getTodo = () => {
    API.get('myapi', `/todo`, {})
      .then((data) => {
        console.log('data', data);
      })
      .catch((e) => {
        console.log('[device]  錯誤', e)
      })
  }
  return {
    getTodo
  }
}


function App() {
  // 設定amplify服務
  Amplify.configure(awsconfig);

  const { getTodo } = useAPIGateWay();
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
          <button onClick={() => getTodo()}>呼叫api</button>
        <AmplifySignOut />
        </header>
      </div>
    </AmplifyAuthenticator>
  );
}

export default App;
