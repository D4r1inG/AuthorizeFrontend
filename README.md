# MyDemoAuthen

## Description

Dự án mô tả cách phân quyền người dùng được thực hiện ở Frontend

## Installation

Setup dev environment

```
npm install
npm run dev
```

## Usage

Dự án sử dụng React 18 và react-router-dom để thực hiện phân quyền
Step:
B1: Người dùng bắt đầu login từ đó lấy ra được các thông tin của họ và lưu vào Context API hoặc redux tùy ứng dụng
<br/>
B2: Khi vào các component có yêu cầu phân quyền sẽ có 1 HOC [WithAuthorize](./src/routes/withAuthor.tsx) có các component name tương ứng
<br/>
B3: Trong WithAuhorize sẽ lấy ra được các Component, allowPosition, ... từ component name (ListPage được lưu ở [ListPage](./src/utils/listPage.ts)), từ đó kết hợp với userInfo để thực hiện phân quyền
<br/>
B4: Có 3 trường hợp xảy ra ở WithAuthorize

- Người dùng có quyền vào component => truyền thêm props isAllowed để xác định các permission cụ thể của họ ở trong component (View, Edit, Create, Delete, ...) từ đó render ra các thành phần tương ứng VD:

```javascript
{
  isAllowed("edit") && (
    <a onClick={() => edit(record)}>
      <EditOutlined />
    </a>
  );
}
```

- Người dùng không có quyền vào component => Trả về [Unauthorize](./src/modules/unauthorized/index.tsx) page
- Người dùng chưa Authenticate => Redirect về page login

```javascript
<Navigate to="/login" state={{ path: location.pathname }} replace />
```
