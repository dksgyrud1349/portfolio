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
  const cases = item.cases ?? [];
  const isToggleable = cases.length > 0;

  return (
    <CommonRows
      index={0}
      payload={serialize(item)}
      open={open}
      onClickRight={isToggleable ? () => setOpen(true) : undefined}
      rightExtra={
        <div
          style={{
            maxHeight: open ? '4000px' : '0px',
            opacity: open ? 1 : 0,
            overflow: 'hidden',
            transition: 'max-height 1.45s ease, opacity 0.35s ease',
          }}
        >
          {open && (
            <div className="mt-4 mb-6 text-sm text-gray-700">
              {cases.map((c) => {
                const caseKey = `${item.title}-${c.subject ?? 'case'}`;

                return (
                  <div
                    key={caseKey}
                    className="p-6 mb-6 mt-3"
                    style={{
                      backgroundColor: '#F9FAFB',
                      border: '2px solid #E5E7EB',
                      borderRadius: '22px',
                    }}
                  >
                    {/* 이미지 */}
                    {(c.images ?? []).length > 0 && (
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          gap: '16px',
                          marginTop: '0.5rem',
                          flexWrap: 'wrap',
                        }}
                      >
                        {(c.images ?? []).slice(0, 2).map((src) => (
                          <img
                            key={src}
                            src={src}
                            alt={`case-img-${src}`}
                            style={{
                              maxWidth: '200px',
                              width: '100%',
                              borderRadius: '14px',
                              border: '1px solid #E5E7EB',
                            }}
                          />
                        ))}
                      </div>
                    )}

                    {/* CASE 제목 */}
                    <div
                      className="flex items-center gap-2"
                      style={{
                        fontSize: '140%',
                        fontWeight: 700,
                        marginTop: '0.5rem',
                        marginLeft: '1.5rem',
                      }}
                    >
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

                    {(c.sections ?? []).map((section) => (
                      <SectionByType
                        key={`${caseKey}-${section.title}`}
                        title={section.title}
                        items={section.items}
                      />
                    ))}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        marginTop: '1rem',
                        marginBottom: '1rem',
                        marginRight: '1.2rem',
                      }}
                    >
                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        style={{
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          cursor: 'pointer',
                          color: '#666',
                          fontSize: '0.9rem',
                        }}
                      >
                        닫기
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
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
      titleColor: payload.titleColor,
      subTitle: payload.where,
      descriptions: payload.descriptions ?? [],
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
      className="mb-2 ml-3 mr-3 pt-2 pl-3 pr-3"
      style={{
        backgroundColor: meta.bg,
        border: meta.border,
        borderRadius: '18px',
      }}
    >
      <div
        className="flex items-center gap-2 mb-1"
        style={{
          fontWeight: 700,
          fontSize: '120%',
          color: meta.titleColor,
        }}
      >
        <span>{meta.icon}</span>
        <span>{title}</span>
      </div>

      <ul className="list-disc pl-5 space-y-1">
        {items.map((text) => (
          <li key={`${title}-${text}`}>
            <HighlightText text={text} />
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ===============================
   강조 처리 (** **)
================================ */

function HighlightText({ text }: { text: string }) {
  const html = text.replace(
    /\*\*(.*?)\*\*/g,
    '<strong style="font-weight:600;color:#111827">$1</strong>',
  );

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

const SECTION_META: Record<
  string,
  {
    icon?: string;
    titleColor?: string;
    bg: string;
    border: string;
  }
> = {
  '프로젝트 배경 및 핵심 과제': {
    bg: 'rgba(249, 250, 251)',
    border: '1.5px solid rgb(229, 231, 235)',
  },
  '기술적 해결 과제 및 구현': {
    titleColor: '#1D4ED8',
    bg: 'rgba(96,165,250,0.15)',
    border: '1.5px solid rgba(96,165,250,0.25)',
  },
  '성과 및 인사이트': {
    bg: 'rgba(249, 250, 251)',
    border: '1.5px solid rgb(229, 231, 235)',
  },
};
