import Header from "./Header";
import Container from "./Components/TicketMainScreen/Container";
import MainScreen from "./Components/TicketMainScreen/MainScreen";

function App() {
  return (
    <div className="w-full flex flex-col bg-[#17263E] h-[100vh] text-white text-[20]">
      <Container>
        <Header />
        <MainScreen />
      </Container>
    </div>
  );
}

export default App;
