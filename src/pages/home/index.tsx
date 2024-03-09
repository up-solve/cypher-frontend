import HeroSection from '@components/sections/home/HeroSection';

export interface HomePageProps {}

const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="px-4 tablet:px-10 desktop:px-20">
      <HeroSection />
    </div>
  );
};

export default HomePage;
