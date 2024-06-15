import {SettingsComponent} from "./Settings/Settings.component.js";
import {ResultPanelComponent} from "./ResultPanel/ResultPannel.component.js";
import {GridComponent} from "./Grid/Grid.component.js";

export function AppComponent() {
    const element = document.createElement('div')

    render(element);

    return {element};
}

async function render (element) {
    const settingsComponent = SettingsComponent();
    const resultPanelComponent = ResultPanelComponent();
    const gridComponent = GridComponent();

    element.append(settingsComponent.element, resultPanelComponent.element, gridComponent.element)
}