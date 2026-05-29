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
                '요구사항 분석·설계·개발·운영 전 과정 수행',
                '고연령층 이용자를 고려한 임시 테이블 기반 입장권 선점 방식 설계·개발',
                '@Scheduled 기반 입장권 선점 해제 프로세스 설계·개발',
                '안면인식 기반 실시간 키오스크 결제·게이트 출입 제어 프로세스 설계·개발',
              ],
            },
            {
              text: '여주 파크골프장 예약·결제·입장 시스템 안정화 및 고도화',
              children: [
                'OTP 기반 동적 QR 인증 체계 도입으로 고정형 QR 부정 이용 원천 차단',
                '사내 행정망 API를 연동하여 할인 자격 검증 및 할인 적용 기능 설계·개발',
              ],
            },
            {
              text: '마포 순환열차 버스 탑승권 결제·탑승 시스템 구축 및 운영',
              children: [
                '외부 앱 개발사와 단독 협업하며 앱 전용 API 6종 설계·개발·운영',
                '@Scheduled 기반 미사용 티켓 자동 환불 시스템 구축으로 수작업 프로세스 자동화',
              ],
            },
            {
              text: '인천 MICE뷰로 웹서비스 안정화 및 운영',
              children: [
                '사내 테스트로 발견된 오류 100여 건을 긴급도·영향도 기준으로 우선순위화 및 일일 작업량을 설정하여 기간 내 해결',
                '표준 오류 요청 양식을 설계·도입하여 오류 발생 시 분석 및 대응 속도 향상',
                '작성한 체크리스트를 기반으로 매월 시스템 정기점검을 진행 및 조치를 취하여 시스템을 선제적으로 점검',
                '메인 담당 6개월 차부터 유지보수·정기점검 과정에서 오류 0건 달성 및 유지하여 시스템 안정화',
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
