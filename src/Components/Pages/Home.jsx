import Row from "../Row";
import Banner from "../Banner";
import { getDealsList, getWishList } from "../temp-data";

console.clear();

const list = getWishList();
const deals = getDealsList();
function App() {
  return (
    <>
      {/* <Row header="Ready To Watch" items={list} tbn="tbn landscape" /> */}
      <Row header="My Wishlist" items={list} />
      <Row header="New Releases" items={list}></Row>
      <Row header="My Sets" items={list} rowType="set"></Row>

      <Row header="Deals" items={deals}></Row>

      <Row header="Trending" items={list}></Row>
      {/* remove see all from trneding */}

      <Banner />
    </>
  );
}

export default App;
