import Article from '@/components/Article'
import { BlogDetail } from '@/components/blog/BlogDetail'
import BlogDetail2 from '@/components/blog/BlogDetail2'
import { BlogDetail3 } from '@/components/blog/BlogDetail3'
import HomePage from '@/components/blog/HomePage'
import React from 'react'

const page = () => {
  return (
    <div>
      <HomePage/>
      <BlogDetail/>
      <BlogDetail2/>
      <BlogDetail3/>
      <Article/>
    </div>
  )
}

export default page
