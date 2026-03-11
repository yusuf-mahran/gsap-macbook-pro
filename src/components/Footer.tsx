import { footerLinks } from '@/constants';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className="info">
        <p>
          More ways to shop: Find an Apple Store or other retailer near you. Or
          call 000800 040 1966.
        </p>
        <Image src="/logo.svg" alt="Apple Logo" width={50} height={50} />
      </div>

      <hr />

      <div className="links">
        <p>
          Copyright © {new Date().getFullYear()} Apple Inc. All rights reserved.
        </p>

        <ul>
          {footerLinks.map(({ label, link }) => (
            <li key={label}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
