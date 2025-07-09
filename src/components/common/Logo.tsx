import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logos/A7.png"
        alt="Altitude Consulting"
        width={40}
        height={40}
        className="w-8 h-8 md:w-10 md:h-10"
      />
      <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
        Altitude
      </span>
    </Link>
  );
} 