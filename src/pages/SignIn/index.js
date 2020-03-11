import React from 'react';

import { Title, Button } from './styles';

export default function SignIn() {
  return (
    <div>
      <Title>Example Page SignIn</Title>
      <br />
      <Button as="a" href="/register">
        SignUp
      </Button>
    </div>
  );
}
