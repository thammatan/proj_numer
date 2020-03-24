import React, { useState } from "react";
import Showtable from "../../Showtable";
import ShowFunction from "../../ShowFunction";
import { Layout, Typography, Input, InputNumber, Card, Button, message, Tooltip, Icon } from "antd";
import { Row, Col } from "antd";

import api from "../../../api"
import cal from "../cal/index"
import { set } from "d3";

const { Title } = Typography;
const { Header, Content } = Layout;
const reg = /^([\+\-\*\/\^]?([0-9]*[xe]?[\+\-\*\/\^][0-9]*[xe]?|[0-9]*[xe]?))+$/i;
const Bisection = (props) => {
  const [data, setdata] = useState({
    fn: "x",
    answer: { x: 0, y: 0 },
    iteration: [
      { i: 0, x: "0", y: "0", e: "0" }
    ]
  })
  var [fn, setfn] = useState("x")
  var [xl, setxl] = useState(0)
  var [xr, setxr] = useState(0)


  const ok = () => {
    if ((fn !== null) && props.reg.test(fn) && !(/[ex][ex]+/i).test(fn)) {
      setfn(fn)
      setxl(xl)
      setxr(xr)
      setdata(cal.bisection(fn, xl, xr));
      console.log("cal");
    } else {
      message.error('This is an error message please use only x [+ - * / ^ ]');
    }
    console.log(fn);
  };
  const show = () => {
    api.getCh1().then(res => {
      console.log("api/bisection");
      setdata(cal.bisection(res.data.data[0].fn, res.data.data[0].xl, res.data.data[0].xr))
    });
  };
  return (
    <Layout style={{ backgroundColor: "#f1f3ce" }}>
      <Header style={{ backgroundColor: "#f1f3ce", padding: 0 }}>
        <Title style={{ color: "#1e656d" }} type="warning">
          {props.title}
        </Title>
      </Header>
      <Content style={{ margin: "0 16px" }}>
        <div style={{ padding: 24, background: "#f1f3ce", minHeight: 600 }}>
          <Row>
            <Col span={18} push={6}>
              <Card
                style={{ width: "100%" }}
              >
                <ShowFunction data={data} />
                <br></br>
                <Showtable data={data} />
              </Card>
            </Col>
            <Col span={6} pull={18}>
              <Card style={{ width: 300, height: 300 }}>
                Function
                <Input
                  placeholder="Input Function"
                  maxLength={255}
                  onChange={event => {
                    fn = event.target.value;
                  }}
                  suffix={
                    <Tooltip title="Example x^2">
                      <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                  }
                />
                <br />
                <br />
                <Row gutter={[8, 8]}>
                  <Col span={12}>
                    Xl:
                <InputNumber
                      step={0.1}
                      defaultValue={0}
                      onChange={value => xl = value}
                    />
                  </Col>
                  <Col span={12}>
                    Xr:
                <InputNumber
                      step={0.1}
                      defaultValue={0}
                      onChange={value => xr = value}
                    />
                  </Col>
                </Row>
              </Card>
              <br />
              <Button type="primary" onClick={ok}>
                OK
              </Button>
              <Button type="primary" onClick={show}>
                SHOW
              </Button>
              <div>
                <br />
              </div>
              <Card title={data.fn} style={{ width: 300, height: 300 }}>
                <Title level={3}> answer : {data.answer.x.toFixed(6)}</Title>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  );
};
export default Bisection;
