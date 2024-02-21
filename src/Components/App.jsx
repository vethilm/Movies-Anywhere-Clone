/*
Components needed:
header
    logo
    7 links
    searchtool 
    bell
    profile

large display
    title
    subtitle
    bpdy
    play button
    info button

~20 rows
each row has 
        a heading
        45 thumbnails
              5 per scroll
        prev and next arrows

*/
import Thumbnail from "./Thumbnail";
import Row from "./Row";
import "./temp-data";

const list = [
  "Mortal Engines",
  "The Winter Solider",
  "The Perks of Being a Wallfower",
  "X-Men Days of Future Past",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];

function App() {
  return (
    <>
      <Row header="Ready To Watch" items={list} tbn="tbn landscape" />;
      <Row header="My Wishlist" items={list} tbn="tbn sm-portrait" />;
      <Row header="New Releases" items={list} tbn="tbn lg-portrait"></Row>
      <Row header="My Sets" items={list} tbn="tbn sm-portrait"></Row>
      <Row header="Deals" items={list} tbn="tbn sm-portrait"></Row>
      <Row items={list} tbn="tbn sm-portrait"></Row>
    </>
  );
}

export default App;
