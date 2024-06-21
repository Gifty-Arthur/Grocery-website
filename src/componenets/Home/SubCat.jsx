// Images
import bgcat from "../../assets/categories/bgcat.png";
import sbcat1 from "../../assets/categories/sbcat1.png";
import sbcat2 from "../../assets/categories/sbcat2.png";

function SubCategories() {
  return (
    <div className="relative">
      <img src={bgcat} alt="" className="w-full h-[617px]" />
      <div className=" absolute top-0 left-0 w-full text-center text-white p-20">
        <div className="container">
          <div className="flex flex-row gap-6">
            <img src={sbcat2} alt="" />
            <img src={sbcat1} alt="" />
            <div className="">
              <h1 className="font-bold text-custom1 text-5xl font-poppins">
                100% Trusted
              </h1>
              <h1 className="font-bold text-custom1 text-5xl font-poppins ml-10">
                Organic Food Store
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubCategories;
