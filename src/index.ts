import {messages} from "./messages";

document.querySelectorAll("[data-translate]").forEach((element: Element) => {
    if (element instanceof HTMLElement) {
        const ex = element.dataset['translate'];
        if (ex.indexOf("=") >= 0) {
            const [k, v] = ex.split("=");
            element.setAttribute(k, messages.en[v]);
        } else {
			element.innerText = messages.en[ex];
        }
    }
});
