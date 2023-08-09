import * as nwi from './nwInterfaces'
import Card from "./Card";
import SearchBar from "./SearchBar";
import ResultsList from "./ResultsList";
import Title from "./Title";

const {widget} = figma;
const {AutoLayout, Ellipse, Frame, Image, Rectangle, SVG, Text, Input, useSyncedState,} = widget;

function Widget() {
    const [results, setResults] = useSyncedState<nwi.Daum[]>("results", []);
    const [numberOfResults, setNumberOfResults] = useSyncedState<number>("numberOfResults", 0)
    const [page, setPage] = useSyncedState<number>("page", 1)
    const [maxPage, setMaxPage] = useSyncedState<number>("maxPage", 1)
    const [indexFloor, setIndexFloor] = useSyncedState<number>("indexFloor", 0)
    const [indexCeiling, setIndexCeiling] = useSyncedState<number>("indexCeiling", 2)
    const resultsPerPage: number = 4

    return (
        <Card>
            <Title/>
            <SearchBar setResults={setResults} setNumberOfResults={setNumberOfResults} setPage={setPage}
                       setIndexFloor={setIndexFloor} setIndexCeiling={setIndexCeiling} resultsPerPage={resultsPerPage}
                        maxPage={maxPage} setMaxPage={setMaxPage}/>
            <ResultsList results={results} page={page} numberOfResults={numberOfResults} resultsPerPage={resultsPerPage}
                         indexFloor={indexFloor} setIndexFloor={setIndexFloor} indexCeiling={indexCeiling}
                         setIndexCeiling={setIndexCeiling} setPage={setPage} maxPage={maxPage}/>
        </Card>
    );
}

widget.register(Widget);
