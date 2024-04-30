import { Heading, Text, Link, Button } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaLinkedin, FaRss } from 'react-icons/fa';

const Index = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Heading as="h1" size="2xl">Mark Zuckerberg</Heading>
      <Text fontSize="lg">Co-founder and CEO of Facebook, Inc.</Text>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <div style={{ width: '30%' }}>
          <Heading as="h2" size="lg">Biography</Heading>
          <Text mt={2}>
            Mark Zuckerberg was born on May 14, 1984, in White Plains, New York. He developed an interest in computers at an early age; when he was about 12, he used Atari BASIC to create a messaging program he named "Zucknet."
          </Text>
        </div>
        <div style={{ width: '30%' }}>
          <Heading as="h2" size="lg">Achievements</Heading>
          <Text mt={2}>
            Mark Zuckerberg launched Facebook from his Harvard dormitory room on February 4, 2004. He was assisted by his college roommates and fellow Harvard students Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes.
          </Text>
        </div>
        <div style={{ width: '30%' }}>
          <Heading as="h2" size="lg">Blog</Heading>
          <Text mt={2}>
            Explore insights and updates on technology and social media on Mark's personal blog.
          </Text>
          <Button mt={4} leftIcon={<FaRss />} colorScheme="blue">Visit Blog</Button>
        </div>
      </div>
      <div style={{ paddingTop: '20px' }}>
        <Text>Connect with Mark:</Text>
        <Link href="https://facebook.com" isExternal><FaFacebook /></Link>
        <Link href="https://twitter.com" isExternal><FaTwitter /></Link>
        <Link href="https://linkedin.com" isExternal><FaLinkedin /></Link>
      </div>
    </div>
  );
};

export default Index;