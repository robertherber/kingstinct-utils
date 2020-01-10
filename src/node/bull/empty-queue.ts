import Queue from 'bull';

const emptyQueue = async (queueName, redisUrl): void => {
  const queue = new Queue(queueName, redisUrl);

  await queue.empty();
  await queue.clean(1, 'delayed');
  await queue.clean(1, 'failed');
  await queue.clean(1, 'wait');
  await queue.clean(1, 'active');
  await queue.clean(1, 'completed');

  return queue.close();
};

export default emptyQueue;
