import { useState } from 'react';
import Button from './Button';
export default function ({ img }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="rounded-lg"
      onMouseEnter={(e) => setHovered(true)}
      onMouseLeave={(e) => setHovered(false)}
    >
      {hovered && (
        <Button
          title="delete"
          moreStyles="bg-transparent rounded-3xl border-2 border-[#EB5757] px-5 py-1 font-normal text-[#EB5757]"
        />
      )}
      <img src={img.url} alt={img.label} className="rounded-lg  w-[20vw]" />
    </div>
  );
}
