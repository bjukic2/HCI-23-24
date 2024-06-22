import Link from 'next/link';
import closed_icon from '@/components/icons/4848452_closed_commerce_shop_sign_signaling_icon.png';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main className="text-4 mt-35 flex flex-col items-center gap-4 text-center text-zelena-300 md:text-2xl">
      <Image src={closed_icon} alt="" className="h-28 w-28" />
      <p>Žao nam je, nismo mogli pronaći stranicu koju tražite.</p>
      <p>
        Vratite se na{' '}
        <Link className="inline text-zelena-200 underline" href="/">
          početnu
        </Link>
      </p>
    </main>
  );
}
