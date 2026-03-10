'use client';

import { performanceImages, performanceImgPositions } from '@/constants';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger);

export default function Performance() {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  useGSAP(
    () => {
      // Paragraph fade-in animation (all viewports)
      gsap.fromTo(
        '.performance-paragraph',
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '.performance-paragraph',
            start: 'top bottom',
            end: 'top center',
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );

      // Desktop-only: scrubbed image timeline
      const tl = gsap.timeline({
        defaults: {
          ease: 'power1.inOut',
          duration: 2,
          overwrite: 'auto',
        },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'center center',
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      performanceImgPositions
        .filter((pos) => pos.id !== 'p5')
        .forEach((pos) => {
          const toProps: gsap.TweenVars = { ease: 'none' };
          if (pos.left !== undefined) toProps.left = `${pos.left}%`;
          if ('right' in pos && pos.right !== undefined)
            toProps.right = `${pos.right}%`;
          if (pos.bottom !== undefined) toProps.bottom = `${pos.bottom}%`;

          tl.to(`.${pos.id}`, toProps, 0);
        });
    },
    { scope: sectionRef, dependencies: [isMobile] },
  );

  return (
    <section id="performance" ref={sectionRef}>
      <h2>Next-level graphics performance. Game on.</h2>

      <div className="wrapper">
        {performanceImages.map((item, index) => (
          <Image
            key={index}
            src={item.src}
            width={500}
            height={500}
            className={item.id}
            alt={`Performance Image #${index + 1}`}
          />
        ))}
      </div>

      <div className="content">
        <p className="performance-paragraph">
          Run graphics-intensive workflows with a responsiveness that keeps up
          with your imagination. The M4 family of chips features a GPU with a
          second-generation hardware-accelerated ray tracing engine that renders
          images faster, so{' '}
          <span className="text-white">
            gaming feels more immersive and realistic than ever.
          </span>{' '}
          And Dynamic Caching optimizes fast on-chip memory to dramatically
          increase average GPU utilization — driving a huge performance boost
          for the most demanding pro apps and games.
        </p>
      </div>
    </section>
  );
}
