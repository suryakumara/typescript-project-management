"use strict";
class ProjectInput {
    constructor() {
        this.templateElement = document.getElementById("project-input");
        this.hostELement = document.getElementById("app");
        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild;
        this.element.id = "user-input";
        this.attach();
    }
    attach() {
        this.hostELement.insertAdjacentElement("afterbegin", this.element);
    }
}
const prjInput = new ProjectInput();
//# sourceMappingURL=app.js.map