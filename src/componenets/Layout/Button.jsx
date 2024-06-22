// eslint-disable-next-line react/prop-types
const Button = ({ title, Icon }) => {
  return (
    <div>
      <button className="w-[191px] h-[51px] mt-8 text-sm rounded-full bg-primary text-white hover:text-black transition-all flex items-center justify-center">
        {title}
        {Icon && <Icon className="ml-2  " size={25} />}
      </button>
    </div>
  );
};

export default Button;
