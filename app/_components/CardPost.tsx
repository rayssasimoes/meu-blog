import Link from "next/link";
import { Post } from "@/app/_lib/Post";

interface CardPostProps {
    post: Post;
}

export default function CardPost({ post }: CardPostProps) {
    return (
        <div className="border p-3 border-gray-600 rounded w-[500px] flex flex-col mb-2.5" key={post.slug}>
            <h1>{post.title}</h1>
            <p>{post.excerpt}</p>
            <Link className="text-blue-500 text-3 hover:text-blue-700" href={`/posts/${post.slug}`}>Ler mais</Link>
        </div>
    )
}
