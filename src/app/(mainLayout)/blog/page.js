import loadBlogsData from "@/utils/loadBlogsData";
import Link from "next/link";
import React from "react";

const BlogPage = async () => {
  const bolgs = await loadBlogsData();
  return (
    <div className="container mx-auto">
      {bolgs.map(({ id, title, body }) => (
        <div key={id} className="border-2 border-black p-4 m-2">
          <h1 className="inline-block">{id}</h1> . <p className="inline-block">{title}</p>
          <p>{body}</p>
       <Link className="mt-3 inline-block" href={`/blog/${id}`}>
        <button className="px-2 py-1 bg-blue-500 ">read more</button>
       </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
