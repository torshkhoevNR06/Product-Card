export default class Modal {
	constructor(modal) {
		this.modal = document.getElementById(`${modal}`);
	}

	openModal() {
			this.modal.classList.remove('close-modal');
			this.modal.classList.add('open-modal');
	}
	
	closeModal() {
		this.modal.classList.add('close-modal');
		this.modal.classList.remove('open-modal');
	}

	windowCheck() {
		return this.modal.classList.contains('open-modal');
	}
}