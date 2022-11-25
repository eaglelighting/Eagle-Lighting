import Pricing from 'components/Pricing';
import { getActiveProductsWithPrices } from 'utils/supabase-client';
import { Product } from 'types';
import { GetStaticPropsResult } from 'next';

interface Props {
  products: Product[];
}

export default function PricingPage({ products }: Props) {
    return (
      <div> hello </div>
    );
}

