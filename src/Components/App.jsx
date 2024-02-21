/*
Components needed:
header
    logo
    3 links
    searchtool 
    bell
    profile
subeader
    3 links

large display - 4 slides
    image
    title
    subtitle
    cta button
    play button
    dot slide diplay
    arrows

collected and wislisted stats

continue watcing row
  landscape tumbnail
  title
  subtitle
  play button

plain rows
each row has 
        a heading
        different amounts of tumbnails
              6 per scroll
        prev and next arrows
        some have sale text
      
sets row
  large thumbnail
  2-3 small thumbnails
  title
  1 of {total movies}
  some have sale text

mangaing your movies row
  6 circle buttons w/ title and subtitle

collection rows
  square thumbnails with tile in photo
*/
import Row from "./Row";
import "./temp-data";

console.clear();

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
      {/* <Row header="Ready To Watch" items={list} tbn="tbn landscape" />; */}
      <Row header="My Wishlist" items={list} tbn="tbn sm-portrait" />;
      <Row header="New Releases" items={list} tbn="tbn lg-portrait"></Row>
      <Row header="My Sets" items={list} rowType="set"></Row>
      <Row header="Deals" items={list} tbn="tbn sm-portrait"></Row>
      <Row items={list} tbn="tbn sm-portrait"></Row>
    </>
  );
}

export default App;
