function BorrowBook() {
	return (
		<div className="container mt-5">
			<form className="mx-auto text-center">
				<h1>Noleggia un libro</h1>

				<div className="form-floating mb-4">
					<input
						type="text"
						className="form-control bg-secondary rounded-3"
						id="floatingBookName"
						placeholder="Nome"
					/>
					<label
						htmlFor="floatingBookName"
						className="form-label">
						Nome del libro
					</label>
				</div>

				<div className="form-floating mb-4">
					<input
						type="numert"
						className="form-control bg-secondary rounded-3"
						id="FloatingBookID"
						placeholder="ID"
					/>
					<label
						htmlFor="FloatingBookID"
						className="form-label">
						Id del Libro
					</label>
				</div>

				<button
					type="submit"
					className="btn btn-lg btn-primary mb-3 rounded-3">
					Richiedi noleggio
				</button>
			</form>
		</div>
	);
}

export default BorrowBook;
