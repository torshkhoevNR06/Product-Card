export class Modal {
	constructor(modalId, buttonId, shouldCloseOnOverlay) {
		this.overlay = document.getElementById("overlay");
		this.modal = document.getElementById(modalId);
		this.#initOpen(buttonId);
		this.shouldCloseOnOverlay = shouldCloseOnOverlay;
	}

	open() {
		this.#initClose(this.shouldCloseOnOverlay);
		this.modal.classList.add("modal-showed");
		this.overlay.classList.add("overlay-showed");
	}

	close() {
		this.#removeEventListener();
		this.modal.classList.remove("modal-showed");
		this.overlay.classList.remove("overlay-showed");
	}

	isOpen() {
		return this.modal.classList.contains("modal-showed");
	}

	#initOpen(buttonId) {
		const button = document.getElementById(buttonId);
		button.addEventListener("click", () => this.open(this.shouldCloseOnOverlay));
	}

	#initClose(shouldCloseOnOverlay) {
		this.closeOverlay = () => this.close();
		const closeButton = this.modal.querySelector("#modal-close-button");
		closeButton.addEventListener("click", this.closeOverlay);

		if (shouldCloseOnOverlay) {
			this.overlay.addEventListener("click", this.closeOverlay);
		}
	}

	#removeEventListener() {	
		const closeButton = this.modal.querySelector("#modal-close-button");
		closeButton.removeEventListener("click", this.closeOverlay);
		this.overlay.removeEventListener("click", this.closeOverlay);
	}
}