import React, { useState } from 'react'
import { Layout, Typography, Input, InputNumber, message,Card, Button, Tooltip, Icon } from "antd";
import { Row, Col } from "antd";
import ShowArea from "../../ShowArea";
import api from "../../../api"
import cals from "../cal/index"



const { Title } = Typography;
const { Header, Content } = Layout;

const Trapezoidal = (props) => {
  var [data, setdata] = useState({
    fn: [{
      fn: "x",
      range: [0, 0],
      closed: true
    }], a: 0, b: 0, realAns: 0, calAns: 0
  })

  var [fn, setfn] = useState("x")
  const [a, seta] = useState(0)
  const [b, setb] = useState(0)

  const show = () => {
    api.getCh5().then(res => {
      console.log(`api/${props.title}`);
      setdata(cals.trapezoidal(res.data.data[0].fx, res.data.data[0].a, res.data.data[0].b, 1))
    });
  }
  const ok = () => {
    if ((fn !== null) && props.reg.test(fn) && !(/[ex][ex]+/i).test(fn) && !(a===b)) {
     setdata(cals.trapezoidal(fn, a, b, 1))
    }else {
      message.error('This is an error message please use only x [+ - * / ^ ]');
    }
  }
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
                OUTPUT
                <ShowArea data={data} />
              </Card>
            </Col>
            <Col span={6} pull={18}>
              <Card style={{ width: 300, height: 300 }}>
                Function
                <Input
                  placeholder="Input Function"
                  maxLength={255}
                  suffix={
                    <Tooltip title="Example x^2">
                      <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                  }
                  onChange={value => setfn(value.target.value)}
                />
                <br />
                <br />
                <Row gutter={[8, 8]}>
                  <Col span={12}>
                    a:
                <InputNumber
                      step={0.1}
                      defaultValue={0}
                      onChange={value => seta(value)}
                    />
                  </Col>
                  <Col span={12}>
                    b:
                <InputNumber
                      step={0.1}
                      defaultValue={0}
                      onChange={value => setb(value)}
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
              <Card style={{ width: 300, height: 300 }}>
                <p><Title level={3}>ans : {data.calAns.toFixed(6)} </Title></p>
                <p><Title level={3}>error : {(data.realAns) ? Math.abs(((data.realAns - data.calAns) / data.realAns)).toFixed(6) : 0} </Title></p>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  )
}

export default Trapezoidal
