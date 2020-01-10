import Queue from 'bull';

import { KINGSTINCT_BULL_REDIS_URL } from '../config';
import wait from '../../wait';

const defaultJobCount: Queue.JobCounts = {
  completed: 1,
  failed: 0,
  waiting: 0,
  active: 0,
  delayed: 0,
};

const waitForQueue = (
  queueName,
  expectedJobCounts = defaultJobCount,
  redisUrl = KINGSTINCT_BULL_REDIS_URL,
): Promise<void> => {
  const queue = new Queue(queueName, redisUrl);
  const mergedExpectedJobCounts = ({ ...defaultJobCount, ...expectedJobCounts });

  async function waitForJobsToFinish(): Promise<void> {
    const jobCounts = await queue.getJobCounts();

    return jobCounts.completed === mergedExpectedJobCounts.completed
      && jobCounts.failed === mergedExpectedJobCounts.failed
      && jobCounts.waiting === mergedExpectedJobCounts.waiting
      && jobCounts.active === mergedExpectedJobCounts.active
      && jobCounts.delayed === mergedExpectedJobCounts.delayed
      ? queue.close()
      : wait(10).then(() => waitForJobsToFinish());
  }

  return waitForJobsToFinish();
};

export default waitForQueue;
