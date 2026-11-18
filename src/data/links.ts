import { brandsData } from './brands';

export const AFFILIATE_REL = 'nofollow sponsored noopener';
export const AFFILIATE_TARGET = '_blank';

export function getAffiliateLink(slug: string): string {
  const brand = brandsData.find((b) => b.slug === slug);
  return brand?.affiliateUrl || '/brands/';
}

export function getBrandCoupon(slug: string): { coupon?: string; discount?: string } {
  const brand = brandsData.find((b) => b.slug === slug);
  return {
    coupon: brand?.coupon,
    discount: brand?.couponDiscount,
  };
}
