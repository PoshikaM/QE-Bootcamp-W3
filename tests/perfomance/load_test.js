import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 10,             // number of virtual users
  duration: '10s',     // test duration
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