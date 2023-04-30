export default function ({ title, moreStyles }) {
  return (
    <button
      type="button"
      className={`${moreStyles} bg-[#3DB46D] p-3 font-bold hover:opacity-70`}
    >
      {title}
    </button>
  );
}
