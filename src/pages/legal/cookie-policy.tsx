import { SEO } from '@/shared';
import { NextPageWithLayout } from '@/shared/types';

const CookePolicyPage: NextPageWithLayout = () => {
    return <>
        <SEO title="Политика куки" />
    </>;
};

CookePolicyPage.layout = 'main';

export default CookePolicyPage;