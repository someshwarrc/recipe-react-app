function genID() {
  return (Math.random() * 1000 + Date.now).toString(16);
}

export default genID;
