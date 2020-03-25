import React from 'react';
import Button from '../UI/Button';
import Link from 'next/link';
import Container from '../UI/Container';


const NextButton = ({ page }) => {
  return (
    <Container marginVertical="30px">
      <Link href={`/hackernews?page=${page + 1}`}>
        <a><Button> View page {page + 1} </Button></a>
      </Link>
    </Container>
  );
};

export default NextButton;