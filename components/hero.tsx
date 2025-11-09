import React from "react";
import { Container } from "./container";
import { Heading } from "./heading";
import { Subheading } from "./subheading";
import { Button } from "./ui/button";
import Link from "next/link";
import { LandingImage } from "./landing-image";

export const Hero = () => {
  return (
    <div className="pt-10 md:pt-20 lg:pt-32">
      <Container>
        <Heading as="h1">
          Agents that do the work <br /> Approvals that keeps you safe
        </Heading>
        <Subheading className="py-8">
          Deploy AI agents that plan, act through your tools, and report <br />
          outcomes—without changing how your teams work.
        </Subheading>
        <div className="item-center flex gap-6">
          <Button className="shadow-brand"> Startyour free trail </Button>
          <Button variant="outline" asChild>
            <Link href="#">View role based demos</Link>
          </Button>
        </div>
        <LandingImage />
      </Container>
    </div>
  );
};
