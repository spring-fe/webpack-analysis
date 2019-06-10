import {world} from "./module.js";

function component() {
    const element = document.createElement('div');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = world();

    return element;
}

document.body.appendChild(component());