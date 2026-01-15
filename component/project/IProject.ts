import { IRow } from '../common/IRow';
import { ICommon } from '../common/ICommon';

export declare namespace IProject {
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

    sections: {
      title:
        | '문제 상황 (Problem)'
        | '배경 및 요구사항 (Background)'
        | '해결 방안 (Solution)'
        | '성과 (Outcome)'
        | '배움 및 회고 (Learned)'
        | '기술 스택 및 도전 과제 (Tech Stack & Challenge)'
        | '서비스 비전 (Service Vision)'
        | '핵심 개발 내용 (Core Development)'
        | '운영 및 성장 (Operation & Growth)'
        | '현황 분석 (As-Is / Status)'
        | '문제 해결 과정 (Troubleshooting)'
        | '안정화 결과 (Stability / Result)'
        | '성과 및 배움 (Outcome & Learned)'
        | '도입 배경 및 요구사항 (Background & Requirements)'
        | '시스템 고도화 목표 (System Optimization Goals)';
      items: string[];
    }[];
  }
}
