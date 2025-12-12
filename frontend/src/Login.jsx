export default function Login() {
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <div className="w-[350px] bg-opacity-60 bg-zinc-900 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-red-600 text-center mb-6">NETFLIX</h1>

        <form className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-3 bg-zinc-800 rounded outline-none text-white"
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 bg-zinc-800 rounded outline-none text-white"
          />

          <button
            type="submit"
            className="bg-red-600 rounded p-3 font-semibold hover:bg-red-700 text-white"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/dashboard";
            }}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
