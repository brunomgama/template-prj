import {createNavigation} from 'next-intl/navigation';

export const routing = {
    defaultLocale: 'en',
    locales: ['en', 'es'],
};

export const {Link, redirect, usePathname, useRouter, getPathname} =
    createNavigation(routing);