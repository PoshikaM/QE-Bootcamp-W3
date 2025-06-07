# Performance Analysis Report
**Date**: June 7, 2025

## Test Configuration
- **Total Duration**: 50 seconds
- **Stages**:
  - Ramp-up: 10s (0 to 10 VUs)
  - Steady: 30s (10 VUs)
  - Ramp-down: 10s (10 to 0 VUs)
- **Graceful Ramp-down**: 30s
- **Target API**: https://test.k6.io
- **Endpoint**: GET /

## Key Performance Metrics

### Response Time Analysis
- **Average**: 431.62ms
- **Median**: 388.02ms
- **90th Percentile (P90)**: 593.8ms
- **95th Percentile (P95)**: 624.63ms
- **Min**: 101.16ms
- **Max**: 3.51s

### Detailed Percentile Insights
#### 90th Percentile (P90) - 593.8ms
- 90% of requests completed within 593.8ms.
- Indicates mostly acceptable performance, though near the 500ms threshold.

#### 95th Percentile (P95) - 624.63ms
- 95% of requests completed within 624.63ms.
- Indicates some slow responses; need to monitor under higher load or optimize backend.

### Test Volume
- **Total Requests**: 426
- **Iterations Completed**: 213
- **Request Rate**: ~8.18 requests/second
- **Data Received**: 752 kB
- **Data Sent**: 29 kB

### Check Metrics
- **Total Checks**: 639
- **Success Rate**: 79.18% (506 passed)
- **Failed Checks**: 20.81% (133 failed)
  - ✅ `status is 200`
  - ✅ `body is not empty`
  - ❌ `response time < 500ms` → only 37% passed

### Success Metrics
- **HTTP Request Success Rate**: 100%
- **Check Success Rate**: 79.18%
- **Failed HTTP Requests**: 0 (excellent)

## Performance Thresholds Status
- ⚠️ `response time < 500ms` – Only 37% passed; needs attention
- ✅ All HTTP responses returned status 200
- ✅ No failed HTTP requests

## Recommendations
1. Optimize response time to bring more requests under 500ms
2. Investigate the cause of slower requests (max was 3.51s)
3. Consider performance tuning (e.g., server optimization or caching)
4. Test with different load levels to identify thresholds and bottlenecks

## Conclusions
- The application handled the load without any request failures
- Most responses were timely, but a significant percentage exceeded 500ms
- Monitoring and optimization are recommended to improve performance