import MainComponent from "./components/MaiComponent/MainComponent";
import { img1 } from "./images";
import DosIcon from "./images/DosIcon";
import DontsIcon from "./images/DontsIcon";

function App() {
  const data = {
    fontFamily: "'Space Mono', monospace",
    headerFontFamily: "'Archivo Black', sans-serif",
    primaryColor: "#000",
    secondaryColor: "#fff",
    background: "#2B70E4",
    title: "Dos and Don'ts for A Succesfull Job Interview",
    tagline: "Pay Close Attention to these and you won't fail.",
    bottomTitle: "Good Luck!",
    dosData: {
      icon: <DosIcon color="#fff" />,
      data: [
        { img: img1, info: "Research <br/> about the <br/> company" },
        { img: img1, info: "Dress <br/> properly  and <br/> accordingly" },
        {
          img: img1,
          info: "Answer <br/>questions<br/> honestly",
        },
        { img: img1, info: "Research <br/> About the <br/> Company" },
      ],
    },
    dontData: {
      icon: <DontsIcon color="#fff" />,
      data: [
        { img: img1, info: "Make <br/> negative <br/> comments" },
        { img: img1, info: "Treat the <br/> interview<br/> casually" },
        {
          img: img1,
          info: "Forget to bring <br/>the hardcopy<br/> of your resume",
        },
        {
          img: img1,
          info: "Unprepaird for <br/> typical interview <br/> questions",
        },
      ],
    },
  };
  return (
    <div
      style={{
        "--primaryColor": data.primaryColor,
        "--secondaryColor": data.secondaryColor,
        "--backgroundColor": data.background,
        fontFamily: data.fontFamily,
      }}
    >
      <MainComponent {...data} />
    </div>
  );
}

export default App;
