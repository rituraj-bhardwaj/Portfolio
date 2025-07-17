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
    <Container className={"md:flex justify-center items-center gap-8 md:p-24"}>
      <div className="w-full max-w-[400px] hidden md:flex">
        <img
          src={pic}
          alt="my profile picture"
          className="object-cover rounded-full"
        />
      </div>

      <div className="md:w-[475px]">
        <h1 className="text-4xl font-bold text-left mt-2 mb-2 md:text-8xl md:mb-6">
          Hello
        </h1>
        <p className="text-lg font-semibold">A Bit About Me,</p>
        <p className="text-md ">
          I’m Rituraj Bhardwaj — a full-stack web developer skilled in React.js,
          Node.js, Express.js, PostgreSQL, and REST APIs. I’ve built several
          projects to sharpen my skills and am currently exploring Gen-AI with
          Python.
        </p>

        <div className="w-full flex justify-between items-center py-4">
          <Button route={"/"} className={"bg-[#EEA302]"}>
            Resume
          </Button>
          <Button route={"/projects"} className={"bg-[#FF3B25]"}>
            Projects
          </Button>
          <Button route={"/"} className={"bg-[#80D8DA]"}>
            Contact
          </Button>
        </div>
      </div>

      <div className="w-full max-w-[400px] mx-auto md:hidden">
        <img
          src={pic}
          alt="my profile picture"
          className="object-cover rounded-full"
        />
      </div>
    </Container>
  );
};

export default Home;
