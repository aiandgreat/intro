import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
 
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p style={{fontWeight: 'bold'}}>When you think about a "perfect" website, are you more drawn to how it (UI/UX, animations, layouts) or how it (databases, user authentication, logic)? Explain why.</p>
        <p>When I think about a perfect website I am more drawn to the backend aspect which is composed of databases, user authentication and logic. I am more interested on how a website works rather on what it looks like and I am also fond of discovering how information is passed and processed in the database and how user can log in or log out and their permissions inside the system.</p>
        <p style={{fontWeight: 'bold'}}>Are there specific technologies or frameworks you are eager to learn (e.g., React, Tailwind CSS, Node.js, Next.js)?</p>
        <p>I do want to expand my knowledge in Tailwind CSS and React. I also wanted to explore the MERN stack which includes MongoDB, Express.js, React and Node.js</p>
        <p style={{fontWeight: 'bold'}}>What is one specific feature you’ve seen on a modern website that you’ve always wondered how to build?</p>
        <p>Upon seeing the modern systems developed by our fourth year students, I always wondered on how can I build a modern website with AI integration and API that allows to retrieve information from applications like Google Maps, Weather, etc.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}