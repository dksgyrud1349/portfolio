import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    // '월평균 1.2만 명(일 평균 약 400명)이 이용하는 예약·결제·입장 시스템의 설계부터 운영까지 전 과정을 담당했습니다. 공공기관 서비스에서는 100여 건 이상의 결함을 전수 개선하여 정기 점검 및 유지보수 과정에서 오류 발생 0건을 유지하였고, 실시간 장애 대응과 정기 점검 기반의 선제적 관리 체계를 구축하여 시스템 안정성을 확보했습니다. 또한 웹 서비스뿐만 아니라 모바일 앱 API, 키오스크·태블릿 등 다양한 디바이스와 연동되는 비즈니스 로직을 설계·개발하고, 하드웨어 제어까지 포함한 통합 시스템을 구현했습니다.',
    'Java, Spring Boot 기반 백엔드 개발을 중심으로 약 1년 8개월간 공공기관 시스템 설계·개발·운영 경험을 쌓았습니다.',
    '단순히 기능을 구현하는 데 그치지 않고, 운영 중 발생하는 문제를 구조적으로 개선하는 것을 중요하게 생각합니다. 인천 MICE뷰로에서 미해결 오류 100여 건을 기간 내 전량 해결하고 오류 0건 운영 상태를 달성한 경험, 여주 파크골프장에서 고정형 QR 부정 이용 문제를 OTP 기반 동적 QR 인증 체계로 원천 차단한 경험이 이를 잘 보여줍니다.',
    '실무 역량을 바탕으로 직장 동료들과 AI 기반 장소 추천 앱 서비스 "핏플(fitpl)"을 개발하고, Next.js 사이드 프로젝트를 진행하며 프론트엔드 역량도 꾸준히 확장하고 있습니다.',
    '부족함을 인식하고 스스로 채워나가는 방식으로 성장해왔고, 앞으로도 머물러 있지 않고 한 단계씩 나아가는 개발자가 되겠습니다.',
  ],
  sign: 'HyokyungAn',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
