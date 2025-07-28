import Button from "./components/elements/Button";
import Title from "./components/elements/Title";
import SubTitle from "./components/elements/SubTitle";
import PostCardFragment from "./components/fragments/PostCardFragment";

const baseUrl = "https://jsonplaceholder.typicode.com/posts";

type PostType = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function Home() {
  const res = await fetch(baseUrl, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  const data: PostType[] = await res.json();
  return (
    <>
      <main className="w-full h-screen overflow-scroll p-4 bg-gray-800 text-white">
        <Title>Welcome to My Blog</Title>
        <Button>Create New Post</Button>
        <section id="post">
          <SubTitle>Latest Posts</SubTitle>
          {data.map((post) => {
            return <PostCardFragment key={post.id} title={post.title} description={post.body} />;
          })}
        </section>
      </main>
    </>
  );
}
