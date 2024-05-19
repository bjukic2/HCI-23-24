import Link from 'next/link';
import './globals.css';
import closed_icon from '@/components/icons/4848452_closed_commerce_shop_sign_signaling_icon.png';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="not-found">
      <Image className="icon" src={closed_icon} alt="" />
      <p>Žao nam je, nismo mogli pronaći stranicu koju tražite.</p>
      <p>
        Vratite se na{' '}
        <Link className="pocetna" href="/">
          Početnu
        </Link>
        .
      </p>
    </main>
  );
}
