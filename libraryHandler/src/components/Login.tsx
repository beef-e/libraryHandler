function Login() {
	return (
		<div className="container bg-secondary dimensione-fissa rounded-3">
			<h4 className="display-3 mt-5">Login</h4>

			<form>
				<div className="mb-3 mt-3">
					<div className="form-floating mb-3">
						<input
							type="text"
							className="form-control rounded-3"
							id="floatingUsername"
							placeholder="Username"
							required
						/>
						<label
							htmlFor="floatingUsername"
							className="form-label">
							Username
						</label>
					</div>

					<div className="form-floating mb-3">
						<input
							type="password"
							className="form-control rounded-3"
							id="floatingPassword"
							placeholder="Password"
							required
						/>
						<label
							htmlFor="floatingPassword"
							className="form-label">
							Password
						</label>
					</div>

					<button
						type="submit"
						className="btn btn-primary mb-3 rounded-3">
						Submit
					</button>
				</div>
			</form>
		</div>
	);
}

export default Login;
