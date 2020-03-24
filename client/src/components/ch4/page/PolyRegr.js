import React, { useState } from "react";
import { Layout, Typography, InputNumber, Card, Button } from "antd";
import { Row, Col, Checkbox } from "antd";

import api from "../../../api"
import cals from "../cal/index"


const { Title } = Typography;
const { Header, Content } = Layout;
const PolyRegr = (props) => {
  var [n, setn] = useState(0)
  const [N, setN] = useState(1)
  var [ans, setans] = useState(0)
  var [x, setx] = useState(0)
  var [m, setm] = useState(1)
  var X = [], Y = [] 
  var [ch,setCh] = useState({X:[],Y:[]})
  const [clear, setclear] = useState(true)
  const createInput = (size) =>{
    var temp = Array(size).fill(0)
    X = ch.X
    Y = ch.Y
    return temp.map((x,i) => (
      <Row>
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        <InputNumber size="small" step={0.5} defaultValue={0} onChange={value => X[i] = value
        } />
      </Col>
      <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
        <InputNumber size="small" step={0.5} defaultValue={0} onChange={value => Y[i] = value
        } />
      </Col>
  </Row>
    ));
  }


  const create = () => {
    setCh({X:Array(n).fill(0),Y:Array(n).fill(0)})
    console.table(ch.X);
    console.table(ch.Y);
    setn(N)
    setclear(false)
  }
  const reset = () =>{
    setn(0)
    setx(0)
    setm(1)
    setclear(true)
  }
  const ok = () =>{
    setx(x)
    setm(m)
    setans(cals.linearRegr(x,m,X,Y))
  }
  const show = () => {
    api.getCh4().then(res => {
      console.log(`api/${props.title}`);
      setx(65)
      setans(cals.linearRegr(65,2,res.data.data[0].x, res.data.data[0].fx))
    });
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
            <Col span={12}  >
              <Card style={{ width: "100%" }}>
                OUTPUT
                <br />
                <Title level={3}> F({x}) : {ans} </Title>
              </Card>
            </Col>
            <Col span={12} push={1}>
              <Card style={{ width: 400 }}>
                <Row>
                  <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    <InputNumber min={1} max={20} step={1} defaultValue={1} onChange={value => setN(value)} />
                  </Col>
                  <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                  <Button type="primary" onClick={create} disabled={!clear}>
                      CREATE
                  </Button>
                  </Col>
                  <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                  <Button type="primary" onClick={reset}>
                      RESET
                  </Button>
                  </Col>
                </Row>
                <Row>
                  <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    X
                    </Col>
                  <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    F(x)
                  </Col>
                 
                </Row>
                {createInput(n)}
                <Row>
                  <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    X  <InputNumber step={0.5} defaultValue={0} onChange={value => x = value} />
                  </Col>
                  <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                  Order m  <InputNumber step={1} defaultValue={1} min={1}  onChange={value => m = value} />
                  </Col>
                  <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}></Col>
                </Row>

              </Card>
              <br />
              <Button type="primary" onClick={ok}>
                OK
              </Button>
              <Button type="primary" onClick={show}>
                SHOW
              </Button>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  )
}
export default PolyRegr