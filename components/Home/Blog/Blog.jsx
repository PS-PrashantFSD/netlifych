import React from 'react';
import AnimateOnScreen from '../../AnimateOnScreen';
import {
  ContentSection,
  Wrap,
  Title,
  Paragraph,
  BlogPost,
  BlogImage,
  BlogContent,
  BlogDate
} from './styles';
import Contact from '../Contacts';

const BlogPage = () => {
  const blogPosts = [
    {
      title: "Luminexa Shines at Maverick 2024: Bridging Innovation and Investment",
      date: "October 15, 2024",
      content: "RNSIT-Official proudly presents Maverick 2024, an exceptional event uniting investors and innovators on one grand stage. This year, we are excited to showcase our startup, Luminexa, where entrepreneurial enthusiasts like us present groundbreaking ideas to a distinguished panel of industry experts.Our esteemed panel of investors and thought leaders includes:Mr. Rahul Nagarajan - Executive Director at Velicham Finance, known for his strategic insights in financial investments.Mr. Ramnath Shenoy - Director of Product at SpotDraft, recognized for his innovative approach to product development.Mr. Udit Khiraiya - Product Manager at Flipkart, a key player in India’s e-commerce landscape.Ms. Narita Rai - Program Management Leader for Research and Insights at Salesforce, who excels in managing large-scale projects and data-driven strategies.CA Unnikrishnan Menon - Partner at Vasan and Sampath, Angel Investor, and Startup Mentor, celebrated for his support of emerging businesses.At Maverick 2024, we proudly presented Luminexa, showcasing our innovative solutions and business plans. Our goal is to secure investment to accelerate our growth and expand our impact in the industry.We are thrilled to share that the feedback we received from the panel was overwhelmingly positive. Their insights and encouragement have provided us with invaluable perspectives to refine our approach and enhance our business model. The interest expressed in Luminexa's vision is a testament to the potential of our ideas, and we are optimistic about the opportunities that lie ahead.Participating in Maverick 2024 marks a significant milestone for Luminexa, not only in our quest for investment but also in building meaningful connections with industry leaders who share our passion for innovation. We look forward to forging partnerships that will help us realize our ambitions and contribute to the vibrant entrepreneurial ecosystem.",
      image: "blog.jpg",
    }
    // Add more blog posts as needed
  ];

  return (
    <div>
      <ContentSection>
        <AnimateOnScreen>
          <Wrap>
            <Title>Luminexa - Blog</Title>
            {blogPosts.map((post, index) => (
              <BlogPost key={index}>
                <BlogImage src={post.image} alt={post.title} />
                <BlogContent>
                  <Title>{post.title}</Title>
                  <BlogDate>{post.date}</BlogDate>
                  <Paragraph>{post.content}</Paragraph>
                </BlogContent>
              </BlogPost>
            ))}
          </Wrap>
        </AnimateOnScreen>
        <AnimateOnScreen>
          <Contact />
        </AnimateOnScreen>
      </ContentSection>
    </div>
  );
};

export default React.memo(BlogPage);
