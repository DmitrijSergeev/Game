import {AppComponent} from "./components/App.component.js";
import {subscribe, unSubscribe} from "../core/state-manager.js";

const rootElement = document.getElementById('root');

function renderApp (){
    rootElement.innerHTML = '';

    const appComponent = AppComponent();

    rootElement.append(appComponent.element);
}
renderApp()

subscribe(renderApp)
//unSubscribe(renderApp)