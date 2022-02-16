import "./App.css";
import { Route, Switch } from "react-router-dom";
import { renderRoutesAdmin } from "./routes";
import { lazy, Suspense } from "react";

function App(props) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {renderRoutesAdmin(props.history)}
        <Route path="/" component={lazy(() => import("./layout/Auth/Auth"))} />
        <Route
          path="**"
          component={lazy(() => import("./layout/PageNotFound"))}
        />
      </Switch>
    </Suspense>
  );
}

export default App;
