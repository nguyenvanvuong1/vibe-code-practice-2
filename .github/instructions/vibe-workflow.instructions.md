---
description: "Use when planning, prompting, or executing a coding task in this repo. Covers the DEFINE/PLAN/BUILD/RUN/VERIFY/DEBUG/REFACTOR/REFLECT loop and how to structure a prompt."
---

# Workflow Vibe Coding

Không yêu cầu AI "hãy tạo website" rồi chấp nhận toàn bộ kết quả. Thực hiện theo vòng lặp:

1. DEFINE – mô tả user, mục tiêu, chức năng, constraints.
2. PLAN – yêu cầu AI đề xuất file structure, data schema, component/function.
3. BUILD SMALL – tạo HTML trước, sau đó storage, survey logic, dashboard.
4. RUN – mở browser và thao tác thật.
5. VERIFY – kiểm tra localStorage, KPI, edge cases.
6. DEBUG – đưa lỗi + expected/actual behavior cho AI.
7. REFACTOR – yêu cầu giảm duplication, tách hàm, đặt tên rõ.
8. REFLECT – ghi AI làm tốt/sai gì và prompt nào tạo khác biệt.

## Quy tắc prompt

Mỗi prompt quan trọng nên có: ROLE + CONTEXT + GOAL + REQUIREMENTS + CONSTRAINTS + OUTPUT + ACCEPTANCE CRITERIA.
