import React, { useState } from "react";
import { Button, Space, Table, Tag, Form, Popconfirm, Typography } from "antd";
import { IPage } from "../../utils/interfacePage";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { EditableCell } from "./editableCell";

export interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const UserContent: React.FC<IPage> = ({ isAllowed, permission }) => {
  const [editingKey, setEditingKey] = useState("");
  const [form] = Form.useForm();
  const [tableData, setTableData] = useState<DataType[]>([
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["cool"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ]);

  const addNew = () => {
    setTableData((prev) => {
      prev.push({
        key: Math.random().toString(),
        name: "New member",
        age: 20,
        address: "Sidney No. 1 Lake Park",
        tags: ["New"],
      });
      return [...prev];
    });
  };

  const deleteItem = (key) => {
    const deleteIndex = tableData.findIndex((item) => item.key === key);
    setTableData((prev) => {
      prev.splice(deleteIndex, 1);
      return [...prev];
    });
  };

  const isEditing = (record: DataType) => record.key === editingKey;

  const edit = (record: Partial<DataType> & { key: React.Key }) => {
    form.setFieldsValue({ name: "", age: "", address: "", ...record });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key: React.Key) => {
    try {
      const row = (await form.validateFields()) as DataType;

      const newData = [...tableData];
      const index = newData.findIndex((item) => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        setTableData(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setTableData(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "STT",
      width: "3%",
      render: (text, record, index) => <span>{index + 1}</span>,
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      editable: true,
      width: "15%",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      width: "15%",
      editable: true,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      editable: true,
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      width: "15%",

      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      width: "8%",
      render: (_, record) => {
        const editable = isEditing(record);

        return !editable ? (
          <Space size="middle">
            {isAllowed("edit") && (
              <a onClick={() => edit(record)}>
                <EditOutlined />
              </a>
            )}
            {isAllowed("delete") && (
              <Popconfirm
                title="Sure to delete?"
                onConfirm={() => deleteItem(record.key)}
              >
                <a className="text-red-500">
                  <DeleteOutlined />
                </a>
              </Popconfirm>
            )}
          </Space>
        ) : (
          <>
            <Typography.Link
              onClick={() => save(record.key)}
              style={{ marginRight: 8 }}
            >
              Save
            </Typography.Link>
            <Popconfirm title="Sure to cancel?" onConfirm={cancel}>
              <a>Cancel</a>
            </Popconfirm>
          </>
        );
      },
    },
  ];

  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record: DataType) => ({
        record,
        inputType: col.dataIndex === "age" ? "number" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <div>
      {isAllowed(["create", "delete"]) && (
        <p>
          <Tag>Manager</Tag>can <strong>view, edit, create, delete</strong>
        </p>
      )}
      {isAllowed("edit") && (
        <p>
          <Tag>Admin</Tag>can <strong>view, edit</strong>
        </p>
      )}
      <p>
        <Tag>User</Tag>can <strong>view</strong>
      </p>
      <p>
        <Tag>Cod</Tag>can't <strong>view</strong>
      </p>
      <div className="flex justify-end items-center mb-3">
        {isAllowed("create") && (
          <Button type="primary" onClick={addNew}>
            Add new
          </Button>
        )}
      </div>
      <Form form={form} component={false}>
        <Table
          components={{
            body: {
              cell: EditableCell,
            },
          }}
          columns={mergedColumns}
          rowClassName="editable-row"
          dataSource={tableData}
        />
      </Form>
    </div>
  );
};

export default UserContent;
