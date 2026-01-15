import profile from './profile';
import introduce from './introduce';
import skill from './skill';
import experience from './experience';
import project from './project';
import education from './education';
import certificate from './certificate';
import award from './award';
import etc from './etc';
import footer from './footer';

import { _global } from './_global';

import { IProfile } from '../component/profile/IProfile';
import { IIntroduce } from '../component/introduce/IIntroduce';
import { ISkill } from '../component/skill/ISkill';
import { IExperience } from '../component/experience/IExperience';
import { IProject } from '../component/project/IProject';
import { IEducation } from '../component/education/IEducation';
import { ICertificate } from '../component/certificate/ICertificate';
import { IAward } from '../component/award/IAward';
import { IEtc } from '../component/etc/IEtc';
import { IFooter } from '../component/footer/IFooter';
import { IGlobal } from '../component/common/IGlobal';

const Payload: Payload = {
  profile,
  introduce,
  skill,
  experience,
  project,
  education,
  certificate,
  award,
  etc,
  footer,
  _global,
};

interface Payload {
  profile: IProfile.Payload;
  introduce: IIntroduce.Payload;
  skill: ISkill.Payload;
  experience: IExperience.Payload;
  project: IProject.Payload;
  education: IEducation.Payload;
  certificate: ICertificate.Payload;
  award: IAward.Payload;
  etc: IEtc.Payload;
  footer: IFooter.Payload;

  _global: IGlobal.Payload;
}

export default Payload;
