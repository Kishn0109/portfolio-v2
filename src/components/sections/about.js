import React, { useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'TypeScript',
    'JavaScript (ES6+)',
    'React',
    'Next.js',
    'Redux & React Query',
    'WebSockets',
    'Tailwind CSS',
    'Radix UI / shadcn/ui',
    'Playwright',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      <div className="inner">
        <StyledText>
          <div>
            <p>
              My name is Kishan Lal Rai, and I’m a software engineer based in Bangalore, India. In
              2020, during my third semester of college, I was first introduced to programming,
              which sparked my passion for development. Since that day, I have continuously honed my
              skills and developed several web applications, growing my expertise in various
              technologies and frameworks.
            </p>

            <p>
              Fast-forward to today, and I’ve spent 4+ years taking products from concept to
              production — a cross-platform drone ground-control station at{' '}
              <a href="https://www.codemonk.io/" target="_blank" rel="noreferrer">
                Codemonk
              </a>
              , and now an ad-automation and agentic AI platform at{' '}
              <a href="https://sellergeni.com/" target="_blank" rel="noreferrer">
                SellerGeni
              </a>
              . My main focus these days is frontend architecture at scale: real-time state, design
              systems, and interfaces that stay fast under heavy data.
            </p>

            <p>
              I also contribute to open source — including merged pull requests to{' '}
              <a
                href="https://github.com/RocketChat/Rocket.Chat/pulls?q=is%3Apr+author%3AKishn0109+is%3Aclosed"
                target="_blank"
                rel="noreferrer">
                Rocket.Chat
              </a>
              , fixing markdown and Omnichannel UI bugs.
            </p>

            <p>
              I occasionally{' '}
              <a href="https://medium.com/@kishan.lal.rai210121" target="_blank" rel="noreferrer">
                write about frontend development
              </a>{' '}
              covering some of the most important topics I’ve learned along the way.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpeg"
              width={500}
              quality={95}
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
