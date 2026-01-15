import { PropsWithChildren } from 'react';
import { Row, Col } from 'reactstrap';
import { IRow } from './IRow';
import { Style } from './Style';
import { CommonDescription } from './CommonDescription';

export function CommonRows({
  index,
  payload,
  onClickRight,
  open,
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

        <Col sm={12} md={9}>
          {right.title && (
            <button
              type="button"
              onClick={onClickRight}
              className="flex items-center gap-2 cursor-pointer bg-transparent border-0 p-0 text-left"
              style={{ all: 'unset', cursor: onClickRight ? 'pointer' : 'default' }}
            >
              <h4 style={{ margin: 0 }}>
                {onClickRight && <span style={{ fontSize: '90%' }}>{open ? '▼ ' : '▶ '}</span>}{' '}
                {right.title}
              </h4>
            </button>
          )}

          {right.subTitle && (
            <p>
              <i style={Style.gray}>{right.subTitle}</i>
            </p>
          )}

          {rightExtra}

          {right.descriptions && <CommonDescription descriptions={right.descriptions} />}
        </Col>
      </Row>
    </div>
  );
}
