import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Image from './components/Image';
import Profile from './components/Profile';

export default function App() {
  const regular = 'rounded-xl text-white hover:bg-white';
  const array = [
    'page3.png',
    'page3.png',
    'another-image.png',
    'page3.png',
    'page3.png',
    'another-image.png',
    'another-image.png',
    'page3.png',
    'page3.png',
    'page3.png',
    'page3.png',
    'page3.png',
    'another-image.png',
    'page3.png',
    'page3.png',
    'another-image.png',
  ];
  return (
    <main>
      <header className="flex flex-col md:flex-row justify-between m-2 sm:mx-8 gap-y-8">
        <section className="text-sm flex  w-[100%] md:w-[60%]">
          <Profile />
          <Input
            id="search"
            icon="/search-icon.svg"
            placeholder="Search by name"
            styles="border-l-0 text-[10px]"
          />
        </section>
        <section>
          <Button
            title="Add a photo"
            moreStyles={
              regular +
              ' bg-[#3DB46D]' +
              ' hover:text-[#3DB46D] w-max hover:border-2 hover:border-[#3DB46D]'
            }
          />
        </section>
      </header>
      <main className="mt-8 flex flex-col gap-4 mx-2 sm:mx-8 justify-center items-center w-auto sm:flex sm:flex-row sm:flex-wrap">
        {array.map((a) => (
          <Image
            img={{
              url: `/${a}`,
              label: 'This is but a page',
            }}
          />
        ))}
      </main>
      <footer></footer>
    </main>
  );
}
