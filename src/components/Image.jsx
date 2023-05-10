import { useState } from 'react';
import Button from './Button';
export default function ({ img }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="border-[0.5px] border-gray-100 relative rounded-lg cursor-pointer hover:opacity-80"
      onMouseEnter={(e) => setHovered(true)}
      onMouseLeave={(e) => setHovered(false)}
    >
      {hovered && (
        <>
          <Button
            title="delete"
            moreStyles="hover:text-white hover:bg-[#EB5757] bg-transparent absolute right-4 top-4 rounded-3xl border-2 border-[#EB5757] px-5 py-1 font-normal text-[#EB5757]"
          />
          <p className="absolute font-black text-white bottom-4 left-4">
            {img.label}
          </p>
        </>
      )}
      <img src={img.url} alt={img.label} className="rounded-lg" />
    </div>
  );
}
