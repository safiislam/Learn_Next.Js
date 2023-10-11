import loadSigleBlogData from "@/utils/loadSigleBlogData";

export const generateMetadata = async ({ params }) => {
  const { title } = await loadSigleBlogData(params.id);
  return {
    title: title,
  };
};

const SinglePosts = async ({ params }) => {
  const { id, title, body } = await loadSigleBlogData(params.id);

  return (
    <div key={id} className="border-2 border-black p-4 m-2">
      <h1 className="inline-block">{id}</h1> .{" "}
      <p className="inline-block">{title}</p>
      <p>{body}</p>
    </div>
  );
};

export default SinglePosts;
