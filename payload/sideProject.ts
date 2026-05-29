import { ISideProject } from '../component/sideProject/ISideProject';

const sideProject: ISideProject.Payload = {
  disable: false,
  list: [
    {
      title: 'TV, 드라마 / 영화 검색 서비스',
      startedAt: '2026-03',
      where: 'TMDB API 기반 TV, 드라마 / 영화 통합 검색 및 찜하기 서비스',
      descriptions: [
        {
          content: 'GitHub',
          weight: 'MEDIUM',
          href: 'https://github.com/dksgyrud1349/movie-app-next',
        },
        {
          content: '배포',
          weight: 'MEDIUM',
          href: 'https://movie-app-next-hdkd.vercel.app',
        },
        {
          content: '기술 스택',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'Next.js (Pages Router), React, Tailwind CSS, TMDB API, DeepL API, Vercel',
            },
          ],
        },
        {
          content: '핵심 구현',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'SSR(getServerSideProps)과 CSR을 기능별로 분리 적용하여 초기 로딩 성능 최적화',
            },
            {
              content:
                'URL을 단일 진실 공급원으로 활용해 검색·장르·페이지·스크롤 위치를 뒤로가기 후에도 유지',
            },
            { content: '디바운스 기반 실시간 검색으로 불필요한 API 호출 최소화' },
            {
              content:
                'Next.js API Routes를 통해 DeepL API 서버사이드에서 호출, CORS 문제 해결 및 키 노출 방지',
            },
            { content: 'Skeleton UI 적용으로 로딩 중 레이아웃 시프트 없는 UX 구현' },
          ],
        },
      ],
      cases: [
        {
          subject: 'URL 기반 상태 관리 및 검색 UX 최적화',
          images: [],
          sections: [
            {
              title: '프로젝트 배경 및 핵심 과제',
              items: [
                '**[학습 목적]**: 채용 공고에서 React·Next.js 수요가 높다는 것을 확인하고, 단순 개념 학습보다 직접 프로젝트를 진행하며 기능을 구현하고 오류를 해결하는 방식으로 학습하기 위해 Claude를 프로젝트 선생님으로 활용하여 개발 진행',
                '**[검색 상태 유실 문제]**: 상세 페이지 이동 후 뒤로가기 시 검색어·장르·페이지·스크롤 위치가 초기화되는 UX 문제 발생',
                '**[불필요한 API 호출]**: 검색어 입력 시 키 입력마다 API가 호출되어 서버 부하 및 응답 지연 발생',
                '**[로딩 중 레이아웃 불안정]**: 데이터 로딩 중 빈 화면으로 인해 레이아웃 시프트 발생',
              ],
            },
            {
              title: '기술적 해결 과제 및 구현',
              items: [
                '**[URL 기반 상태 관리]**: 검색어·장르·페이지를 URL 쿼리스트링으로 관리하여 뒤로가기 후에도 검색 상태 완벽 복원',
                '**[스크롤 위치 복원]**: sessionStorage를 활용하여 상세 페이지 이동 후 뒤로가기 시 이전 스크롤 위치 복원',
                '**[디바운스 검색]**: 입력 후 일정 시간이 지난 뒤에만 API를 호출하도록 디바운스를 적용하여 불필요한 호출 최소화',
                '**[Skeleton UI]**: 데이터 로딩 중 카드 형태의 Skeleton을 표시하여 레이아웃 시프트 없는 로딩 UX 구현',
              ],
            },
            {
              title: '성과 및 인사이트',
              items: [
                '**[UX 연속성 확보]**: 뒤로가기 후에도 검색 상태가 완전히 복원되어 사용자 이탈 없는 탐색 경험 구현',
                '**[API 호출 효율화]**: 디바운스 적용으로 불필요한 요청 감소 및 응답 속도 개선',
                '**[Next.js 학습]**: 단순 개념 학습을 넘어 실제 문제를 해결하며 Next.js SSR·CSR 분리, 상태 관리 패턴을 실전으로 익힘',
              ],
            },
          ],
        },
        {
          subject: 'Next.js API Routes를 활용한 서버사이드 번역 처리',
          images: [],
          sections: [
            {
              title: '프로젝트 배경 및 핵심 과제',
              items: [
                '**[외국어 리뷰 접근성 문제]**: TMDB API에서 제공하는 리뷰가 대부분 영어로 작성되어 국내 사용자의 접근성이 낮음',
                '**[클라이언트 API 키 노출 위험]**: DeepL API를 클라이언트에서 직접 호출할 경우 API 키가 노출되는 보안 문제',
                '**[CORS 문제]**: 브라우저에서 외부 번역 API를 직접 호출 시 CORS 정책으로 인한 차단 발생',
              ],
            },
            {
              title: '기술적 해결 과제 및 구현',
              items: [
                '**[API Routes 활용]**: Next.js API Routes를 번역 프록시 서버로 활용하여 클라이언트 → Next.js 서버 → DeepL API 흐름으로 구현',
                '**[API 키 보안]**: DeepL API 키를 서버사이드 환경 변수로 관리하여 클라이언트에 노출되지 않도록 처리',
                '**[CORS 해결]**: 서버사이드에서 외부 API를 호출하는 구조로 브라우저 CORS 문제 원천 차단',
              ],
            },
            {
              title: '성과 및 인사이트',
              items: [
                '**[보안 강화]**: API 키를 서버에서만 관리하여 클라이언트 노출 위험 제거',
                '**[사용자 접근성 향상]**: 영문 리뷰를 한국어로 번역 제공하여 콘텐츠 접근성 개선',
                '**[Next.js 활용 역량 확보]**: API Routes를 프록시 서버로 활용하는 패턴을 통해 Next.js 풀스택 활용 경험 확보',
              ],
            },
          ],
        },
      ],
    },
    {
      title: '핏플(fitpl) 앱 프로젝트',
      startedAt: '2025-04',
      where: '키워드, 위치 매칭 기반 사용자 맞춤형 장소 추천 및 일정 관리 서비스',
      descriptions: [
        {
          content: 'GitHub',
          weight: 'MEDIUM',
          href: 'https://github.com/T-BluePot/barogagi-back',
        },
        {
          content: '기술 스택',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'Java, Spring Boot, JPA, MyBatis, MariaDB, 퍼플북(알림톡/SMS), Spring Mail, Discord Webhook, Swagger, GitHub',
            },
          ],
        },
        {
          content: '핵심 구현',
          weight: 'MEDIUM',
          descriptions: [
            { content: '동일한 코드 품질 유지를 위한 공통 API 규격 수립 및 Swagger 연동' },
            {
              content:
                'OAuth 기반 소셜 회원가입·로그인 및 JWT Access/Refresh Token 이중 구조 인증 프로세스 설계·개발',
            },
            { content: '회원가입·로그인·회원 관련 RESTful API 개발' },
            { content: 'Discord Webhook 기반 실시간 서버 장애 알림 시스템 구축' },
            { content: 'Outbox 패턴 기반 탈퇴 관련 배치 프로세스 설계·개발' },
          ],
        },
      ],
      cases: [
        {
          subject: '공통 API 규격 수립 및 OAuth/JWT 기반 인증 프로세스 개발',
          sections: [
            {
              title: '프로젝트 배경 및 핵심 과제',
              items: [
                '**[프로젝트 배경]**: 실무를 병행하며 나만의 서비스를 만들고 싶다는 목표로 직장 동료들과 시작한 팀 프로젝트. 백엔드 2명 중 한 명은 서버 설계를, 본인은 프로젝트 구성과 API 규격 수립을 담당하기로 역할 분리',
                '**[코드 일관성 필요]**: 두 명이 동일한 품질의 코드를 작성하기 위해 URL 형식·결과 코드·오류 코드·응답 형식 등 공통 규격 수립 필요',
                '**[인증 구조 설계 필요]**: 전화번호·인증번호 입력 방식은 절차가 번거로워 회원가입 과정에서 사용자 이탈이 예상됨. 사용자가 더 편리하게 회원가입·로그인할 수 있도록 소셜 로그인 도입 필요. 세션 기반 인증의 확장성 한계를 고려하여 토큰 기반 인증 구조 설계 필요',
              ],
            },
            {
              title: '기술적 해결 과제 및 구현',
              items: [
                '**[공통 API 규격 수립]**: URL 형식·결과 코드·오류 코드 관리·응답 형식 등을 설계하고 Swagger 연동으로 API 명세 문서화',
                '**[OAuth 기반 소셜 로그인]**: Google·Kakao·NAVER OAuth2 인증을 활용한 회원가입·로그인 구현. 최초 소셜 로그인 시 추가 정보 입력 없이 자동으로 계정 생성',
                '**[JWT 이중 구조 설계]**: Access/Refresh Token 이중 구조로 설계. Access는 API 인증, Refresh는 재발급 및 민감 기능 인증에 사용하도록 역할 분리',
                '**[토큰 상태 관리]**: DB 기반으로 Refresh Token 상태를 관리하여 유효/무효 토큰 통제. 재발급 시 기존 동일 Access, Refresh 토큰을 모두 무효화하는 토큰 회전 전략 적용',
              ],
            },
            {
              title: '성과 및 인사이트',
              items: [
                '**[코드 일관성 확보]**: 공통 API 규격 수립으로 두 명이 동일한 구조의 코드를 작성하여 유지보수 효율 향상',
                '**[사용자 편의성 향상]**: 소셜 로그인 도입으로 복잡한 회원가입 절차를 제거하여 서비스 진입 장벽 감소',
                '**[보안 수준 향상]**: Access/Refresh 분리 및 토큰 회전 전략 적용으로 토큰 탈취 및 재사용 공격 대응',
                '**[인증 설계 경험 확보]**: 토큰 발급·만료·재발급·로그아웃까지 전체 인증 라이프사이클 구현 경험 확보',
              ],
            },
          ],
        },
        {
          subject: 'Discord Webhook 기반 실시간 서버 장애 알림 시스템 구축',
          sections: [
            {
              title: '프로젝트 배경 및 핵심 과제',
              items: [
                '**[장애 대응 지연]**: 서버 오류 발생 시 로그를 직접 확인해야 하는 구조로 즉각적인 대응이 어려운 상황',
                '**[알림 채널 선택]**: 팀 회의를 디스코드로 진행하고 있어 별도 툴 없이 디스코드로 알림을 받는 방식 선택',
                '**[알림 과다 문제]**: 모든 예외를 알림으로 받을 경우 운영 노이즈 증가 및 대응 효율 저하 우려',
              ],
            },
            {
              title: '기술적 해결 과제 및 구현',
              items: [
                '**[예외 레벨 분리]**: BusinessException과 일반 Exception을 구분하여 의도된 오류와 시스템 장애를 분리 처리',
                '**[실시간 알림 구축]**: Discord Webhook 기반으로 서버 장애 발생 시 실시간 알림 전송 기능 구현',
                '**[알림 조건 제어]**: ErrorCode의 notify 옵션을 활용하여 필요한 예외만 선택적으로 알림 전송',
                '**[알림 중복 방지]**: ErrorThrottle을 적용하여 동일 오류의 반복 알림 제한',
                '**[에러 정보 구조화]**: 서비스·환경·URI·Method·Exception·Message·Stack Trace를 포함한 메시지 포맷 설계',
              ],
            },
            {
              title: '성과 및 인사이트',
              items: [
                '**[장애 대응 속도 향상]**: 오류 발생 즉시 알림을 통해 실시간 대응 가능',
                '**[운영 효율 개선]**: 로그 확인 없이도 핵심 에러 정보를 즉시 파악 가능',
              ],
            },
          ],
        },
        {
          subject: 'Outbox 패턴 기반 탈퇴 배치 프로세스 개발',
          images: [],
          sections: [
            {
              title: '프로젝트 배경 및 핵심 과제',
              items: [
                '**[탈퇴 처리 자동화 필요]**: 회원 탈퇴 및 사전 안내를 수동으로 처리하기 어려워 자동화된 배치 시스템 필요',
                '**[발송 안정성 문제]**: 메시지 발송 실패 시 재처리 및 이력 관리로 예상치 못한 문제에 대한 대응 필요',
                '**[채널 분기 필요]**: 사용자 유형(일반/소셜)에 따라 알림 채널을 다르게 처리해야 하는 요구사항 존재',
              ],
            },
            {
              title: '기술적 해결 과제 및 구현',
              items: [
                '**[Outbox 패턴 적용]**: 발송 대상자를 MESSAGE_OUTBOX에 READY 상태로 저장하여 비동기 처리 구조 구성',
                '**[상태 전이 관리]**: READY -> PROCESSING -> SUCCESS/FAIL/IMPOSSIBLE 흐름으로 발송 상태 관리',
                '**[재시도 로직]**: 발송 실패 시 최대 3회까지 재시도하도록 구현. 알림톡 실패 시 즉시 IMPOSSIBLE 상태로 전환하여 재시도 방지 및 문자로 재시도',
                '**[다중 채널 발송]**: 사용자 유형에 따라 이메일·알림톡/SMS로 분기 처리하도록 구현',
                '**[발송 이력 관리]**: MESSAGE_SEND_HISTORY에 성공/실패 여부와 관계없이 모든 발송 이력 저장',
              ],
            },
            {
              title: '성과 및 인사이트',
              items: [
                '**[발송 안정성 확보]**: 재시도 및 상태 관리 로직을 통해 메시지 발송 신뢰성 향상',
                '**[운영 자동화]**: 탈퇴 및 사전 안내 프로세스를 배치로 자동화하여 운영 부담 감소',
                '**[실무형 배치 설계 경험 확보]**: 상태 관리·재시도·채널 분기까지 포함한 배치 처리 구조 구현 경험 확보',
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default sideProject;
