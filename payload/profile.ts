// import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

// import { faBell } from '@fortawesome/free-regular-svg-icons';
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
      link: 'https://github.com/dksgyrud1349',
      icon: faGithub,
    },
  ],
  notice: {
    // title: '웹·모바일·키오스크까지, 서비스 전 과정을 설계·개발·운영하는 실무형 개발자',
    title: '문제를 분석하고, 더 나은 구조를 설계하는 개발자 안효경입니다.',
    // icon: faBell,
  },
};

export default profile;
