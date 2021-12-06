function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}

module.exports = {
	pickRandom
}

