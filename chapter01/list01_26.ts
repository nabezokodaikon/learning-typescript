{
  const concatenate = (
    items: string[], separator = ',', beginAt = 0, endAt = items.length) => {
      let result = '';

      for (let i = beginAt; i < endAt; i++) {
        result += items[i];
        if (i < (endAt - 1)) {
          result += separator;
        }
      }

      return result;
    }

    const items = ['A', 'B', 'C']
    console.log(concatenate(items));
    console.log(concatenate(items, '-', 1));
}
