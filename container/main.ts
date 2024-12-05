import { initFederation } from '@softarc/native-federation';

(async () => {

    await initFederation({
        "mfe-react": "http://localhost:3001/remoteEntry.json"
    });
    
    await import('./bootstrap');

})();
