import { FC } from "react";

import LogoIcon from "./icons/logoIcon";

const Logo: FC = () => (
  <div className="flex items-center justify-between max-w-min gap-2">
    <LogoIcon />
    <span className="font-roboto-condensed font-bold text-3xl whitespace-nowrap">
      eDucann
    </span>
  </div>
);

export default Logo;