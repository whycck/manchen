import React, { memo } from 'react';
import { Row, Col, Icon, Tooltip, Card, Avatar } from 'antd';
import { FormattedMessage } from 'umi/locale';
import { ChartCard, MiniArea, MiniBar, MiniProgress, Field } from '@/components/Charts';
import Trend from '@/components/Trend';
import numeral from 'numeral';
import Yuan from '@/utils/Yuan';
const { Meta } = Card;

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 8,
  lg: 6,
  xl: 4,
  style: { marginBottom: 36 },
};

const TaskRow = memo(({ loading, visitData }) => (
  <Row type="flex" justify="space-between">
    <Col {...topColResponsiveProps}>
      <Card loading={loading}>
        <Meta
          avatar={<Avatar src="http://168.yundaizhang.com/Manage/images/02.jpg" />}
          title="应收提醒"
          description="25家"
        />
      </Card>
    </Col>
    <Col {...topColResponsiveProps}>
      <Card loading={loading}>
        <Meta
          avatar={<Avatar src="http://168.yundaizhang.com/Manage/images/03.jpg" />}
          title="到期合同"
          description="672家"
        />
      </Card>
    </Col>
    <Col {...topColResponsiveProps}>
      <Card loading={loading}>
        <Meta
          avatar={<Avatar src="http://168.yundaizhang.com/Manage/images/04.jpg" />}
          title="逾期欠款"
          description="587家"
        />
      </Card>
    </Col>
    <Col {...topColResponsiveProps}>
      <Card loading={loading}>
        <Meta
          avatar={<Avatar src="http://168.yundaizhang.com/Manage/images/01.jpg" />}
          title="逾期任务"
          description="30851个"
        />
      </Card>
    </Col>
    <Col {...topColResponsiveProps}>
      <Card loading={loading}>
        <Meta
          avatar={<Avatar src="http://168.yundaizhang.com/Manage/images/05.jpg" />}
          title="系统更新"
          description="36个"
        />
      </Card>
    </Col>
  </Row>
));

export default TaskRow;
