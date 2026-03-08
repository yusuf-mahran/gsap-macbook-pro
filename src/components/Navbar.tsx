import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/constants';

export default function Navbar() {
  return (
    <header>
      <nav>
        <Image src="/logo.svg" alt="Apple Logo" width={50} height={50} />

        <ul>
          {navLinks.map(({ label }) => (
            <li key={label}>
              <Link href={label}>{label}</Link>
            </li>
          ))}
        </ul>

        <div className="flex-center gap-3">
          <button type="button">
            <Image src="/search.svg" alt="Search Icon" width={20} height={20} />
            <span className="sr-only">Search</span>
          </button>
          <button type="button">
            <Image src="/cart.svg" alt="Cart Icon" width={20} height={20} />
            <span className="sr-only">Shopping Bag</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
