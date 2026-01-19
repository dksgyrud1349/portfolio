import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { IRow } from './IRow';
import { Style } from './Style';
import { CommonDescription } from './CommonDescription';

export function CommonRows({
  index,
  payload,
  onClickRight,
  open = false,
  rightExtra,
}: PropsWithChildren<{
  payload: IRow.Payload;
  index: number;
  onClickRight?: () => void;
  open?: boolean;
  rightExtra?: React.ReactNode;
}>) {
  const { left, right } = payload;

  return (
    <div>
      {index > 0 && <hr />}

      <Row>
        <Col sm={12} md={3} className="text-md-right">
          <h4 style={Style.gray}>{left.title}</h4>
        </Col>

        <Col sm={12} md={9} style={{ marginBottom: '3rem' }}>
          {right.title && <h4>{right.title}</h4>}

          {right.subTitle && (
            <p>
              <i style={Style.gray}>{right.subTitle}</i>
            </p>
          )}

          {right.descriptions && <CommonDescription descriptions={right.descriptions} />}

          {/* 🔽 토글 영역 */}
          {open && rightExtra}

          {/* 🔽 자세히 보기 (토글 닫혀 있을 때만) */}
          {!open && onClickRight && (
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <button
                type="button"
                onClick={onClickRight}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  cursor: 'pointer',
                  color: '#666',
                  fontSize: '0.9rem',
                }}
              >
                자세히 보기
              </button>
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}
