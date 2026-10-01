# Prompt log mẫu

## V1

"Tạo website survey có dashboard bằng JavaScript."

## Review V1

Thiếu persona/user, câu hỏi survey, schema, KPI/công thức, storage key, validation, constraints, file structure và acceptance criteria. AI có thể tự chọn framework hoặc bịa logic KPI.

## V2

Dùng prompt trong `../.github/prompts/product-requirements.prompt.md`, review specification rồi dùng build-survey.prompt.md và build-dashboard.prompt.md theo từng phần. Không yêu cầu AI sinh toàn bộ website trong một lượt.

## Debug prompt

Khi KPI sai, cung cấp 5 raw records + expected calculation + function hiện tại và yêu cầu AI tìm root cause trước khi sửa.
