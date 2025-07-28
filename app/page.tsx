import Image from "next/image";

export default function Home() {
  return (
    <>
      <main className="w-full h-screen p-4 bg-gray-800 text-white">
        <h1 className="font-bold text-3xl">Welcome to My Blog</h1>
        <button className="mt-4 p-2 bg-blue-600 rounded cursor-pointer">Post new article</button>
        <section id="post">
          <h2 className="mt-6 text-2xl">Latest Posts</h2>
          <div className=" flex flex-col gap-5">
            <article className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-xl font-semibold">Post Title</h3>
              <p className="mt-2">This is a brief description of the post content.</p>
              <button className="mt-4 p-2 bg-blue-600 rounded cursor-pointer">Read More</button>
            </article>
            <article className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-xl font-semibold">Post Title</h3>
              <p className="mt-2">This is a brief description of the post content.</p>
              <button className="mt-4 p-2 bg-blue-600 rounded cursor-pointer">Read More</button>
            </article>
            <article className="mt-4 p-4 bg-gray-700 rounded">
              <h3 className="text-xl font-semibold">Post Title</h3>
              <p className="mt-2">This is a brief description of the post content.</p>
              <button className="mt-4 p-2 bg-blue-600 rounded cursor-pointer">Read More</button>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
