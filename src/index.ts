import {messages} from "./messages";

document.querySelectorAll("[data-translate]").forEach((element: Element) => {
	if (element instanceof HTMLElement) {
		const ex = element.dataset['translate'];
		const [k, v] = ex.split("=");
		element[k] = messages.en.profile[v];
	}
});
