export class Modal {
	constructor(modalId, buttonId, shouldCloseOnOverlay) {
		this.overlay = document.getElementById("overlay");
		this.modal = document.getElementById(modalId);
		this.closeButton = this.modal.querySelector("#modal-close-button");
		this.#initOpen(buttonId);
		this.shouldCloseOnOverlay = shouldCloseOnOverlay;
		this.closeOverlay = () => this.close();
	}

	open() {
		this.#initClose();
		this.modal.classList.add("modal-showed");
		this.overlay.classList.add("overlay-showed");
	}

	close() {
		this.#removeCloseListeners();
		this.modal.classList.remove("modal-showed");
		this.overlay.classList.remove("overlay-showed");
	}

	isOpen() {
		return this.modal.classList.contains("modal-showed");
	}

	#initOpen(buttonId) {
		const button = document.getElementById(buttonId);
		button.addEventListener("click", () => this.open());
	}

	#initClose() {
		this.closeButton.addEventListener("click", this.closeOverlay);

		if (this.shouldCloseOnOverlay) {
			this.overlay.addEventListener("click", this.closeOverlay);
		}
	}

	#removeCloseListeners() {
		this.closeButton.removeEventListener("click", this.closeOverlay);
		this.overlay.removeEventListener("click", this.closeOverlay);
	}
}