
import { Container } from '../container'
import { Heading } from "../heading";
import  { Subheading } from '../subheading';
import { Card, CardTitle } from './card';

export const Features = () => {
  return (
    <Container className="py-10 md:pt-20 lg:pt-32">
      <div className="flex items-baseline-last justify-between">
        <Heading>
          Built for Fast Moving <br /> Teams that Need Control
        </Heading>
        <Subheading>
          Deploy AI agents that plan, act throughyour tools, and report
          outcomes-without changing how team works
        </Subheading>
      </div>
      <div className="my-10 grid grid-cols-1 gap-4 md:my-20 md:grid-cols-3">
        <Card>
          <CardTitle>Prebuilt Agents , Tuned to Your Workflows</CardTitle>
        </Card>
        <Card>
          <CardTitle>Prebuilt Agents , Tuned to Your Workflows</CardTitle>
        </Card>
        <Card>
          <CardTitle>Prebuilt Agents , Tuned to Your Workflows</CardTitle>
        </Card>
      </div>
    </Container>
  );
}
