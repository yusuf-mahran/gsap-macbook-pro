import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';

export default function Highlights() {
  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  useGSAP(() => {
    gsap.to(['.left-column', '.right-column'], {
      scrollTrigger: {
        trigger: '#highlights',
        start: isMobile ? 'bottom bottom' : 'top center',
      },
      y: 0,
      opacity: 1,
      stagger: 0.5,
      duration: 1,
      ease: 'power1.inOut',
    });
  });

  return (
    <section id="highlights">
      <h2>There’s never been a better time to upgrade.</h2>
      <h3>Here’s what you get with the new MacBook Pro.</h3>

      <div className="masonry">
        <div className="left-column">
          <div>
            <Image
              src="/laptop.png"
              alt="Laptop"
              width={120}
              height={120}
              className="w-24 h-auto"
            />
            <p>Fly through demanding tasks up to 9.8x faster.</p>
          </div>
          <div>
            <Image
              src="/sun.png"
              alt="Sun"
              width={120}
              height={120}
              className="w-24 h-auto"
            />
            <p>
              A stunning <br />
              Liquid Retina XDR <br />
              display.
            </p>
          </div>
        </div>
        <div className="right-column">
          <div className="apple-gradient">
            <Image
              src="/ai.png"
              alt="AI"
              width={120}
              height={120}
              className="w-20 h-auto"
            />
            <p>
              Built for <br />
              <span>Apple Intelligence.</span>
            </p>
          </div>
          <div>
            <Image
              src="/battery.png"
              alt="Battery"
              width={120}
              height={120}
              className="w-24 h-auto"
            />
            <p>
              Up to
              <span className="green-gradient"> 14 more hours </span>
              battery life.
              <span className="text-dark-100"> (Up to 24 hours total.)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
