// import logo from './logo.svg';
import './App.css';
import Amplify from "aws-amplify";
import {AmplifyAuthenticator} from "@aws-amplify/ui-react";
import awsconfig from "./awsconfig";

import { HomePage } from "./pages/index";


function App() {
  // 設定amplify服務
  Amplify.configure(awsconfig);
  return (
    <AmplifyAuthenticator>
      <div className="App">
        <HomePage />
      </div>
    </AmplifyAuthenticator>
  );
}

export default App;
