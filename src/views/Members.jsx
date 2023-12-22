import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Footer from "./Footer";

const DataClasses = [
  {
    sport: "Crossfit",
    image: "/Trainers/homme-faisant-echauffement-dans-piece-sombre.jpg",
    coach: "John pers",
    date: "Tue : 4:00 pm",
  },
  {
    sport: "Gymnastics",
    image: "/Trainers/vue-face-homme-forme-au-gymnase.jpg",
    coach: "Alison Clare",
    date: "Fri : 1:00 pm",
  },
  {
    sport: "Power Lifting",
    image: "/Trainers/sportif-confiant-casque-corde-sauter.jpg",
    coach: "Coralie pers",
    date: "sat : 9:00 am",
  },
  {
    sport: "Workout",
    image: "/Trainers/homme-athletique-souriant-fond-noir.jpg",
    coach: "David villa",
    date: "Fri : 6:00 am",
  },
  {
    sport: "Fitness",
    image: "/Trainers/femme-veste-rouge-qui-s-etend.jpg",
    coach: "Mia Diane",
    date: "sun : 10:00 pm",
  },
  {
    sport: "Boxing",
    image: "/Trainers/woman.jpg",
    coach: "Elisa Emery",
    date: "Tue : 5:00 pm",
  },
];

const settings = {
  customPaging: function (i) {
    return (
      <div>
        <img src={`${DataClasses[i].image}`} alt="" className="h-[30px]" />
      </div>
    );
  },
  dots: true,
  dotsClassName: "slick-dots slick-thumb",
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        arrows: false,
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
      },
    },
  ],
};
const Members = () => {
  return (
    <>
      <h1 className="font-bold text-[2rem]">Classes</h1>
      <div className="lg:w-3/4 md:w-2/3 m-auto">
        <div className="mt-20">
          <Slider {...settings}>
            {DataClasses.map((d, index) => (
              <div
                key={index}
                className="bg-black relative text-black w-[100px] h-[480px] md:w-[200px] md:h-[450px] rounded-xl"
              >
                <div
                  className="absolute flex flex-col justify-end px-4 bg-white w-full h-full bg-no-repeat bg-cover bg-center rounded-lg cursor-pointer border-l-[#111] border-l-4"
                  style={{ backgroundImage: `url(${d.image})` }}
                >
                  <h1 className="text-[#ffffff] font-bold text-[2rem]">
                    {d.sport}
                  </h1>
                  <span className="bg-[#ff0336] w-[50px] h-[4px] block mt-2"></span>
                  <div className="flex lg:gap-10 sm:gap-1 md:gap-3 my-4 text-[#ffffffe1] text-[1.2rem] font-medium">
                    <p>{d.coach}</p>
                    <p>{d.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
};

export default Members;
