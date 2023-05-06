export default function ({ type, label, id, icon, placeholder, styles }) {
  return (
    <div className="flex w-[50%] sm:w-[80%]">
      {icon && (
        <div className=" flex px-2 sm:p-3 bg-white border-[1px] border-r-0 border-[#4F4F4F] rounded-l-xl  ">
          <img src={icon} alt={icon} className="w-6 sm:w-8 opacity-30" />
        </div>
      )}
      <div className="w-[100%]">
        {label && (
          <label for={id} className="flex mb-1 text-white">
            {label}
          </label>
        )}
        <input
          type={type}
          className={`outline-none rounded-r-xl py-3  sm:py-4 border-[1px] border-[#4F4F4F] ${styles} w-[100%]`}
          placeholder={placeholder}
          id={id}
        />
      </div>
    </div>
  );
}
