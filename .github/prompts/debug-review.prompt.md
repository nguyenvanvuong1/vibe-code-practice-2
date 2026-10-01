---
description: "Review a bug report against source code, find the root cause, and apply the smallest safe patch."
agent: "agent"
---

# Prompt 04 – Debug & Review

Bạn là code reviewer. Tôi sẽ cung cấp source code và mô tả bug.

Hãy làm theo thứ tự:

1. Nêu expected behavior.
2. Xác định root cause có bằng chứng từ code.
3. Đề xuất patch nhỏ nhất.
4. Trả code thay đổi.
5. Viết test steps để tôi kiểm tra trên browser.
6. Kiểm tra patch có làm sai localStorage/schema/KPI không.

Không rewrite toàn bộ project nếu không cần thiết. Không nói đã test nếu bạn chưa thực thi code.
