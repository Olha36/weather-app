
export default function SignUp() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Sign Up</h1>
      <form>
        <input type="text" placeholder="Username" /> <br />
        <input type="email" placeholder="Email" /> <br />
        <input type="password" placeholder="Password" /> <br />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}
