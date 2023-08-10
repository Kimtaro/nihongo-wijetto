import * as nwi from "./nwInterfaces";
const {widget} = figma
const {useSyncedState} = widget

export const shouldShowReading = (entry: nwi.Daum): Boolean => {
    return reading(entry) !== word(entry)
}
export const reading = (entry: nwi.Daum): string => {
    return entry.japanese[0].reading
}
export const word = (entry: nwi.Daum): string => {
    const usuallyKana = entry.senses.find((sense) => {
        return sense.tags && sense.tags.find((tag) => {
            if (tag === 'Usually written using kana alone') {
                return true
            }
        })
    })
    if (!usuallyKana && entry.japanese[0].word) {
        return entry.japanese[0].word
    } else {
        return entry.japanese[0].reading
    }
}

type NihongoSettings = {
    results: nwi.Daum[],
    setters: NihongoSetters
}

type NihongoSetters = {
    setResults: (value: nwi.Daum[]) => void

}

function getInitialStateAndSetters(): NihongoSettings {
    const [results, setResults] = useSyncedState<nwi.Daum[]>("results", []);
    const [numberOfResults, setNumberOfResults] = useSyncedState<number>("numberOfResults", 0)
    const [page, setPage] = useSyncedState<number>("page", 1)
    const [maxPage, setMaxPage] = useSyncedState<number>("maxPage", 1)
    const [indexFloor, setIndexFloor] = useSyncedState<number>("indexFloor", 0)
    const [indexCeiling, setIndexCeiling] = useSyncedState<number>("indexCeiling", 2)
    const resultsPerPage: number = 4
    const setters = {setResults}
    return {results, setters}
}