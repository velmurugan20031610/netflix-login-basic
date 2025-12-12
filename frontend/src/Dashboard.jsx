export default function Dashboard() {
  return (
    <div className="w-full h-screen bg-black flex flex-col justify-center items-center text-white">
      <h1 className="text-4xl font-bold mb-4 text-red-600">🎉 Login Successful!</h1>

      <p className="text-lg mb-6 text-gray-300">
        Welcome to your Netflix Dashboard
      </p>

      <button
        onClick={() => (window.location.href = "/")}
        className="bg-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all"
      >
        Logout
      </button>
    </div>
  );
}
