import { ISideProject } from '../component/sideProject/ISideProject';

const sideProject: ISideProject.Payload = {
  disable: false,
  list: [
    {
      title: '바로가기 앱 프로젝트',
      startedAt: '2025-04',
      where: '키워드 매칭 기반 사용자 맞춤형 장소 추천 및 일정 관리 서비스',
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
              content: 'Java 17, Spring Boot 3.2.1, Spring Data JPA, Spring Security, JWT, GitHub',
            },
            {
              content:
                '협업 프로세스 : GitHub을 활용한 브랜치 전략(Git Flow) 및 codeRabbit AI를 활용해 코드 피드백 시스템 사용',
            },
          ],
        },
        {
          content: '역할',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '신규 프로젝트 초기 설계 및 API 개발',
            },
            {
              content:
                'Spring Security 기반 보안 체계 수립 및 팀 협업을 위한 API 가이드라인 및 표준 인터페이스 정의',
            },
          ],
        },
        {
          content: '핵심 내용',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '[신규 프로젝트 아키텍처 설계]: 개발 생산성 향상을 위한 초기 프로젝트 세팅 및 모듈 구조 설계',
            },
            {
              content:
                '[OAuth 2.0 및 JWT 보안 인증]: Spring Security와 JWT를 결합한 무상태 인증 환경 구축 및 소셜 로그인 연동',
            },
            {
              content:
                '[API 명세 자동화 및 표준화]: Swagger(Springdoc) 연동을 통한 인터페이스 문서화 및 팀 공통 API 응답 규격 정의',
            },
            {
              content:
                '[객체 지향 데이터 모델링]: JPA 기반의 데이터 접근 계층 구축으로 생산성 중심의 백엔드 개발 환경 기틀 마련',
            },
          ],
        },
      ],
      cases: [
        {
          subject: '',
          sections: [
            {
              title: '프로젝트 배경 및 핵심 과제',
              items: [
                '**[최신 스택 기반 구축]**: Java 17/Spring Boot 3.2를 도입하여 생산성 높은 개발 환경을 조성하고 API 규격 수립',
                '**[확장 가능한 보안 설계]**: Stateless 인증 시스템 및 객체 지향적 데이터 모델링 요구',
              ],
            },
            {
              title: '기술적 해결 과제 및 구현',
              items: [
                '**[보안 아키텍처 설계]**: Spring Security와 JWT를 결합한 무상태 인증 구조 설계 및 보안 필터 체인 최적화',
                '**[JPA 기반 도메인 모델링]**: Spring Data JPA 도입으로 반복 쿼리를 자동화',
              ],
            },
            {
              title: '성과 및 인사이트',
              items: [
                '**[개발 생산성 향상]**: JPA 도입으로 초기 프로토타입 개발 속도를 기존 방식 대비 30% 이상 향상',
                '**[코드 품질 상향 평준화]**: 표준화된 아키텍처를 공유하여 팀원 간 기술적 간극을 줄이고 일관된 코드 품질을 유지',
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default sideProject;
