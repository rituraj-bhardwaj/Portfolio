import { Container } from "../components";
import { useNavigate } from "react-router";
import pic from "/src/assets/pic_me.jpg";

const Button = ({ children, route, className }) => {
  const navigate = useNavigate();
  return (
    <button
      type="button"
      className={`px-[22px] py-10 font-bold rounded-full cursor-pointer tracking-wide border-[1px] hover:bg-transparent lg:text-xl lg:py-14 lg:px-8 ${className}`}
      onClick={() => navigate(`${route}`)}
    >
      {children}
    </button>
  );
};

const Home = () => {
  return (
    <Container className={'md:flex justify-center items-center gap-8 md:p-24'}>
      <div className="w-full hidden md:flex max-w-[500px]">
        <img src={pic} alt="my profile picture"  className="object-cover rounded-full"/>
      </div>

      <div className="md:w-[475px]">
        <h1 className="text-4xl font-bold text-left mt-2 mb-2 md:text-8xl md:mb-6">Hello</h1>
        <p className="text-lg font-semibold">A Bit About Me,</p>
        <p className="text-md ">
          Hi, I'm a full stack web-developer. I have done React.js, Node.js,
          Express.js, PostgreSQL, REST API. I have completed saveral projects
          for honning my skills. Now I am learning Gen-AI with Python.
        </p>

        <div className="w-full flex justify-between items-center py-4">
          <Button
            route={"/"}
            className={"bg-[#EEA302]"}
          >Resume</Button>
          <Button
            route={"/projects"}
            className={"bg-[#FF3B25]"}
          >Projects</Button>
          <Button
            route={"/"}
            className={"bg-[#80D8DA]"}
          >Contact</Button>
        </div>
      </div>

      <div className="w-full md:hidden">
        <img src={pic} alt="my profile picture"  className="object-cover rounded-full"/>
      </div>
    </Container>
  );
};

export default Home;
