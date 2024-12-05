import React from "react";
import { loadRemoteModule } from "@softarc/native-federation";

const ReactApp = React.lazy(() =>
    loadRemoteModule({
        remoteName: "mfe-react",
        exposedModule: "./component",
    })
    .then((c) => {
      return { default: c.App };
    })
);

const styleContainer = {
  marginTop: '16px',
  padding: '16px',
  border: '1px solid black',
}

const styleContainerHeader = {
  marginBottom: '16px',
  padding: '16px',
  fontSize: '20px',
  backgroundColor: '#3f51b5',
  color: '#fff',
}

const styleInstance = {
  border: '1px dashed black',
  padding: '16px',
}

export function App() {
  return (
    <div>
      <h1>Microfrontend PoC - Native Federation</h1>
      <hr />
      <React.Suspense fallback="...">
      {/* React MFE */}
        <div style={styleContainer}>
          <div style={styleContainerHeader}>
            Container for React microfrontend
          </div>
          <div style={styleInstance}>
            <ReactApp />
          </div>
        </div>
        {/* Vanilla MFE */}
        {/* <div style={styleContainer}>
          <div style={styleContainerHeader}>
            Container for Vanilla JS microfrontend
          </div>
          <div style={styleInstance}>
            <VanillaApp />
          </div>
        </div> */}
      </React.Suspense>
    </div>
  );
}
