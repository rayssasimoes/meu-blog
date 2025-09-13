import Link from 'next/link';
import { getAllPosts } from './_lib/Post';
import CardPost from './_components/CardPost';

export default function Home() {
  const posts = getAllPosts()
  return (
    <div className="flex flex-col items-center">
      {posts.map((post) => (
        <CardPost key={post.slug} post={post} />
      ))}
    </div>
  );
}
