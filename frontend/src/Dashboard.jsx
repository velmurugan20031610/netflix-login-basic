export default function Dashboard() {
  return (
    <div className="w-full h-screen bg-black text-white flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-4">🎉 Login Successful!</h1>
      <p className="text-xl mb-6">Welcome to your Netflix Dashboard</p>

      <button
        onClick={() => (window.location.href = "/")}
        className="bg-red-600 px-6 py-3 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </div>
  );
}
