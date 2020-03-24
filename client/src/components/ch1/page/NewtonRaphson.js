import React, { useState } from "react";
import Showtable from "../../Showtable";
import ShowFunction from "../../ShowFunction";
import { Layout, Typography, Input, InputNumber, Card, Button,message,Tooltip,Icon  } from "antd";
import { Row, Col } from "antd";

import api from "../../../api"
import cal from "../cal/index"
import { set } from "d3";


const { Title } = Typography;
const { Header, Content } = Layout;


const NewtonRaphson = (props) => {
  const [data, setdata] = useState({
    fn:"x",
    answer:{x:0,y:0},
    iteration :[
      { i: 0, x: "0", y: "0", e: "0" }
    ]
  })
  var [fn, setfn] = useState("x")
  var [tx, settx] = useState(0)
  const ok = () => {
    if ((fn !== null) && props.reg.test(fn) && !(/[ex][ex]+/i).test(fn)) {
      setfn(fn)
      settx(tx)
     setdata(cal.newtonRaphson(fn, tx));
    }else{
      message.error('This is an error message please use only x [+ - * / ^ ]');
    }
    console.log(fn);
  };
  const show = () => {
        api.getCh1().then(res => {
            console.log("api/newtonRaphson");
               setdata(cal.newtonRaphson(res.data.data[3].fn, res.data.data[3].x))
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
                <ShowFunction  data={data} />
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
                    fn=event.target.value;
                  }}
                  suffix={
                    <Tooltip title="Example x^2">
                      <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
                    </Tooltip>
                  }
                />
                <br />
                <br />
                <div>
                   X:
                <InputNumber
                  step={0.1}
                  defaultValue={0}
                  onChange={value => tx =value}
                />      
               
                </div>
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
export default NewtonRaphson;
