import React from "react";
import { Table } from "antd";

const { Column } = Table;
const Showtable = props => {
  return (
    <Table
      dataSource={props.data.iteration}
      style={{ backgroundColor: "#fff" }}
      rowKey="iteration"
    >
      <Column title="Iteration" dataIndex="iteration" key="iteration" />
      <Column title="X" dataIndex="x" key="x" />
      <Column title="Y" dataIndex="y" key="y" />
      <Column title="Error" dataIndex="e" key="e" />
    </Table>
  );
};

export default Showtable;
