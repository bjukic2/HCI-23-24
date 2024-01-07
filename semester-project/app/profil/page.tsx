import React from "react";
import './profil.css';
import Profil from '@/components/Profil';

export const metadata = {
  title: "Profil",
}


const Page = () => {
  return(
    <div>
      <Profil />
    </div>
  );
};

export default Page;
