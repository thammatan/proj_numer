import React, { useState } from "react";
import { Layout, Menu, Typography, Icon} from "antd";

import Home from "./components/Home";
import ch1 from "./components/ch1/index"
import ch2 from "./components/ch2/index"
import ch3 from "./components/ch3/index"
import ch4 from "./components/ch4/index"
import ch5 from "./components/ch5/index"
import ch6 from "./components/ch6/index"

const { Title } = Typography;
const { Header, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const reg = /^([\+\-\*\/\^]?([0-9]*[xe]?[\+\-\*\/\^][0-9]*[xe]?|[0-9]*[xe]?))+$/i;
const App = () => {
  const [Collapsed, setCollapsed] = useState(false);
  const onCollapse = () => setCollapsed(!Collapsed);

  const [pageState, setPageState] = useState(  <Home /> );

  const page = [
    <Home />,

    <ch1.Bisection reg={reg} title="Bisection Method" />,
    <ch1.Falseposition reg={reg} title="False-Position Method" />,
    <ch1.Onepoint reg={reg} title="One-Point Iteration Method" />,
    <ch1.NewtonRaphson reg={reg} title="Newton-Raphson Method" />,
    <ch1.Secant reg={reg} title="Secant Method" />,

    <ch2.Cramer  title="Cramer's Rule" />,
    <ch2.GaussEliminate  title="Gauss Eliminate" />,
    <ch2.GaussJordan  title="Gauss Jordan" />,
    <ch2.LU  title="LU Decomposition" />,
    <ch2.Jacobi  title="Jacobi Iteration" />,
    <ch2.GaussSeidel  title="Gauss Seidel" />,
    <ch2.ConjugateGradient  title="Conjugate Gradient" />,

    <ch3.NewtonDivided  title="Newton's Divided" />,
    <ch3.Lagrange  title="Lagrange" />,
    <ch3.Spline  title="Spline" />,

    <ch4.LinearRegr  title="Linear Regression"/>,
    <ch4.PolyRegr  title="Polynomial Regression"/>,
    <ch4.MultiRegr  title="Multiple Regression"/>,

    <ch5.Trapezoidal reg={reg} title="Trapezoidal"/>,
    <ch5.CompTrape reg={reg} title="Composite Trapezoidal"/>,
    <ch5.Simpson reg={reg} title="Simpson's rule"/>,
    <ch5.CompSimpson reg={reg} title="Composite Simpson's rule"/>,

    <ch6.Forward reg={reg} title="Forward"/>,
    <ch6.Backward reg={reg} title="Backward"/>,
    <ch6.Central reg={reg} title="Central"/>,
    <ch6.AccForward reg={reg} title="AccForward"/>,
    <ch6.AccBackward reg={reg} title="AccBackward"/>,
    <ch6.AccCentral reg={reg} title="AccCentral"/>
  ]
  const menuClick = e => {
    setPageState(page[e.key])
  };

  return (
    <div >

      <Header>
        <Title type="warning">Numerical Medthod</Title>
      </Header>

      <Layout style={{ minHeight: "100vh", backgroundColor: "#00293c" }}>
      
          <Sider
            width={220}
            collapsible
            collapsed={Collapsed}
            onCollapse={onCollapse}
          >
            <Menu theme="dark" onClick={menuClick} defaultSelectedKeys={["0"]} mode="inline">
              <Menu.Item key="0" >
                <Icon type="home" />
                <span>HOME</span>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="check" />
                    <span>Root of Equations</span>
                  </span>
                }
              >
                <Menu.Item key="1" >Bisection Method</Menu.Item>
                <Menu.Item key="2" >False-Position Method</Menu.Item>
                <Menu.Item key="3" >One-Point Iteration Method</Menu.Item>
                <Menu.Item key="4">Newton-Raphson Method</Menu.Item>
                <Menu.Item key="5" >Secant Method</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="table" />
                    <span>Linear Algebra</span>
                  </span>
                }
              >
                <Menu.Item key="6" >Cramer's Rule</Menu.Item>
                <Menu.Item key="7">Gauss Eliminate</Menu.Item>
                <Menu.Item key="8" >Gauss Jordan</Menu.Item>
                <Menu.Item key="9" >LU Decomposition</Menu.Item>
                <Menu.Item key="10" >Jacobi Iteration</Menu.Item>
                <Menu.Item key="11" >Gauss Seidel</Menu.Item>
                <Menu.Item key="12" >Conjugate Gradient</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="stock" />
                    <span>Interpolation</span>
                  </span>
                }
              >
                <Menu.Item key="13" >Newton's Divided</Menu.Item>
                <Menu.Item key="14" >Lagrange</Menu.Item>
                <Menu.Item key="15" >Spline</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                  <span>
                    <Icon type="column-height" />
                    <span>Least Square Error</span>
                  </span>
                }
              >
                 <Menu.Item key="16" >Linear Regression</Menu.Item>
                 <Menu.Item key="17" >Polynomial Regression</Menu.Item>
                 <Menu.Item key="18" >Multiple Regression</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub5"
                title={
                  <span>
                    <Icon type="area-chart" />
                    <span>Integration</span>
                  </span>
                }
              >
                 <Menu.Item key="19" >Trapezoidal</Menu.Item>
                 <Menu.Item key="20" >Composite Trapezoidal</Menu.Item>
                 <Menu.Item key="21" >Simpson's rule</Menu.Item>
                 <Menu.Item key="22" >Composite Simpson's rule</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub6"
                title={
                  <span>
                    <Icon type="line-chart" />
                    <span>Differential Equation</span>
                  </span>
                }
              >
                <Menu.Item key="23" >Forward</Menu.Item>
                <Menu.Item key="24" >Backward</Menu.Item>
                <Menu.Item key="25" >Central</Menu.Item>
                <Menu.Item key="26" >AccForward</Menu.Item>
                <Menu.Item key="27" >AccBackward</Menu.Item>
                <Menu.Item key="28" >AccCentral</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
                <Layout >
          {pageState}
          <Footer style={{ textAlign: "center" }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default App;