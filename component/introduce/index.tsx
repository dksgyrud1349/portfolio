import { Row, Col, Badge, Card, CardBody, CardTitle, CardText } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { DateTime } from 'luxon';
import { Style } from '../common/Style';
import Util from '../common/Util';
import { IIntroduce } from './IIntroduce';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IIntroduce.Payload;

export const Introduce = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const latestUpdated = DateTime.fromFormat(
    payload.latestUpdated,
    Util.LUXON_DATE_FORMAT.YYYY_LL_DD,
  );

  const latestUpdatedByNow = Math.floor(
    DateTime.local().diff(latestUpdated).milliseconds / 1000 / 60 / 60 / 24,
  );

  return (
    <div className="mt-5">
      <Row>
        <Col xs={12} md={3}>
          <h2 style={Style.blue}>INTRODUCE</h2>
        </Col>

        <Col xs={12} md={9}>
          {/* Skill Cards */}
          <Row className="g-3 mb-4">
            <Col xs={12} sm={6} lg={4}>
              <Card className="h-100 shadow-sm">
                <CardBody>
                  <CardTitle tag="h5">Quality</CardTitle>
                  <CardText>
                    오류 100여 건 전량 해결 <br />
                    오류 0건 운영 달성
                  </CardText>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} sm={6} lg={4}>
              <Card className="h-100 shadow-sm">
                <CardBody>
                  <CardTitle tag="h5">Experience</CardTitle>
                  <CardText>
                    공공기관 시스템 <br />
                    설계·개발·운영 경험
                  </CardText>
                </CardBody>
              </Card>
            </Col>

            <Col xs={12} sm={6} lg={4}>
              <Card className="h-100 shadow-sm">
                <CardBody>
                  <CardTitle tag="h5">Ownership</CardTitle>
                  <CardText>
                    요구사항부터 운영까지 <br />
                    풀사이클 수행
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>

          {payload.contents.map((content, index) => (
            <p key={index.toString()}>{content}</p>
          ))}

          <p className="text-right">
            <small>Latest Updated</small>{' '}
            <Badge color="secondary">
              {`${latestUpdated.toFormat(
                Util.LUXON_DATE_FORMAT.YYYY_DOT_LL_DOT_DD,
              )} (D+${latestUpdatedByNow})`}
            </Badge>
          </p>

          <p className="text-right" style={Style.sign}>
            {payload.sign}
          </p>
        </Col>
      </Row>
    </div>
  );
}
