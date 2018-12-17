import app from './app';

app.listen(process.env.PORT || 3000, () => {
  console.log('Start server at port :', process.env.PORT || 3000);
});
