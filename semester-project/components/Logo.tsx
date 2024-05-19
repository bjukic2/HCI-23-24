import { FC } from 'react';

import LogoIcon from './icons/logoIcon';

const Logo: FC = () => (
  <div className="flex max-w-min items-center justify-between gap-2">
    <LogoIcon />
    <span className="whitespace-nowrap font-roboto-condensed text-3xl font-bold">
      eDucann
    </span>
  </div>
);

export default Logo;
