---
description: "Build the KPI Dashboard (no chart library) reading survey responses from localStorage."
agent: "agent"
---

# Prompt 03 – Build Dashboard

Bạn là Data Analyst + Frontend Developer. Đọc `surveyResponses` từ localStorage và xây dashboard không dùng chart library.

Hiển thị: response count, average rating, NPS, satisfaction rate; rating distribution 1-5; channel distribution; 10 response gần nhất.

Yêu cầu: giải thích công thức KPI trước khi code; tách calculation khỏi rendering; tránh chia cho 0; dashboard tự refresh sau submit; biểu đồ dùng HTML/CSS bar; số liệu phải tính từ raw responses, không hard-code.
