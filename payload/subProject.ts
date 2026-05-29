import { ISubProject } from '../component/subProject/ISubProject';

const subProject: ISubProject.Payload = {
  disable: false,
  list: [
    {
      title: '태블릿 기반 캠핑장 전자서명 시스템 구축',
      startedAt: '2024-10',
      endedAt: '2024-11',
      where: '체인팜 주식회사',
      descriptions: [
        {
          content: '개요',
          weight: 'MEDIUM',
          descriptions: [
            { content: '캠핑장 입실 시 물품 지급 확인을 위한 태블릿 기반 전자서명 시스템' },
          ],
        },
        {
          content: '역할',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '[기존 방식의 한계]: 물품 지급 후 종이에 서명하는 방식으로 운영되어 종이 분실 시 이력 추적이 불가능하고 분쟁 발생 시 근거 자료 확보가 어려운 구조. 이를 디지털화하기 위해 태블릿 기반 전자서명 시스템 구축',
            },
            {
              content:
                '[Firebase 연동]: 서명 요청 시 약관·지급 물품 정보를 Firebase에 저장하여 태블릿에서 실시간으로 조회 가능하도록 구현',
            },
            {
              content:
                '[서명 데이터 매핑]: 태블릿에서 서명 완료 시 서명 데이터를 예약 정보 및 지급 물품 정보와 매핑하여 DB에 저장하는 API 개발',
            },
            {
              content:
                '[통합 관리 대시보드]: 예약 정보와 물품 지급·서명 현황을 동시에 확인 가능한 관리자 대시보드 개발',
            },
          ],
        },
      ],
    },
    {
      title: '카포유 휴대폰 본인 인증 기능 개발',
      startedAt: '2024-08',
      endedAt: '2024-08',
      where: '체인팜 주식회사',
      descriptions: [
        {
          content: '개요',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '차량 검사 관리 시스템에서 타인 계정 도용 로그인을 방지하기 위한 휴대폰 본인 인증 기능 개발',
            },
          ],
        },
        {
          content: '역할',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '[문제 인식]: 기존에는 아이디·비밀번호만으로 로그인이 가능하여 타인의 계정으로 로그인할 수 있는 보안 취약점이 존재',
            },
            {
              content:
                '[인증번호 발송]: 로그인 시 입력된 전화번호로 6자리 랜덤 숫자를 생성하여 퍼플북 API를 통해 문자 발송 후 DB에 인증번호와 상태값(대기)을 저장',
            },
            {
              content:
                '[중복 발송 처리]: 인증번호 발송을 여러 번 요청할 경우 기존에 발송된 인증번호의 상태값을 대기에서 삭제로 변경하여 마지막으로 발송된 인증번호만 유효하도록 처리',
            },
            {
              content:
                '[인증번호 검증]: 사용자가 입력한 인증번호와 DB에 저장된 인증번호가 일치할 경우 상태값을 대기에서 완료로 변경하여 로그인 버튼 활성화',
            },
          ],
        },
      ],
    },
    {
      title: '메시지 발송 기능 개발',
      startedAt: '2024-07',
      endedAt: '2024-07',
      where: '체인팜 주식회사',
      descriptions: [
        {
          content: '개요',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '체육센터 운영 공지의 대량 문자 발송 업무를 시스템화하기 위해 회원 DB 기반 수신자 선택과 배치 처리 구조를 적용한 관리자 메시지 발송 기능 개발',
            },
          ],
        },
        {
          content: '역할',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '[문제 인식]: 기존에는 엑셀로 수신자 명단을 정리하여 Purplebook에서 단체 문자를 발송하는 수작업 방식으로 운영. 오타·잘못된 전화번호 입력으로 발송 오류가 발생하고, 담당자가 직접 사용하기 어려워 회사 직원이 대신 처리하는 비효율 발생',
            },
            {
              content:
                '[발송 대상 관리]: 관리자 페이지에 메시지 발송 메뉴를 추가하여 시스템에 등록된 회원 목록 조회·검색 후 수신자를 선택하고 메시지를 작성할 수 있는 기능 구현',
            },
            {
              content:
                '[발송 요청 처리]: 발송 요청을 즉시 처리하지 않고 DB에 저장하여 발송 프로세스를 분리',
            },
            {
              content:
                '[배치 기반 발송]: @Scheduled 기반 30초 주기 배치를 통해 Purplebook API로 대량 문자를 순차 발송하여 서버 부하 최소화. 수백~수천 명 규모의 대량 발송 환경을 고려한 구조 설계',
            },
            {
              content:
                '[발송 상태 관리]: 상태값(대기→완료/실패)을 관리하여 발송 이력 추적 및 재처리 가능한 구조 구현',
            },
          ],
        },
      ],
    },
    {
      title: '인천시티투어 글로벌 사용자용 이메일 인증 및 티켓 발송 기능',
      startedAt: '2024-06',
      endedAt: '2024-07',
      where: '체인팜 주식회사',
      descriptions: [
        {
          content: '개요',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '국내 휴대폰 인증이 어려운 글로벌 사용자를 위한 이메일 기반 인증 및 티켓 발송 기능 개발',
            },
          ],
        },
        {
          content: '역할',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '[문제 인식]: 기존 휴대폰 인증 구조로 인해 국내 전화번호가 없는 해외 사용자의 인증 및 서비스 이용이 제한되는 문제 발생',
            },
            {
              content:
                '[기존 인프라 활용]: 사내 DirectSend 이메일 발송 모듈을 활용하여 이메일 인증 및 티켓 발송 기능 구현',
            },
            {
              content:
                '[인증번호 발송]: 6자리 랜덤 인증번호 생성 후 DirectSend를 통해 발송하고 DB에 저장',
            },
            {
              content:
                '[중복 발송 처리]: 재발송 시 기존 인증번호를 무효 처리하여 마지막으로 발송된 인증번호만 유효하도록 구현',
            },
            {
              content: '[인증번호 검증]: 입력한 인증번호와 DB 저장값 일치 시 상태값을 완료로 변경',
            },
          ],
        },
      ],
    },
    // {
    //   title: '광고 계약서 PDF 생성 기능 개발',
    //   startedAt: '2024-07',
    //   endedAt: '2024-08',
    //   where: '체인팜 주식회사',
    //   descriptions: [
    //     {
    //       content: '개요',
    //       weight: 'MEDIUM',
    //       descriptions: [{ content: '광고 계약 체결에 대한 계약서 전자서명·PDF 생성 시스템' }],
    //     },
    //     {
    //       content: '역할',
    //       weight: 'MEDIUM',
    //       descriptions: [
    //         {
    //           content:
    //             '[XSL/XML 기반 PDF 동적 생성]: 계약 데이터(XML)-문서 양식(XSL)을 결합하여 PDF를 생성하는 기능 개발',
    //         },
    //       ],
    //     },
    //   ],
    // },
  ],
};

export default subProject;
