import React from 'react'
import { Container } from './container'
import { Heading } from './heading'
import { Subheading } from './subheading'

export const Hero = () => {
  return (
    <div className="pt-10 md:pt-20 lg:pt-32">
      <Container>
        <Heading as="h1">
          Agents that do the work <br /> Approvals that keeps you safe
        </Heading>
        <Subheading className='py-8'>
          Deploy AI agents that plan, act through your tools, and report <br />
          outcomes—without changing how your teams work.
        </Subheading>
      </Container>
    </div>
  );
}
