'use client';

import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

gsap.registerPlugin(ScrollTrigger);

export default function Showcase() {
  const container = useRef<HTMLElement | null>(null);
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });

  useGSAP(
    () => {
      if (!isTablet) {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: '#showcase',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
            pin: true,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .to('.mask img', {
            transform: 'scale(1.1)',
          })
          .to('.content', { opacity: 1, y: 0, ease: 'power1.in' });

        ScrollTrigger.refresh();
      }
      // Revert the animation when the screen size changes to ensure it works correctly on different devices
      if (isTablet) {
        gsap.set('.mask img', { transform: 'scale(1.2)' });
        gsap.set('.content', { opacity: 1, y: 0 });
      }
    },

    { dependencies: [isTablet], revertOnUpdate: true },
  );

  return (
    <section id="showcase" ref={container}>
      <div className="media">
        <video autoPlay loop muted playsInline>
          <source src="/videos/game.mp4" type="video/mp4" />
        </video>
        <div className="mask">
          <Image
            src="/mask-logo.svg"
            alt="MacBook Pro Showcase"
            width={500}
            height={500}
          />
        </div>
      </div>

      <div className="content">
        <div className="wrapper">
          <div className="lg:max-w-md">
            <h2>Rocket Chip</h2>

            <div className="space-y-5 mt-7 pe-10">
              <p>
                Introducing{' '}
                <span className="text-white">
                  M4, the next generation of Apple silicon
                </span>
                . M4 powers
              </p>
              <p>
                It drives Apple Intelligence on iPad Pro, so you can write,
                create, and accomplish more with ease. All in a design that’s
                unbelievably thin, light, and powerful.
              </p>
              <p>
                A brand-new display engine delivers breathtaking precision,
                color accuracy, and brightness. And a next-gen GPU with
                hardware-accelerated ray tracing brings console-level graphics
                to your fingertips.
              </p>
              <p className="text-primary">
                Learn more about Apple Intelligence
              </p>
            </div>
          </div>

          <div className="max-w-3xs space-y-14">
            <div className="space-y-2">
              <p>Up to</p>
              <h3>4x faster</h3>
              <p>pro rendering performance than M2</p>
            </div>
            <div className="space-y-2">
              <p>Up to</p>
              <h3>1.5x faster</h3>
              <p>CPU performance than M2</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
