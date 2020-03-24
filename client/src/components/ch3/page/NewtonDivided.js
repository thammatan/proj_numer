import React, { useState } from "react";
import { Layout, Typography, InputNumber, Card, Button } from "antd";
import { Row, Col, Checkbox } from "antd";

import api from "../../../api"
import cal from "../cal/index"

const { Title } = Typography;
const { Header, Content } = Layout;
const NewtonDevided = (props) => {
  var [n, setn] = useState(0)
  const [N, setN] = useState(1)
  var [ans, setans] = useState(0)
  var [x, setx] = useState(0)
  var X = [], Y = [],P=[]
  var [ch,setCh] = useState({X:[],Y:[],P:[]})
  const [clear, setclear] = useState(true)
  const createInput = (size) =>{
    var temp = Array(size).fill(0)
    X = ch.X
    Y = ch.Y
    P = ch.P
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
      <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} >
        <Checkbox  onChange={e => P[i] = e.target.checked} />
      </Col>
  </Row>
    ));
  }
  const create = () => {
    setCh({X:Array(n).fill(0),Y:Array(n).fill(0),P:Array(n).fill(false)})
    setn(N)
    setclear(false)
  }
  
  const reset = () =>{
    setn(0)
    setclear(true)
  }
  const ok = () =>{
    var  tempX = [] , tempY = [] ,tempP=[]
    setx(x)
    P.map((x,i)=>{
    if(x){
      tempP.push(i+1)
    }})
    console.log('P');
    console.table(tempP)
    setans(cal.newtonDevided(x,X,Y,...tempP))
  }
  const show = () => {
    api.getCh3().then(res => {
      console.log(`api/${props.title}`);
      setx(res.data.data[0].x)
      setans(cal.newtonDevided(res.data.data[0].x, res.data.data[0].X, res.data.data[0].Y,...res.data.data[0].P))
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
                  <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}> Point</Col>
                </Row>
                {createInput(n)}
                <Row>
                  <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }}>
                    X  <InputNumber step={0.5} defaultValue={0} onChange={value => x = value} />
                  </Col>
                  <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>

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
export default NewtonDevided