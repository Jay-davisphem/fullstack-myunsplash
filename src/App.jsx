import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Image from './components/Image';

export default function App() {
  const regular = 'rounded-xl text-white hover:bg-white';
  const array = [2, 3, 2, 3, 1, 32, 2, 1, 41, 33];
  return (
    <div className="p-10 bg-blue-400">
      <Button
        title="Add a photo"
        moreStyles={regular + ' bg-[#3DB46D]' + ' hover:text-[#3DB46D]'}
      />
      <Button
        title="Submit"
        moreStyles={`px-5 ${regular} bg-[#3DB46D] hover:text-[#3DB46D]`}
      />
      <Button
        title="Delete"
        moreStyles={`bg-[#EB5757] px-5 ${regular} hover:text-[#EB5757]`}
      />

      <Button
        title="delete"
        moreStyles="hover:text-white hover:bg-[#EB5757] bg-transparent rounded-3xl border-2 border-[#EB5757] px-5 py-1 font-normal text-[#EB5757]"
      />
      {/* <Input
        id="search"
        icon="/vite.svg"
        placeholder="Search by name"
        styles="border-l-0"
      /> */}
      {/* <Input
        styles="w-[300px] h-12 rounded-l-md"
        label="Label"
        placeholder="I am a label"
      /> */}
      {
        <div className="flex w-[100%] flex-wrap justify-center gap-8">
          {array.map((a) => (
            <Image
              img={{
                url: '/page3.png',
                label: 'This is but a page',
              }}
            />
          ))}
        </div>
      }
    </div>
  );
}
