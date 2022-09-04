import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'AboutLayout'

export async function getStaticProps() {
  const aboutDetails = await getFileBySlug('about', 'about')
  return { props: { aboutDetails } }
}

export default function About({ aboutDetails }) {
  const { mdxSource, frontMatter } = aboutDetails

  return (
    <MDXLayoutRenderer layout={DEFAULT_LAYOUT} mdxSource={mdxSource} frontMatter={frontMatter} />
  )
}
