# B: STAGE 1: BUILDER |>
FROM debian:bookworm-slim AS builder
# TAG: UV Installaiton.
RUN apt-get update && apt-get install -y --no-install-recommends curl && apt-get clean && rm -rf /var/lib/apt/lists/*
RUN curl -LsSf https://astral.sh/uv/0.4.20/install.sh | sh
ENV PATH="/root/.cargo/bin:$PATH"
# # TAG: UV Install Python 3.12.
# RUN uv install --python 3.12
# COPY ./requirements.txt .
# RUN uv run --python 3.12 pip install --prefix=/install -r requirements.txt
#
#
# # Y: Stage 2: Runtime (uv runner) |>
# FROM debian:bookworm-slim 
# WORKDIR /app
# copy --from=builder /root/.cargo /root/cargo
# copy --from=builder /root/uv /root/uv
# copy --from=builder /install/lib/python3.12/site-packages /install/lib/python3.12/site-packages
# copy --from=builder ./app.py .
#
# # G: ENV |> 
# ENV PATH="/root/.cargo/bin:$PATH" \
#   eSECRET_API_KEY=75C57EA3C2B5C5EA \
#   url=https://vihaanaitech.com/main/Apis/app_key_verify.php \
#   eVERIFICATION_KEY=8A9AB63614582D29
#
# # R: Run with uv |>
# CMD ["uv", "run", "--python", "3.12", "python", "/app/app.py"]
#
#
# # IMP: WHAT WE DID.
# # builder: 1.installed python, 2.copy requirements , 3 installed dependencies with pip. => caching
# # Runtime: 1.installed UV ⭐ 2.workdir 3.get dependeicies --from=builder 4. copyed ./app.py.
# # CMD: ran code with UV.
# # --------------- BECAUSE |>
# # => 1. in RUNTIME UV => ultra slime imgae + Distro/destro-less img. ∴ no shell => more secure. 
# # => 2. Superfast Container setup+Instant start => best for serverless, CI/CD, Microservices.
# # => 3. Its indistury stnadards.
# # ----------------------------------------------------------------
