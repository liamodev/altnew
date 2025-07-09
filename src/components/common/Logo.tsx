import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src="/logos/New-Combined-Trans.png"
        alt="Altitude Consulting"
        width={855}
        height={213}
        className="w-32 h-8 md:w-40 md:h-10"
      />
    </Link>
  );
} 