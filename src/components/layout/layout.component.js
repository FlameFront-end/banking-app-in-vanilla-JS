export class Layout {
	constructor({ router, children }) {
		this.router = router
		this.children = children
	}

	render() {
		const headerHTML = '<header>Header</header> <a href="/auth">Auth</a>'

		return `
			${headerHTML}
			<main>
				${this.children}
			</main>
		`
	}
}
