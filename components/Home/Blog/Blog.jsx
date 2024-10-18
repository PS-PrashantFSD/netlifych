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
      date: "June 19, 2024",
      content: "A one of a kind stellar drawing together investors and innovators in one mega stage. RNSIT-Official presents Maverick 2024 where entrepreneurial enthusiasts present their ideas to industry experts. Among our esteemed panel of investors and industrial experts is, Mr. Rahul Nagarajan - Executive Director, Velicham Finance Mr. Ramnath Shenoy - Director of Product, SpotDraft Mr. Udit Khiraiya - Product Manager - FlipkartMs. Narita Rai - Program Management Leader for Research and Insights, Salesforce CA Unnikrishnan Menon - Partner, Vasan and Sampath, Angel Invest, Start-up Mentor, Transaction Advisor.Currently we are seeking for investment to expand our business so for raising investment we are attended here and we presented to them our plans. And we received lot of positive",
      image: "blog.jpg",
    }
    // Add more blog posts as needed
  ];

  return (
    <div>
      <ContentSection>
        <AnimateOnScreen>
          <Wrap>
            <Title>Media</Title>
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
      </ContentSection>
      <Contact />
    </div>
  );
};

export default React.memo(BlogPage);
