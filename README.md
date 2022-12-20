# MyDemoAuthen

## Description

Dự án mô tả cách phân quyền người dùng được thực hiện ở Frontend
<br />
Các tài liệu liên quan sẽ được lưu ở [Document](https://gdrives.ghtk.co/s/cbbjSBYdjwXWQE9) trên Gdrive

## Installation

Setup dev environment

```
npm install
npm run dev
```

## Usage

### Note

Dự án sử dụng React 18, react-router-dom và 1 số thư hiện hỗ trợ UI để thực hiện phân quyền
<br/>
Mockup data user:

```JSON
    {
      "id": 7,
      "username": "manager",
      "fullname": "Nguyen Van A",
      "email": "manager@example.com",
      "phone": "096123123",
      "position": "manager",
      "warehouse": "GHTK building",
    }
```

### Step

B1: Người dùng bắt đầu login từ đó lấy ra được các thông tin của họ và lưu vào Context API hoặc redux tùy ứng dụng
<br/>
B2: Khi vào các route có yêu cầu phân quyền sẽ dẫn đến 1 Component [WithAuthorize](./src/routes/withAuthor.tsx) với các component name tương ứng, các routes sẽ được quản lý ở [routes](./src/routes/routes.tsx)
<br/>
B3: Trong WithAuhorize sẽ lấy ra được các Component, allowPosition, ... từ component name ([ListPage](./src/utils/listPage.ts)), từ đó kết hợp với userInfo để thực hiện phân quyền
<br/>
B4: Có 3 trường hợp xảy ra ở WithAuthorize

- Người dùng có quyền vào component => truyền thêm props isAllowed để xác định các permission cụ thể của họ ở trong component (View, Edit, Create, Delete, ...) từ đó render ra các thành phần tương ứng
  <br />
  VD:

```javascript
{
  isAllowed("edit") && <a onClick={() => edit(record)}>Edit</a>;
}
```

- Người dùng không có quyền vào component => Trả về [Unauthorize](./src/modules/unauthorized/index.tsx) page
- Người dùng chưa Authenticate => Redirect về page login:

```javascript
<Navigate to="/login" state={{ path: location.pathname }} replace />
```

## Author

quannt86
