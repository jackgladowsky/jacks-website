import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Jack's Portfolio
      </h1>
      <p className="mb-4">
        {`I'm a computer engineering student at Northeastern University with a 
        focus on building smart, scalable software at the intersection of AI and 
        embedded systems. I love working on startup-style projects—especially tools 
        that solve real problems with automation, machine learning, or thoughtful 
        UX. Recently, I've been building SaaS products powered by LLMs, exploring 
        how AI can drive insights, speed up workflows, or create entirely new user 
        experiences. On the hardware side, I'm just as comfortable writing embedded 
        firmware or integrating sensors into robotics projects. `}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
