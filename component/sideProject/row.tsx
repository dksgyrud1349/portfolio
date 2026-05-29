import { DateTime } from 'luxon';
import { useState } from 'react';
import { ISideProject } from './ISideProject';
import { CommonRows } from '../common/CommonRow';
import { IRow } from '../common/IRow';
import Util from '../common/Util';
import { EmptyRowCol } from '../common';

/* ===============================
   메인 컴포넌트
================================ */

export default function ProjectRow({ payload }: { payload: ISideProject.Payload }) {
  return (
    <EmptyRowCol>
      {payload.list.map((item) => (
        <ProjectItem key={`${item.title}-${item.startedAt}`} item={item} />
      ))}
    </EmptyRowCol>
  );
}

/* ===============================
   프로젝트 아이템
================================ */

function ProjectItem({ item }: { item: ISideProject.Item }) {
  const [open, setOpen] = useState(false);
  const cases = item.cases ?? [];
  const isToggleable = cases.length > 0;

  // ✅ 추가: case visible 상태
  const [visibleCases, setVisibleCases] = useState(cases.map(() => true));

  // ✅ 토글 시 초기화
  const handleToggle = () => {
    if (!open) {
      setVisibleCases(cases.map(() => true));
    }
    setOpen(!open);
  };

  // ✅ case 닫기 처리
  const handleCloseCase = (idx: number) => {
    const updated = [...visibleCases];
    updated[idx] = false;
    setVisibleCases(updated);

    // 🔥 핵심: 전부 닫히면 프로젝트도 닫기
    if (updated.every((v) => !v)) {
      setOpen(false);
    }
  };

  return (
    <CommonRows
      index={0}
      payload={serialize(item)}
      open={open}
      onClickRight={isToggleable ? handleToggle : undefined}
      rightExtra={
        open && (
          <div className="mt-4 mb-6 text-sm text-gray-700">
            {cases.map((c, idx) =>
              visibleCases[idx] ? (
                <CaseItem
                  key={`${item.title}-${c.subject ?? 'case'}`}
                  c={c}
                  index={idx}
                  onClose={() => handleCloseCase(idx)} // ✅ 추가
                />
              ) : null,
            )}
          </div>
        )
      }
    />
  );
}

/* ===============================
   CASE 컴포넌트 (수정됨)
================================ */

function CaseItem({
  c,
  index,
  onClose,
}: {
  c: any;
  index: number;
  onClose: () => void; // ✅ 추가
}) {
  return (
    <div
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
          {(c.images ?? []).slice(0, 2).map((src: string) => (
            <img
              key={src}
              src={src}
              alt={`case-img-${src}`}
              style={{
                maxWidth: '300px',
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
          CASE {index + 1}
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

      {/* 내용 */}
      {(c.sections ?? []).map((section: any) => (
        <SectionByType
          key={`${c.subject}-${section.title}`}
          title={section.title}
          items={section.items}
        />
      ))}

      {/* 닫기 버튼 */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginTop: '1rem',
        }}
      >
        <button
          type="button"
          onClick={onClose}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#666',
            fontSize: '0.9rem',
            margin: '1%',
          }}
        >
          닫기
        </button>
      </div>
    </div>
  );
}
/* ===============================
   Row 직렬화
================================ */

function serialize(payload: ISideProject.Item): IRow.Payload {
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
   강조 처리
================================ */

function HighlightText({ text }: { text: string }) {
  const html = text.replace(
    /\*\*(.*?)\*\*/g,
    '<strong style="font-weight:600;color:#111827">$1</strong>',
  );

  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}

/* ===============================
   스타일 메타
================================ */

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
