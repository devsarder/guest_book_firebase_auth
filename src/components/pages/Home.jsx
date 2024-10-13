import { useState } from "react";
import Swal from "sweetalert2";
import WelcomeImage from "../../assets/images/Welcome-cuate.png"; // Make sure to update the path
import { useAuth } from "../../hooks/useAuth";

export const Home = () => {
  const [comment, setComment] = useState("");
  const { user, loading, error } = useAuth();
  if (loading) return <p>User Info Is Loading..</p>;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Comment submitted:", comment);
    setComment("");
    Swal.fire({
      title: "Thank You!",
      text: "Your comment has been submitted successfully. I appreciate your feedback!",
      icon: "success",
      confirmButtonText: "Awesome!",
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-4xl w-full flex flex-col md:flex-row items-center">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-3xl text-left font-bold text-gray-800 mb-6">
            Leave Comments for me!
          </h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="comment"
                className="block text-gray-700 font-medium mb-2"
              >
                Your Comment
              </label>
              <textarea
                id="comment"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                rows="4"
                placeholder="Write your comment here..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              />
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={WelcomeImage}
            alt="Welcome"
            className="w-full h-auto max-w-xs"
          />
        </div>
      </div>
    </div>
  );
};
