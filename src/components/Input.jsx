export default function ({ type, label, id, icon, placeholder, styles }) {
  return (
    <div className="flex w-max">
      {icon && (
        <div className="flex px-2 bg-white border-[1px] border-r-0 border-[#4F4F4F] rounded-l-md">
          <img src={icon} alt={icon} className="w-4" />
        </div>
      )}
      <div className="">
        {label && (
          <label for={id} className="flex mb-1 text-white">
            {label}
          </label>
        )}
        <input
          type={type}
          className={`outline-none rounded-r-md p-3 border-[1px] border-[#4F4F4F] ${styles}`}
          placeholder={placeholder}
          id={id}
        />
      </div>
    </div>
  );
}
