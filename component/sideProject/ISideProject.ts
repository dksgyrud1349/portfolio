import { IRow } from '../common/IRow';
import { ICommon } from '../common/ICommon';

export declare namespace ISideProject {
  /**
   * ### Sample Rendering
   *
   * ![image](https://user-images.githubusercontent.com/8033320/78034257-726f1480-73a2-11ea-9bbe-fc9bde4551d1.png)
   *
   * @example https://github.com/uyu423/resume-nextjs/blob/master/payload/project.ts
   */
  export interface Payload extends ICommon.Payload {
    /** ### 프로젝트 리스트 */
    list: Item[];
  }

  export interface Item {
    /** ### 프로젝트 제목 */
    title: string;

    /** ### 제목 색 */
    titleColor?: string;

    /** ### 어디서 수행했는지 (or subtitle) */
    where: string;

    /**
     * ### 프로젝트 시작일
     *
     * @format YYYY-MM
     */
    startedAt: string;

    /**
     * ### 프로젝트 종료일
     *
     * @format YYYY-MM
     */
    endedAt?: string;

    /**
     * ### 프로젝트 요약 설명 (항상 노출)
     * - CommonRows 아래에 표시
     * - ** 강조 가능
     */
    descriptions: IRow.Description[];

    /**
     * ### 토글이 필요한 경우만 사용
     * - 없으면 토글 자체가 렌더링되지 않음
     */
    cases?: ProjectCase[];
  }

  export interface ProjectCase {
    /** CASE 옆에 표시될 제목 */
    subject?: string;
    images?: string[];

    sections: {
      title: '프로젝트 배경 및 핵심 과제' | '기술적 해결 과제 및 구현' | '성과 및 인사이트';
      items: string[];
    }[];
  }
}
