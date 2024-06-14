import Link from 'next/link';
import paths from '@/paths';
import PostShow from '@/components/posts/post-show';

export default async function PostShowPage({ params }) {
  const { slug, postId } = params;

  return (
    <div className='space-y-3'>
      <Link className='underline decoration-solid' href={paths.topicShow(slug)}>
        {'< '}Back to {slug}
      </Link>
      <PostShow postId={postId} />
      {/* <CommentCreateForm postId={postId} startOpen /> */}
      {/* <CommentList comments={comments} /> */}
    </div>
  );
}
