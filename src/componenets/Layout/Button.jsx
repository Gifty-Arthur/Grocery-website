// eslint-disable-next-line react/prop-types
const Button = ({ title, Icon }) => {
  return (
    <div>
      <button className="md:w-[191px] md:h-[51px] md:mt-4 text-sm h-[] md:rounded-full bg-primary text-white hover:text-black transition-all flex items-center justify-center">
        {title}
        {Icon && <Icon className="ml-2  " size={25} />}
      </button>
    </div>
  );
};

export default Button;
