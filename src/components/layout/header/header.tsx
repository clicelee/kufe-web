import Image from 'next/image';
import Link from 'next/link';

import { cn } from '@/lib/cn';

const Header = () => {
  return (
    <nav className={cn('bg-[#036b3f] px-6 py-4 text-white')}>
      <div className={cn('container mx-auto flex items-center justify-between')}>
        <Image src="/logo.png" alt="KUFE" width={80} height={80} />
        <ul className={cn('flex items-center space-x-6')}>
          <li>
            <Link href="/articles">아티클 읽기</Link>
          </li>
          <li>
            <Link href="/jobs">채용 공고</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
