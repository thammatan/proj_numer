import React, { useState } from "react";
import { Layout, Typography, InputNumber, Card, Button } from "antd";
import { Row, Col, Checkbox } from "antd";

import api from "../../../api"
import cals from "../cal/index"



const { Title } = Typography;
const { Header, Content } = Layout;
const MultiRegr = (props) => {
  var [n, setn] = useState(0)
  const [N, setN] = useState(1)
  var [nx, setnx] = useState(0)
  const [Nx, setNx] = useState(1)
  var [ans, setans] = useState(0)
  var [x, setx] = useState([0])
  var X = [], Y = [] , m , temp=[0] ,tempx = [0]
  const [clear, setclear] = useState(true)

const createHead = () => {
    return temp[0].map((x,j )=> <th>{(j===n)?"x":j+1}</th>);
}
const createRow=()=>{
return temp.map((x,i) => (
  <tr>
    {(i===nx)?<th>F(x)</th>:<th>X{i+1}</th>}
    {createCol(i)}
  </tr>
));
}
const createCol = (i) => {
return temp[0].map((x,j) => (
  <td>
    {(i===nx && j===n)?"":    <InputNumber
      defaultValue={0}
      size="small"
      onChange={value => {
        if(i===nx){
            Y[j]=value
        }else if(j===n){
           tempx[i]=value
        }else{
          X[i][j]=value
        }
      }}
    />}
  </td>
));
}
const createInput = (i,j) =>{
    temp = Array.from(Array(i+1), _ => Array(j+1).fill(0))
    X = Array.from(Array(i), _ => Array(j).fill(0))
    Y = Array(j).fill(0)
    tempx = Array(i).fill(0)
    return (
        <div style={{overflowX:"auto"}}>
          <tr>
            <th></th>
            {(n)?createHead():""}
          </tr>
          {(nx)?createRow():""}
        </div>
      );
}


  const create = () => {
    setn(N)
    setnx(Nx)
    setclear(false)
  }
  const reset = () =>{
    setn(0)
    setnx(0)
    setclear(true)
  }
  const ok = () =>{
    if(n!==0 && nx!==0){
      setx(tempx)
      setans(cals.multiRegr(tempx,Y,...X))
    }else{
      setx([0])
      setans(0)
    }
  }
  const show = () => {
    api.getCh4().then(res => {
      console.log(`api/${props.title}`);
      setx([1,1,1])
      setans(cals.multiRegr([1,1,1],res.data.data[1].fx, res.data.data[1].x1,res.data.data[1].x2,res.data.data[1].x3))
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
            <Col   >
            
            <Card style={{ width: 800}}>
                <Row>
                  <Col span={4}>
                    x<InputNumber min={1} max={20} step={1} defaultValue={1} onChange={value => setNx(value)} />
                  </Col>
                  <Col span={4}>
                    p<InputNumber min={1} max={20} step={1} defaultValue={1} onChange={value => setN(value)} />
                  </Col>
                  <Col span={4}>
                  <Button type="primary" onClick={create} disabled={!clear}>
                      CREATE
                  </Button>
                  </Col>
                  <Col span={4}>
                  <Button type="primary" onClick={reset}>
                      RESET
                  </Button>
                  </Col>
                </Row>
                {createInput(nx,n)}
              </Card>
              <br />
              <Button type="primary" onClick={ok}>
                OK
              </Button>
              <Button type="primary" onClick={show}>
                SHOW
              </Button>
             
            </Col>
            <br/>
            <Col >
            <Card style={{ width: "100%" }}>
                OUTPUT
                <br />
                <Title level={3}> F({x.map((value,i)=>(i===x.length-1)?`${value}`:`${value},`)}) : {ans} </Title>
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
    </Layout>
  )
}
export default MultiRegr