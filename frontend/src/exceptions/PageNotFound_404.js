import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound_404() {
  return (
    <div className="w-full h-dvh bg-slate-400 flex items-center justify-center">
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-4xl">404 - Page Not Found</h1>
        <p className="italic font-medium">The page you are looking for does not exist.</p>
        <Link to={'/'} className="underline font-medium text-blue-600">
            Back to Home
        </Link>
      </div>
    </div>
  );
}
