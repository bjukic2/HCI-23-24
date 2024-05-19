import { Post } from '../page';

interface Params {
  postId: string;
}

const BASE_API_URL = 'https://jsonplaceholder.typicode.com';

const getPost = async (id: string): Promise<Post> => {
  const data = await fetch(`${BASE_API_URL}/posts/${id}`);
  return data.json();
};

export default async function BlogPost({ params }: { params: Params }) {
  const post = await getPost(params.postId);

  return (
    <main className="m-auto flex min-h-screen max-w-5xl flex-col items-center p-10">
      <h1 className="p-10 text-3xl font-bold capitalize">
        <span className="text-neutral-400">Post {post.id}:</span> {post.title}
      </h1>
      <p className="p-10 text-xl text-black">{post.body}</p>
    </main>
  );
}
