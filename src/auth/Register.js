import { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table({ name, email, password });
  };

  const registerForm = () => (
    <form onSubmit={handleSubmit} className="mt-3">
      <div className="form-group mb-3">
        <label className="form-label">Name:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <label className="form-label">Email:</label>
        <input
          type="text"
          className="form-control"
          placeholder="emailgoeshere@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="form-group mb-3">
        <label className="form-label">Password:</label>
        <input
          type="text"
          className="form-control"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-primary form-control">Submit</button>
      </div>
    </form>
  );

  return (
    <>
      <div className="container-fluid bg-secondary p-5 text-center">
        <h1>Register</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">{registerForm()}</div>
        </div>
      </div>
    </>
  );
};

export default Register;
