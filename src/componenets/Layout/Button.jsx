/* eslint-disable react/prop-types */
const Button = (props) => {
  return (
    <div>
      <button className="md:w-[191px] md:h-[51px] text-sm w-[70px] h-[30px] rounded-md md:rounded-full bg-primary hover:text-black transition-all">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
