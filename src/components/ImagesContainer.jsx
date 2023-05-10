import Image from "./Image";
export default function ({ images }) {
  return (
    <div className="gap-3 sm:w-[48%] md:w-[32%] md:flex md:flex-col">
      {images.map((a) => (
        <Image
          img={{
            url: `/${a}`,
            label: 'This is but a page',
          }}
        />
      ))}
    </div>
  );
}
