import React from 'react';

import { Title, Button } from './styles';

export default function SignUp() {
  return (
    <div>
      <Title>Example Page SignUp</Title>
      <br />
      <Button as="a" href="/">
        SignIn
      </Button>
    </div>
  );
}
