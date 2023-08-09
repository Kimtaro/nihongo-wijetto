import * as nwi from "./nwInterfaces";
import Result from "./Result";
import PaginationBar from "./PaginationBar";

const {widget} = figma;
const {AutoLayout, Rectangle, Text, useSyncedState} = widget;

type ResultsListProps = {
    results: nwi.Daum[]
    page: number
    numberOfResults: number
    resultsPerPage: number
    indexFloor: number
    setIndexFloor: (value: number) => void
    indexCeiling: number
    setIndexCeiling: (value: number) => void
    setPage: (value: number) => void
    maxPage: number
}

export default function ResultsList({maxPage,results, page, numberOfResults, resultsPerPage, indexFloor, indexCeiling, setIndexCeiling, setIndexFloor, setPage}: ResultsListProps) {



    return <AutoLayout
        name="ScrollingResult"
        direction="vertical"
        padding={{
            vertical: 24,
            horizontal: 24,
        }}
        width="fill-parent"
        horizontalAlignItems="center"
    >
        <AutoLayout
            name="Frame 4"
            overflow="scroll"
            direction="vertical"
            width="fill-parent"
            spacing={16}
        >
            {results.map((result, index) => {
                const iFloor = indexFloor === 0 ? 0 : indexFloor - 1
                const iCeiling = indexCeiling - 1
                return index >= iFloor && index <= iCeiling ? <Result resultInfo={result} index={index}/> : null
            })}
        </AutoLayout>
        {results.length > 0 ?
            <PaginationBar maxPage={maxPage} page={page} setPage={setPage} numberOfResults={numberOfResults} resultsPerPage={resultsPerPage}
                           indexFloor={indexFloor} setIndexFloor={setIndexFloor} indexCeiling={indexCeiling}
                           setIndexCeiling={setIndexCeiling}/> : <></>}
    </AutoLayout>
}