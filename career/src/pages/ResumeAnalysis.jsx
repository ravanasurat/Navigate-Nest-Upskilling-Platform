import Home from '../resume/Home';
import Results from '../resume/Results';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ResumeAnalysis = () => {
  return (
    <div className="relative">
      <div className="absolute bottom-0 w-full h-32 bg-white rounded-t-[50%] z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        <Header/>
        <Home />
        <Results />
        <Footer/>
      </div>
    </div>
  );
};

export default ResumeAnalysis;