import Queue from 'bull';

const waitForQueue = (
  queueName,
  redisUrl,
  expectCompletedCount = 1,
  expectedFailedCount = 0,
): Promise<void> => {
  const queue = new Queue(queueName, redisUrl);

  async function waitForJobsToFinish(): Promise<void> {
    const jobCounts = await queue.getJobCounts();

    return jobCounts.completed === expectCompletedCount
      && jobCounts.failed === expectedFailedCount
      && jobCounts.waiting === 0
      && jobCounts.active === 0
      && jobCounts.delayed === 0
      ? queue.close()
      : Promise.delay(10).then(() => waitForJobsToFinish());
  }

  return waitForJobsToFinish();
};

export default waitForQueue;
