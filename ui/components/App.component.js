import {getGooglePoints, getPlayerPoints} from "../../core/state-manager.js";
import {SettingsComponent} from "./Settings/Settings.component.js";
import {ResultPanelComponent} from "./ResultPanel/ResultPannel.component.js";
import {GridComponent} from "./Grid/Grid.component.js";

export function AppComponent() {
    const element = document.createElement('div')

    const settingsComponent = SettingsComponent();
    const resultPanelComponent = ResultPanelComponent();
    const gridComponent = GridComponent();

    element.append(settingsComponent.element, resultPanelComponent.element, gridComponent.element)

    return {element};
}