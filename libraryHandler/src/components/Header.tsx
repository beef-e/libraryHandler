function Header() {
	return (
		<header className="navbar navbar-expand-lg bg-primary sticky-top">
			<div className="container-fluid">
				<a className="navbar-brand">LybraryHandler</a>

				<ul className="navbar-nav me-auto mb-2 mb-lg-0">
					<li className="nav-item">
						<a
							className="nav-link"
							href="/">
							Home
						</a>
					</li>

					<li className="nav-item">
						<a
							className="nav-link"
							href="/books">
							Books
						</a>
					</li>

					<li className="nav-item">
						<a
							className="nav-link"
							href="/help">
							Help
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
