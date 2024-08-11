type GroupsMap<T> = {
  [key: string]: T[];
};

export function groupByKey<T>(items: T[], key: keyof T): GroupsMap<T> {
  const result: GroupsMap<T> = {};

  for (const item of items) {
    const grouOfKey = item[key];

    if (!result[grouOfKey as any]) {
      result[grouOfKey as any] = [];
    }

    result[grouOfKey as any].push(item);
  }

  return result;
}
