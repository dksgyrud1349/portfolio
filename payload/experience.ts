import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  disableTotalPeriod: false,
  list: [
    // {
    //   title: 'Linux Foundation',
    //   positions: [
    //     {
    //       title: 'System Engineer',
    //       startedAt: '1996-05',
    //       descriptions: [
    //         'Steering Kernel patching and updates for various distributions',
    //         'Automating deployment and integration processes for Linux servers',
    //         'Spearheading initiatives to enhance Linux kernel security',
    //         'Collaborating with global developers to coordinate code contributions',
    //       ],
    //       skillKeywords: ['C', 'Linux', 'Kernel', 'Security', 'Automation'],
    //     },
    //     {
    //       title: 'System Engineer Intern',
    //       startedAt: '1996-02',
    //       endedAt: '1996-05',
    //       descriptions: [
    //         'Assisted senior engineers in maintaining and updating kernel patches for Linux distributions',
    //         'Supported deployment and integration tasks for Linux server environments',
    //         'Conducted research on Linux kernel security practices and presented findings to the team',
    //       ],
    //       skillKeywords: ['C', 'Linux', 'Kernel', 'Support', 'Research'],
    //     },
    //   ],
    // },
    {
      title: '체인팜 주식회사(ChainFarm)',
      positions: [
        {
          title: '플랫폼 사업부 풀스택 개발자',
          startedAt: '2024-04',
          endedAt: '2025-10',
          descriptions: [
            {
              text: '통합 예약/결제/입장 솔루션 구축 참여 및 운영',
              children: [
                '천안 유관순 파크골프장, 마포 순환열차버스 : 신규 서비스 설계부터 런칭, 실서버 운영까지 전체 라이프사이클 참여',
                '여주 파크골프장 : 기존 시스템 고도화 및 시스템 안정화, 복합 인증(할인 등) 로직 개발 참여',
                '하드웨어 연동 : 카드리더기, 키오스크, QR 게이트, 태블릿 등 멀티 디바이스와 백엔드 API 실시간 연동 개발 참여',
              ],
            },
            {
              text: '공공기관 웹 서비스 안정화 및 품질 관리',
              children: [
                '인천 MICE뷰로 : 메인 담당자로서 기존 장애 및 오류 약 100여 건 전수 해결 및 유지보수 4개월 차 이후 "결함 0건 달성"',
              ],
            },
          ],
          skillKeywords: [
            'Java',
            'Spring Boot',
            'MariaDB',
            'MongoDB',
            'JSP',
            'JavaScript',
            'jQuery',
            'MyBatis',
            'GitHub',
            'SVN',
            'Apache Tomcat',
            'eGov Framework',
            'Spring Framework',
          ],
        },
      ],
    },
  ],
};

export default experience;
