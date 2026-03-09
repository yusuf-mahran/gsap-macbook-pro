'use client';

import useMacbookStore from '@/store';
import { Canvas } from '@react-three/fiber';
import clsx from 'clsx';

import StudioLights from './three/StudioLights';
import ModelSwitcher from './three/ModelSwitcher';
import { useMediaQuery } from 'react-responsive';

export default function ProductViewer() {
  const { color, scale, setColor, setScale } = useMacbookStore();

  const isMobile = useMediaQuery({ query: '(max-width: 1024px)' });

  return (
    <section id="product-viewer">
      <h2>Take a closer look.</h2>

      <div className="controls">
        <p className="info">
          MacbookPro {scale === 0.06 ? '14' : '16'}&rdquo; in{' '}
          {color === '#adb5bd' ? 'Silver' : 'Space Black'}
        </p>

        <div className="flex-center gap-5 mt-5">
          <div className="color-control">
            <div
              role="button"
              tabIndex={0}
              onClick={() => setColor('#adb5bd')}
              onKeyDown={(e) => e.key === 'Enter' && setColor('#adb5bd')}
              className={clsx(
                'bg-neutral-300',
                color === '#adb5bd' && 'active',
              )}
              aria-label="Silver color"
            />
            <div
              role="button"
              tabIndex={0}
              onClick={() => setColor('#2e2c2e')}
              onKeyDown={(e) => e.key === 'Enter' && setColor('#2e2c2e')}
              className={clsx(
                'bg-neutral-900',
                color === '#2e2c2e' && 'active',
              )}
              aria-label="Space Black color"
            />
          </div>

          <div className="size-control">
            <div
              role="button"
              tabIndex={0}
              onClick={() => setScale(0.06)}
              onKeyDown={(e) => e.key === 'Enter' && setScale(0.06)}
              className={clsx(
                scale === 0.06
                  ? 'bg-white text-black'
                  : 'bg-transparent text-white',
              )}
            >
              <p>14&rdquo;</p>
            </div>
            <div
              role="button"
              tabIndex={0}
              onClick={() => setScale(0.08)}
              onKeyDown={(e) => e.key === 'Enter' && setScale(0.08)}
              className={clsx(
                scale === 0.08
                  ? 'bg-white text-black'
                  : 'bg-transparent text-white',
              )}
            >
              <p>16&rdquo;</p>
            </div>
          </div>
        </div>
      </div>

      <Canvas
        id="canvas"
        camera={{ position: [0, 2, 5], fov: 50, near: 0.1, far: 100 }}
      >
        <StudioLights />

        <ModelSwitcher
          scale={isMobile ? scale - 0.03 : scale}
          isMobile={isMobile}
        />
      </Canvas>
    </section>
  );
}
