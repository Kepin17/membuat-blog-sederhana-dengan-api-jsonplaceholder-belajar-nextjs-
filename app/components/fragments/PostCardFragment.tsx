type PostCardFragmentProps = {
  title: string;
  description: string;
};

const PostCardFragment = ({ title, description }: PostCardFragmentProps) => {
  return (
    <div className="card-wrapper flex flex-col gap-5">
      <article className="card mt-4 p-4 bg-gray-700 rounded">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-2">{description}</p>
        <button className="mt-4 p-2 bg-blue-600 rounded cursor-pointer">Read More</button>
      </article>
    </div>
  );
};

export default PostCardFragment;
