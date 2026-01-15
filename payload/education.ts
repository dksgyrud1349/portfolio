import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: 'AWS 클라우드를 활용한 Full-Stack 개발자 양성과정',
      subTitle: 'Java 기반 풀스택 프로그래밍 과정 이수 (쌍용강북교육센터)',
      startedAt: '2023-07',
      endedAt: '2024-02',
    },
    {
      title: 'DSC 공유대학',
      subTitle: '지능형전장제어시스템전공 복수 전공 학사 졸업',
      startedAt: '2022-03',
      endedAt: '2024-02',
    },
    {
      title: '남서울대학교',
      subTitle: '빅데이터경영공학과 학사 졸업 (학점 : 4.2 / 4.5)',
      startedAt: '2020-03',
      endedAt: '2024-02',
    },
    {
      title: '동일여자고등학교',
      subTitle: '이과/자연계 졸업',
      startedAt: '2017-03',
      endedAt: '2020-02',
    },
  ],
};

export default education;
