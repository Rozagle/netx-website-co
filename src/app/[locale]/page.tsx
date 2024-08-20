import {useTranslations} from 'next-intl';
 
export default function HomePage() {
  const t = useTranslations('client');
  return <h1>{t('heading')}</h1>;
}