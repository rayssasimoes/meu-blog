import LikeButton from "@/app/_components/LikeButton";
import { getPostBySlug } from "@/app/_lib/Post";
import { notFound } from "next/navigation";

interface PostPageProps {
    params : { slug: string }
}

export default async function PostPage({params}: PostPageProps) {
    const {slug} = await params;
    const post = getPostBySlug(slug)
    console.log(post)
    if (!post) {
        notFound();
    }
    return (
        <div className="flex flex-col">
            <div className="w-[50%] m-auto">
                <div><h1 className = "text-2xl text-gray-800">{post.title}</h1></div>
                <span className = "text-gray-400 text-3 text-left">{post.author}</span>
                <div className="mb-4">{post.content}</div>
                <LikeButton />
            </div>
        </div>
    );
}
