---
description: "localStorage persistence rules for the survey/dashboard data."
applyTo: "**/*.js"
---

# localStorage – kiến thức tối thiểu

localStorage lưu string theo key/value và tồn tại sau refresh trong cùng browser/origin.

Mẫu tư duy:

```js
const data = JSON.parse(localStorage.getItem("surveyResponses") || "[]");
data.push(newResponse);
localStorage.setItem("surveyResponses", JSON.stringify(data));
```

Cần xử lý: chưa có key, JSON lỗi, schema thay đổi, xóa dữ liệu, dữ liệu test trùng.

Không dùng localStorage cho mật khẩu, token hay dữ liệu cá nhân nhạy cảm trong bài này.
