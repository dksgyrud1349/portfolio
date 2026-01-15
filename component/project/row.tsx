import { DateTime } from 'luxon';
import { useState } from 'react';
import { IProject } from './IProject';
import { CommonRows } from '../common/CommonRow';
import { IRow } from '../common/IRow';
import Util from '../common/Util';
import { EmptyRowCol } from '../common';

/* ===============================
   메인 컴포넌트
================================ */

export default function ProjectRow({ payload }: { payload: IProject.Payload }) {
  return (
    <EmptyRowCol>
      {payload.list.map((item) => (
        <ProjectItem key={`${item.title}-${item.startedAt}`} item={item} />
      ))}
    </EmptyRowCol>
  );
}

function ProjectItem({ item }: { item: IProject.Item }) {
  const [open, setOpen] = useState(false);
  const isToggleable = !!item.cases?.length;

  return (
    <CommonRows
      index={0}
      payload={serialize(item)}
      open={open}
      onClickRight={isToggleable ? () => setOpen((prev) => !prev) : undefined}
      rightExtra={
        isToggleable &&
        open && (
          <div className="mt-4 mb-6 text-sm text-gray-700">
            {item.cases?.map((c) => (
              <div
                key={c.subject ?? JSON.stringify(c)}
                className="p-6 mb-6 mt-3"
                style={{
                  backgroundColor: '#F9FAFB',
                  border: '2px solid #E5E7EB',
                  borderRadius: '22px',
                }}
              >
                {/* CASE 제목 */}
                <div
                  className="flex items-center gap-2 m-4"
                  style={{ fontSize: '140%', fontWeight: 700 }}
                >
                  <span role="img" aria-label="case">
                    📌
                  </span>
                  <span>
                    CASE
                    {c.subject && (
                      <span
                        style={{
                          marginLeft: '8px',
                          fontSize: '80%',
                          color: '#6B7280',
                        }}
                      >
                        – {c.subject}
                      </span>
                    )}
                  </span>
                </div>

                {c.sections.map((section) => (
                  <SectionByType
                    key={`${section.title}-${section.items.length}`}
                    title={section.title}
                    items={section.items}
                  />
                ))}
              </div>
            ))}
          </div>
        )
      }
    />
  );
}

/* ===============================
   Row 직렬화
================================ */

function serialize(payload: IProject.Item): IRow.Payload {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;

  const startedAt = DateTime.fromFormat(payload.startedAt, DATE_FORMAT.YYYY_LL).toFormat(
    DATE_FORMAT.YYYY_DOT_LL,
  );

  const title = payload.endedAt
    ? `${startedAt} ~ ${DateTime.fromFormat(payload.endedAt, DATE_FORMAT.YYYY_LL).toFormat(
        DATE_FORMAT.YYYY_DOT_LL,
      )}`
    : `${startedAt} ~`;

  return {
    left: { title },
    right: {
      title: payload.title,
      subTitle: payload.where,
      descriptions: payload.descriptions,
    },
  };
}

/* ===============================
   섹션 렌더러
================================ */

function SectionByType({ title, items }: { title: string; items: string[] }) {
  const meta = SECTION_META[title] ?? {
    icon: '📄',
    titleColor: '#374151',
    bg: 'rgba(229,231,235,0.5)',
    border: '1.5px solid rgba(209,213,219,0.8)',
  };

  return (
    <div
      className="mb-3 ml-3 mr-3 pt-3 pl-3 pr-3"
      style={{
        backgroundColor: meta.bg,
        border: meta.border,
        borderRadius: '18px',
      }}
    >
      <div
        className="flex items-center gap-2 mb-2"
        style={{
          fontWeight: 700,
          fontSize: '120%',
          color: meta.titleColor,
        }}
      >
        <span role="img" aria-label="section-icon">
          {meta.icon}
        </span>
        <span>{title}</span>
      </div>

      <ul className="list-disc pl-5 space-y-1">
        {items.map((text) => (
          <li key={text}>
            <HighlightText text={text} />
          </li>
        ))}
      </ul>
    </div>
  );
}

