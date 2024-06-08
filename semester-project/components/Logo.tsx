import { FC } from 'react';

import LogoIcon from './icons/logoIcon';
import Link from 'next/link';

const Logo: FC = () => (
  <Link href="/">
    <div className="flex max-w-min items-center justify-between gap-2">
      <LogoIcon />
      <span className="whitespace-nowrap font-roboto-condensed text-3xl font-bold text-brand-900">
        eDucan
      </span>
    </div>
  </Link>
);

export default Logo;
