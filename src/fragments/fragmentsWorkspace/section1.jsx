import React from "react";

const Section1 = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="min-h-[87vh] max-w-7xl mx-auto flex flex-col gap-3 justify-center items-center">
      <div className="text-center bg-slate-50 border border-slate-300 rounded-md p-1">
        <p>Product Announcements</p>
      </div>
      <h1 className="text-4xl font-bold">
        A new era for AI and Google Workspace
      </h1>
      <p className="text-slate-600 font-normal">{formattedDate}</p>
      <div>
        <img
          src="https://storage.googleapis.com/gweb-cloudblog-publish/images/19410___Workspace_AU_moment_blog_header___.max-2500x2500.jpg"
          alt="hero-Section"
        />
      </div>
    </section>
  );
};

export default Section1;
