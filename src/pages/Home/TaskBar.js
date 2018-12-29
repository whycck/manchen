import React, { memo } from 'react';
import { Row, Col, Icon, Tooltip, Card, Avatar, Tabs, DatePicker } from 'antd';
import { Pie, WaterWave, Gauge, TagCloud, Bar } from '@/components/Charts';
import { FormattedMessage } from 'umi/locale';
import Trend from '@/components/Trend';
import numeral from 'numeral';
import Yuan from '@/utils/Yuan';
const { Meta } = Card;
const { TabPane } = Tabs;
const { RangePicker } = DatePicker;
import styles from './Home.less';

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 8,
  style: { marginBottom: 24 },
};

const returnMoneyData = [
  {
    x: '记账',
    y: Math.floor(Math.random() * 1000) + 200,
  },
  {
    x: '工商',
    y: Math.floor(Math.random() * 1000) + 200,
  },
  {
    x: '其它',
    y: Math.floor(Math.random() * 1000) + 200,
  },
  {
    x: '收费单',
    y: Math.floor(Math.random() * 1000) + 200,
  },
];

const addSignCustomerData = [
  {
    x: '记账',
    y: Math.floor(Math.random() * 1000) + 200,
  },
  {
    x: '工商',
    y: Math.floor(Math.random() * 1000) + 200,
  },
  {
    x: '其它',
    y: Math.floor(Math.random() * 1000) + 200,
  },
];

const addTargetCustomerData = [
  {
    x: '记账',
    y: Math.floor(Math.random() * 1000) + 200,
  },
  {
    x: '工商',
    y: Math.floor(Math.random() * 1000) + 200,
  },
  {
    x: '其它',
    y: Math.floor(Math.random() * 1000) + 200,
  },
];

const TaskBar = memo(({ loading, visitData }) => (
  <Card loading={loading} bordered={false}>
    <Tabs size="large" tabBarStyle={{ marginBottom: 24 }}>
      <TabPane tab="本月" key="thisMonth">
        <Row gutter={24}>
          <Col {...topColResponsiveProps}>
            <Bar height={292} title="回款金额" data={returnMoneyData} />
          </Col>
          <Col {...topColResponsiveProps}>
            <Bar height={292} title="新增签约客户数" data={addSignCustomerData} />
          </Col>
          <Col {...topColResponsiveProps}>
            <Bar height={292} title="新增潜在客户" data={addTargetCustomerData} />
          </Col>
        </Row>
      </TabPane>

      <TabPane tab="本季度" key="thisQuarter">
        <Row gutter={24}>
          <Col {...topColResponsiveProps}>
            <Bar height={292} title="回款金额" data={returnMoneyData} />
          </Col>
          <Col {...topColResponsiveProps}>
            <Bar height={292} title="新增签约客户数" data={addSignCustomerData} />
          </Col>
          <Col {...topColResponsiveProps}>
            <Bar height={292} title="新增潜在客户" data={addTargetCustomerData} />
          </Col>
        </Row>
      </TabPane>
    </Tabs>
  </Card>
));

export default TaskBar;
