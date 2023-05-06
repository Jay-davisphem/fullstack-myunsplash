export default function () {
  return (
    <div className="cursor-pointer hover:opacity-50 flex items-center w-[60%] sm:w-[60%]">
      <img src="/user-icon.svg" alt="user icon" className="w-10 mb-0" />
      <div className="flex flex-col items-start gap-0 p-0">
        <p className="mt-0 text-md  sm:text-lg font-extrabold leading-none ">
          My Unsplash
        </p>
        <p className="p-0 font-medium text-[10px]">unsplash.oluwafemi.tech</p>
      </div>
    </div>
  );
}
