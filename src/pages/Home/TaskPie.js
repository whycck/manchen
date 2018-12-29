import React, { memo } from 'react';
import { Row, Col, Icon, Tooltip, Card, Avatar } from 'antd';
import { Pie, WaterWave, Gauge, TagCloud } from '@/components/Charts';
import { FormattedMessage } from 'umi/locale';
import { ChartCard, MiniArea, MiniBar, MiniProgress, Field } from '@/components/Charts';
import Trend from '@/components/Trend';
import numeral from 'numeral';
import Yuan from '@/utils/Yuan';
const { Meta } = Card;
import styles from './Home.less';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 24 },
};

const TaskPie = memo(({ loading, visitData }) => (
  <Row gutter={24}>
    <Col {...topColResponsiveProps}>
      <Card
        title="等待分配任务的客户"
        bodyStyle={{ textAlign: 'center', fontSize: 0 }}
        headStyle={{ textAlign: 'center' }}
        bordered={false}
      >
        <Pie
          total={364}
          height={160}
          tooltip={false}
          data={[
            {
              x: '等待分配任务的客户',
              y: 364,
            },
          ]}
        />
      </Card>
    </Col>
    <Col {...topColResponsiveProps}>
      <Card
        title="本月未开始的任务"
        headStyle={{ textAlign: 'center' }}
        bodyStyle={{ textAlign: 'center', fontSize: 0 }}
        bordered={false}
      >
        <Pie
          total={211}
          height={160}
          tooltip={false}
          data={[
            {
              x: '本月未开始的任务',
              y: 211,
            },
          ]}
        />
      </Card>
    </Col>
    <Col {...topColResponsiveProps}>
      <Card
        title="上月未记账的客户"
        headStyle={{ textAlign: 'center' }}
        bodyStyle={{ textAlign: 'center', fontSize: 0 }}
        bordered={false}
      >
        <Pie
          total={70}
          height={160}
          tooltip={false}
          data={[
            {
              x: '上月未记账的客户',
              y: 70,
            },
          ]}
        />
      </Card>
    </Col>
    <Col {...topColResponsiveProps}>
      <Card
        title="本月待报账的客户"
        headStyle={{ textAlign: 'center' }}
        bodyStyle={{ textAlign: 'center', fontSize: 0 }}
        bordered={false}
      >
        <Pie
          total={56}
          height={160}
          tooltip={false}
          data={[
            {
              x: '本月待报账的客户',
              y: 56,
            },
          ]}
        />
      </Card>
    </Col>
  </Row>
));

export default TaskPie;
