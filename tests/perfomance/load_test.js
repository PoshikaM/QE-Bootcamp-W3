import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '10s', target: 10 }, // ramp-up from 0 to 10 VUs
    { duration: '30s', target: 10 }, // hold at 10 VUs
    { duration: '10s', target: 0 },  // ramp-down to 0 VUs
  ],
};

export default function () {
  const res = http.get('https://test.k6.io');

  check(res, {
    'status is 200': (r) => r.status === 200,
    'body is not empty': (r) => r.body.length > 0,
    'response time < 500ms': (r) => r.timings.duration < 500,
  });

  sleep(1);
}