import BookAppoinment from "./UI/Components/BookAppoinment";
import BookAppointmentSteps from "./UI/Components/BookAppointmentSteps";
import FeedBack from "./UI/Components/FeedBack";
import HeroSection from "./UI/Components/HeroSection";
import Specialists from "./UI/Components/Specialists";
import TopRatedDoctors from "./UI/Components/TopRatedDoctors";

export default function Home() {
  return (
  <>
   <HeroSection/>
   <BookAppointmentSteps/>
   <BookAppoinment/>
   <Specialists/>
   <TopRatedDoctors/>
   <FeedBack/>
  </>
  );
}
