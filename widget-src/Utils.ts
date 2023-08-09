import * as nwi from "./nwInterfaces";

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