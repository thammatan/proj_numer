import React, { useState } from 'react'
import { Layout, Typography, Input, InputNumber, Card,message, Button, Tooltip, Icon } from "antd";
import { Row, Col } from "antd";
import ShowDiff from "../../ShowDiff";
import api from "../../../api"
import cals from "../cal/index"



const { Title } = Typography;
const { Header, Content } = Layout;
const AccCentral = (props) => {
    var [data, setdata] = useState({
        fn:"x",fn2:'0', x:0, realAns: 0, calAns: 0
    })
    var [fn, setfn] = useState("x")
    const [x, setx] = useState(0)
    const [h, seth] = useState(0.1)
    const [order, setorder] = useState(1)
    const show = () => {
        api.getCh6().then(res => {
            console.log(`api/${props.title}`);
            setdata(cals.acccentral(res.data.data[1].fx, res.data.data[1].x, res.data.data[1].h,1))
          });
    }
    const ok = () => {
        if ((fn !== null) && props.reg.test(fn) && !(/[ex][ex]+/i).test(fn)) {
        if(h!==0){
            setdata(cals.acccentral(fn,x,h,order))
        }
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
                                <ShowDiff data={data} />
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
                                        x:
                                        <InputNumber
                                            step={0.1}
                                            defaultValue={0}
                                            onChange={value => setx(value)}
                                        />
                                    </Col>
                                    <Col span={12}> h:
                                        <InputNumber
                                            step={0.1}
                                            defaultValue={0.1}
                                            min ={0.1}
                                            onChange={value => seth(value)}
                                        /></Col>
                                </Row>
                                <Row gutter={[16, 8]}>
                                    <Col span={2}>
                                    order:
                                        <InputNumber
                                            step={1}
                                            defaultValue={1}
                                            min ={1}
                                            max ={4}
                                            onChange={value => setorder(value)}
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
                            <p><Title level={3}>real : {data.realAns.toFixed(6)} </Title></p>
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

export default AccCentral
