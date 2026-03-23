import { SEO } from '@/shared';
import { NextPageWithLayout } from '@/shared/types';

const PrivacyPolicyPage: NextPageWithLayout = () => {
    return <>
        <SEO title="Политика конфиденциальности" />
    </>;
};

PrivacyPolicyPage.layout = 'main';

export default PrivacyPolicyPage;