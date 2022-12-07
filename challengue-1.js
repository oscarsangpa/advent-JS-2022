function wrapping(gifts) {
  const wrapped = gifts.map( gift => {
    const giftWrap = "*".repeat(gift.length + 2);
    return gift.split('\n')
      .concat('\n*', giftWrap)
      .reverse()
      .join('')
      .concat('*\n', giftWrap)
  });
  return wrapped;
}
