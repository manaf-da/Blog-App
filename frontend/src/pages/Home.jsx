import CardBlog from "../component/CardBlog";

const Home = () => {
  return (
    <div className="flex justify-between items-center gap-10 p-10 flex-wrap">
      <CardBlog />
      <CardBlog />
      <CardBlog />
      <CardBlog />
      <CardBlog />
    </div>
  );
};

export default Home;
