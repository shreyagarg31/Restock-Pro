import { SITE_NAME, SITE_URL } from './constants';

export interface PageMeta {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  noindex?: boolean;
}

export function pageTitle(title: string) {
  return title === SITE_NAME ? title : `${title} | ${SITE_NAME}`;
}

export function canonicalUrl(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return new URL(normalized, SITE_URL).toString();
}

export function buildMeta({ title, description, path = '/', ogImage, noindex }: PageMeta) {
  const fullTitle = pageTitle(title);
  const canonical = canonicalUrl(path);
  const image = ogImage ?? `${SITE_URL}/og-default.svg`;

  return {
    title: fullTitle,
    description,
    canonical,
    ogImage: image,
    noindex: noindex ?? false,
  };
}
