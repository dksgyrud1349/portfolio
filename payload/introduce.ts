import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '"화면 너머 현장의 흐름까지 설계하는, 엔드 투 엔드(End-to-End) 백엔드 개발자"',
    'Java(Spring) 기반의 탄탄한 백엔드 설계 능력을 바탕으로, 공공기관 및 지자체의 대민 서비스 안정화를 주도해 왔습니다. 단순히 웹 개발에 머물지 않고 모바일 앱, 키오스크, 태블릿 등 멀티 플랫폼이 융합된 복잡한 비즈니스 환경에서 예약·결제·인증 시스템을 성공적으로 구축한 경험을 보유하고 있습니다. 100여 건의 결함 전수 해결과 실시간 핫픽스 대응으로 다져진 실무 감각을 통해, 어떤 환경에서도 비즈니스 로직의 빈틈을 메우고 시스템의 가치를 증명하는 인재가 되겠습니다.',
  ],
  sign: 'HyokyungAn',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
