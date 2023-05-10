import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Image from './components/Image';
import Profile from './components/Profile';
import Footer from './components/Footer';
import ImagesContainer from './components/ImagesContainer';

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
      <header className="flex flex-col justify-between m-2 md:flex-row sm:mx-8 gap-y-8">
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
      <main className="flex flex-col justify-center w-auto gap-3 mx-2 mt-8 items -start sm:mx-8 sm:flex-row sm:flex-wrap">
          <ImagesContainer images={array}/>
          <ImagesContainer images={array}/>
          <ImagesContainer images={array}/>
      </main>
      <Footer />
    </main>
  );
}
