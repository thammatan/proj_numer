import React,{useState} from 'react'
import {
    Layout,
    Typography,
    InputNumber,
    Card,
    Button,
    Modal
  } from "antd";
  import { Row, Col } from "antd";
  import { Select } from 'antd';
import cal from '../cal/index'
import api from '../../../api'
const { Option } = Select;
const { Title } = Typography;
const { Header, Content } = Layout;
const children = [];
for (let i = 2; i <= 20; i++) {
  children.push(<Option key={i}>{i}x{i}</Option>);
}
const Cramer = (props) => {
    const [matrixX, setmatrixX] = useState([0,0])
    const [visible, setvisible] = useState(false)
    const [size, setsize] = useState(2)
    var temp,matrixA,matrixB
    const showModal =()=> setvisible(true)

    const okModal = () => {
        setmatrixX(cal.cramer(matrixA,matrixB))
        setvisible(false)
    }

    const cancelModal = () => setvisible(false)
    const createHead = () => {
        return temp.map((x,j )=> <th><center>X{j+1}</center></th>);
   }
   const createRow=()=>{
      
    return temp.map((x,i) => (
      <tr>
        <th>{i+1}</th>
        {createCol(i)}
      </tr>
    ));
}
const createCol = (i) => {
    return temp[0].map((x,j) => (
      <td>
        <InputNumber
          defaultValue={0}
          size="small"
          onChange={value => {
            if(j===size){
                matrixB[i]=value
            }else{
                matrixA[i][j]=value
            }
          }}
        />
      </td>
    ));
}
    const createMatrixInput = (size) =>{
        temp = Array.from(Array(size), _ => Array(size+1).fill(0))
        matrixA=Array.from(Array(size), _ => Array(size).fill(0))
        matrixB=Array(size).fill(0)
        return (
            <div>
              <tr>
                <th></th> 
                {createHead()}
                {(size > 0)? <th><center>B</center></th>: ""}
              </tr>
              {createRow()}
            </div>
          );
    }
    const show = () => {
        api.getCh2().then(res => {
          console.log(`api/${props.title}`);
          console.log(res.data.data[0].a);
          console.log(res.data.data[0].b);
            setmatrixX(cal.cramer(res.data.data[0].a, res.data.data[0].b))
           });
      }
      const answer = () =>{
        return matrixX.map((x,i) => (
            <Title level={3}> X{i+1} : {x}</Title>
            ));
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
                <Card style={{ width: "100%" }}>ANSWERS{answer()}</Card>
                
              </Col>
              <Col span={6} pull={18}>
                <Card style={{ width: 300, height: 300 }}>
                  
                  <Select onChange={value => {setsize(parseInt(value))}} showSearch defaultValue="2x2" style={{ width: 100 }}>
                    {children}
                  </Select>
                 
                    <Button type="primary" onClick={showModal} >
                      OK
                    </Button>
                    <Modal
                     width={((size + 1) * 6) + 2 + "%"}
                     visible={visible}
                     onOk={okModal}
                     onCancel={cancelModal}
                    >
                      <Row type="flex" justify="center">
                        {/* {visible?createMatrixInput(size):createMatrixInput(0)} */}
                        {createMatrixInput(size)}
                      </Row>
                    </Modal>
                </Card>
                <br />
                <Button type="primary" onClick={show}>
                  SHOW
                </Button>
                <div>
                  <br />
                </div>
               
              </Col>
            </Row>
          </div>
        </Content>
      </Layout>
    )
}

export default Cramer
