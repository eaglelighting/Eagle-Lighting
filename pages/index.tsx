import Pricing from 'components/Pricing';
import { getActiveProductsWithPrices } from 'utils/supabase-client';
import { Product } from 'types';
import { GetStaticPropsResult } from 'next';
import Image from 'next/image';
import Hero from '../components/hero'

interface Props {
  products: Product[];
}

export default function HomePage({ products }: Props) {
  return (
    <div className='min-h-screen'>
      <div className='max-h-[5px] overflow-hidden'>

        <img className='w-[100%]' src='/candy.png' />
      </div>
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
      <div className='flex justify-around items-center flex-row-reverse'>
        <div className='hidden max-w-[500px] max-h-[400px] pl-[0px] p-[40px] sm:flex'>
          <img className='object-contain rounded-lg' src="lights.png" />
        </div>

        <div className='p-[40px] pr-[10px] max-w-[400px]'>
          <h1 className='text-black text-[30px] leading-[1.1] opacity-80 leading-10 font-semibold'>Easy, Holiday lighting installation.</h1>
          <p className='text-black opacity-80 mt-[20px] text-[25px] leading-[1]'>Professional lighting in <span className='font-bold'>Idaho</span>. Experts in all types of lighting installation.</p>
          <button className='text-black ml-1 bg-gray-400 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-[30px]'>Get a Quote</button>
        </div>
      </div>
      <Hero />
    </div>
  );
}

