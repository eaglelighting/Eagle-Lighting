import Pricing from 'components/Pricing';
import { getActiveProductsWithPrices } from 'utils/supabase-client';
import { Product } from 'types';
import { GetStaticPropsResult } from 'next';
import Image from 'next/image';

interface Props {
  products: Product[];
}

export default function HomePage({ products }: Props) {
  return (
    <div className='min-h-screen'>
      <div
        className="relative w-full h-[170px] sm:hidden"
      >
        <div
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, black 300%)",
          }}
          className="absolute z-[1] w-full h-full"
        ></div>
        <Image
          src='/lights.png'
          layout="fill"
          objectFit="cover"
          alt="img"
          priority
        />
      </div>
      <div className='p-[40px]'>
       <h1 className='text-black text-[30px] leading-[1.1] font-semibold'>Easy, Holiday lighting installation.</h1>
       <p className='text-black opacity-80 mt-[20px] text-[25px] leading-[1]'>Professional lighting in Idaho. Experience with all types of lighting installation.</p>
      <button className='h-[30px] mt-[20px] rounded-lg text-black border-[1px] border-black font-semibold px-3'>Get a Quote</button>
      </div>
    </div>
  );
}

