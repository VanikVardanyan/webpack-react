import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { App } from "./App";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

const portalDiv = document.getElementById("root")!;
const root = ReactDOM.createRoot(portalDiv);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
);
