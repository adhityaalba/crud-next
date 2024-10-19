'use client';

import Link from 'next/link';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { usePathname, useSearchParams } from 'next/navigation';
import clsx from 'clsx';
import { boolean } from 'zod';

const Pagination = ({ totalPages }: { totalPages: number }) => {
  const pathname = usePathname();
  const searchParam = useSearchParams();
  const currentPage = Number(searchParam.get('page')) || 1;

  const createPageURL = (pageNumber: string | number) => {
    const params = new URLSearchParamse(searchParam);
    params.set('page', pageNumber.toString());
    return `${pathname}? ${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, totalPages);

  const PaginationNumber = ({ page, href, position, isActive }: { page: number | string; href: string; position?: 'first' | 'last' | 'middle' | 'single'; isActive: boolean }) => {
    const className = clsx('flex h-10 w-10 items-center justify-center text-sm border', {
      'rounded-l-sm': position === 'first' || position === 'single',
      'rounded-r-sm': position === 'last' || position === 'single',
      'z-10 bg-blue-100 border-blue-500 text-white': isActive,
      'hover:bg-gray-100': !isActive && position !== 'middle',
      'text-gray-300 pointer-events-none': position === 'middle',
    });

    return isActive && position === 'middle' ? (
      <div className={className}>{page}</div>
    ) : (
      <Link href={href} className={className}>
        {page}
      </Link>
    );
  };

  return <div></div>;
};

export default Pagination;
