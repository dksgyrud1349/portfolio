import favicon from '../asset/favicon.ico';
import previewImage from '../asset/hyokyung.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = 'Hyokyung An Portfolio';
const description = 'This is Hyokyung An Portfolio.';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'hypkyung.jpg',
        },
      ],
      type: 'website',
      profile: {
        firstName: 'Hyokyung',
        lastName: 'An',
        username: 'hyokyung',
        gender: 'female',
      },
    },
  },
};
