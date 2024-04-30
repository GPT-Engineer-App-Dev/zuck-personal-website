import { Box, VStack, Heading, Text, Link, Button, HStack } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaLinkedin, FaRss } from 'react-icons/fa';

const Index = () => {
  return (
    <VStack spacing={10} p={5}>
      <Heading as="h1" size="2xl">Mark Zuckerberg</Heading>
      <Text fontSize="lg">Co-founder and CEO of Facebook, Inc.</Text>
      <HStack spacing={10} align="start">
        <Box as="section" p={6} boxShadow="md" borderRadius="lg" width="30%" backgroundColor="brand.700" marginY="4">
          <Heading as="h2" size="lg" color="white">Biography</Heading>
          <Text mt={2} color="white">
            Mark Zuckerberg was born on May 14, 1984, in White Plains, New York. He developed an interest in computers at an early age; when he was about 12, he used Atari BASIC to create a messaging program he named "Zucknet."
          </Text>
        </Box>
        <Box as="section" p={6} boxShadow="md" borderRadius="lg" width="30%" backgroundColor="brand.800" marginY="4">
          <Heading as="h2" size="lg" color="white">Achievements</Heading>
          <Text mt={2} color="white">
            Mark Zuckerberg launched Facebook from his Harvard dormitory room on February 4, 2004. He was assisted by his college roommates and fellow Harvard students Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes.
          </Text>
        </Box>
        <Box as="section" p={6} boxShadow="md" borderRadius="lg" width="30%" backgroundColor="brand.900" marginY="4">
          <Heading as="h2" size="lg" color="white">Blog</Heading>
          <Text mt={2} color="white">
            Explore insights and updates on technology and social media on Mark's personal blog.
          </Text>
          <Button mt={4} leftIcon={<FaRss />} colorScheme="blue">Visit Blog</Button>
        </Box>
      </HStack>
      <Box as="footer" pt={5}>
        <Text>Connect with Mark:</Text>
        <Link href="https://facebook.com" isExternal><FaFacebook /></Link>
        <Link href="https://twitter.com" isExternal><FaTwitter /></Link>
        <Link href="https://linkedin.com" isExternal><FaLinkedin /></Link>
      </Box>
    </VStack>
  );
};

export default Index;