import { signup } from "./actions";

export default function SignUpPage() {
  return (
    <form>
      <div>
        <label htmlFor="name">First Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your First Name"
          required
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Enter your password"
          required
        />
      </div>
      <div>
        <button formAction={login} type="submit">
          Log in
        </button>
        <button formAction={signup} type="submit">
          Sign up
        </button>
      </div>
    </form>
  );
}
