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
      title: '체인팜 주식회사',
      positions: [
        {
          title: '플랫폼 사업부 | 웹 개발자',
          startedAt: '2024-04',
          endedAt: '2025-10',
          descriptions: [
            {
              text: '천안 유관순 파크골프장 예약·결제·입장 통합 시스템 구축 및 운영',
              children: [
                '요구사항 분석부터 설계·개발·운영까지 전 과정 수행',
                '고연령층 이용자를 고려한 입장권 선점 구조와 안면인식 기반 결제 가능 여부 검증 프로세스 설계·개발',
              ],
            },
            {
              text: '여주 파크골프장 예약·결제·입장 시스템 안정화 및 고도화',
              children: ['OTP 기반 동적 QR 인증 체계 도입으로 고정형 QR 부정 이용 원천 차단'],
            },
            {
              text: '마포 순환열차 버스 탑승권 결제·탑승 시스템 구축',
              children: [
                '요구사항 분석부터 설계·개발·운영까지 전 과정 수행',
                '외부 앱 개발사와 단독 협업하며 앱 전용 API 6종 설계·개발',
              ],
            },
            {
              text: '인천 MICE뷰로 웹서비스 안정화 및 운영',
              children: [
                '메인 담당자로서 사내 테스트로 발견된 오류 100여 건 전량 해결 및 오류 0건 운영 상태 달성',
              ],
            },
          ],
          skillKeywords: [
            'Java',
            'Spring Boot',
            'Spring Framework',
            'MyBatis',
            'MariaDB',
            'MongoDB',
            'Vue.js',
            'JavaScript',
            'jQuery',
            'JSP',
            'Apache Tomcat',
            'Firebase',
            'GitHub',
            'SVN',
            'eGov Framework',
          ],
        },
      ],
    },
  ],
};

export default experience;