const SECTION_META: Record<
  string,
  {
    icon: string;
    titleColor: string;
    bg: string;
    border: string;
  }
> = {
  '문제 상황 (Problem)': {
    icon: '🚨 ',
    titleColor: '#DC2626',
    bg: 'rgba(248,113,113,0.15)',
    border: '1.5px solid rgba(248,113,113,0.25)',
  },
  '배경 및 요구사항 (Background)': {
    icon: '🚨 ',
    titleColor: '#DC2626',
    bg: 'rgba(248,113,113,0.15)',
    border: '1.5px solid rgba(248,113,113,0.25)',
  },
  '해결 방안 (Solution)': {
    icon: '🛠️ ',
    titleColor: '#2563EB',
    bg: 'rgba(96,165,250,0.15)',
    border: '1.5px solid rgba(96,165,250,0.25)',
  },
  '성과 (Outcome)': {
    icon: '🏆 ',
    titleColor: '#15803D',
    bg: 'rgba(74,222,128,0.15)',
    border: '1.5px solid rgba(74,222,128,0.25)',
  },
  '성과 및 배움 (Outcome & Learned)': {
    icon: '🏆 ',
    titleColor: '#15803D',
    bg: 'rgba(74,222,128,0.15)',
    border: '1.5px solid rgba(74,222,128,0.25)',
  },
  '배움 및 회고 (Learned)': {
    icon: '💡 ',
    titleColor: '#0F766E',
    bg: 'rgba(45,212,191,0.15)',
    border: '1.5px solid rgba(45,212,191,0.25)',
  },
  '기술 스택 및 도전 과제 (Tech Stack & Challenge)': {
    icon: '🧠 ',
    titleColor: '#374151',
    bg: 'rgba(229,231,235,0.6)',
    border: '1.5px solid rgba(209,213,219,0.8)',
  },
  '핵심 개발 내용 (Core Development)': {
    icon: '🛠️ ',
    titleColor: '#1D4ED8',
    bg: 'rgba(96,165,250,0.15)',
    border: '1.5px solid rgba(96,165,250,0.25)',
  },
  '운영 및 성장 (Operation & Growth)': {
    icon: '📈 ',
    titleColor: '#15803D',
    bg: 'rgba(74,222,128,0.15)',
    border: '1.5px solid rgba(74,222,128,0.25)',
  },
  '현황 분석 (As-Is / Status)': {
    icon: '🚨 ',
    titleColor: '#DC2626',
    bg: 'rgba(248,113,113,0.15)',
    border: '1.5px solid rgba(248,113,113,0.25)',
  },
  '문제 해결 과정 (Troubleshooting)': {
    icon: '🛠️ ',
    titleColor: '#1D4ED8',
    bg: 'rgba(96,165,250,0.15)',
    border: '1.5px solid rgba(96,165,250,0.25)',
  },
  '안정화 결과 (Stability / Result)': {
    icon: '🏆 ',
    titleColor: '#15803D',
    bg: 'rgba(74,222,128,0.15)',
    border: '1.5px solid rgba(74,222,128,0.25)',
  },
  '서비스 비전 (Service Vision)': {
    icon: '🔭 ',
    titleColor: '#374151',
    bg: 'rgba(229,231,235,0.6)',
    border: '1.5px solid rgba(209,213,219,0.8)',
  },
  '도입 배경 및 요구사항 (Background & Requirements)': {
    icon: '📋 ',
    titleColor: '#374151',
    bg: 'rgba(229,231,235,0.6)',
    border: '1.5px solid rgba(209,213,219,0.8)',
  },
  '시스템 고도화 목표 (System Optimization Goals)': {
    icon: '⚙️ ',
    titleColor: '#374151',
    bg: 'rgba(229,231,235,0.6)',
    border: '1.5px solid rgba(209,213,219,0.8)',
  },
};

/* ===============================
   강조 처리 (** **)
================================ */

function HighlightText({ text }: { text: string }) {
  const html = text.replace(
    /\*\*(.*?)\*\*/g,
    '<strong style="font-weight:600;color:#111827">$1</strong>',
  );

  // eslint-disable-next-line react/no-danger
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}
