import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/hyokyung.jpg';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '안효경',
    small: '(An Hyokyung)',
  },
  contact: [
    {
      title: 'dksgyrud1349@naver.com',
      link: 'mailto:dksgyrud1349@naver.com',
      icon: faEnvelope,
    },
    {
      title: '010-2258-1349',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/dksgyrud1349',
      icon: faGithub,
    },
  ],
  notice: {
    title: '기재된 휴대폰 번호 또는 이메일로 연락 주시면 감사하겠습니다.',
    icon: faBell,
  },
};

export default profile;
