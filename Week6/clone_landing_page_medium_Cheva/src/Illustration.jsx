import landingPage from "./assets/landingpage.webp";

function Illustration() {
  return (
    <>
      <div className="absolute top-24 right-10 hidden lg:block">
        <img src={landingPage} alt="Illustration" className="w-[450px]" />
      </div>
    </>
  );
}

export default Illustration;
