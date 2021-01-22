const app = require('./server');

const PORT = process.env.PORT || 3008;
app.listen(PORT, () => {
  console.log(`service running on port ${PORT}`);
});
