FROM golang:1.21-alpine AS builder

WORKDIR /app

# In local dev we expect to run without go.sum initially if not generated,
# so we avoid failing on COPY go.sum. This allows initial download.
COPY go.mod ./
RUN go mod download

COPY . .

# Build the Go app
RUN go mod tidy
RUN CGO_ENABLED=0 GOOS=linux go build -o main .

# Run stage
FROM alpine:latest
WORKDIR /app
COPY --from=builder /app/main .

EXPOSE 8080
CMD ["./main"]
