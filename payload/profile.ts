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
    title: '치열한 삽질로 다진 시스템, 어제보다 더 나은 내일을 위해 끊임없이 노력합니다. ',
    // icon: faBell,
  },
};

export default profile;
