
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-50">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-8">Page Not Found</p>
      <a href="/" className="text-indigo-600 hover:underline">
        Go back to Home
      </a>
    </div>
  );
};

export default NotFound;
