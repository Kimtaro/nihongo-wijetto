import { primitive } from "../ui-src/tokensPrimitives";
import { theme } from '../ui-src/tokensThemes';

const {widget} = figma;
const {AutoLayout, Ellipse, Frame, SVG, Text, Input, useSyncedState} = widget;

type SearchBarProps = {
    setResults: (value: any[]) => void
    setNumberOfResults: (value: number) => void
    setPage: (value: number) => void
    setIndexFloor: (value: number) => void
    setIndexCeiling: (value: number) => void
    resultsPerPage: number
    setMaxPage: (value: number) => void
    maxPage: number
}

export default function SearchBar({setResults, setNumberOfResults, setPage, setIndexCeiling, setIndexFloor, resultsPerPage, maxPage, setMaxPage}: SearchBarProps) {
    const [text, setText] = useSyncedState("text", "");
    const onTextEnd = async (event: TextEditEvent) => {
        setText(event.characters);
        console.log('started --> NEW ->  ' + event.characters);
        const url = 'https://corsproxy.io/?' + encodeURIComponent('https://jisho.org/api/v1/search/words?api_key=nihongowijetto&exact=true&keyword=' + encodeURIComponent(event.characters.toLowerCase()))
        const response = await fetch(url)
        const json = await response.json()
        setResults(json.data)
        setPage(1)
        const numberOfResults: number = json.data.length
        setNumberOfResults(numberOfResults)
        setIndexFloor(0)
        setIndexCeiling(resultsPerPage)
        setMaxPage(Math.ceil(numberOfResults/resultsPerPage))
    };
    const onXClick = () => {
        setText('')
        setResults([])
    }

    return <AutoLayout
        name="searchBar"
        fill={primitive.white}
        overflow="visible"
        spacing="auto"
        padding={{
            vertical: primitive.xlarge,
            horizontal: primitive.xlarge,
          }}
        width="fill-parent"
        verticalAlignItems="center"
    >
        <AutoLayout
            name="searchForm"
            overflow="visible"
            spacing={primitive.xlarge}
            verticalAlignItems="center"
        >
        <SVG
                    name="searchIcon"
                    height={primitive.large}
                    width={primitive.large}
                    src='<svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
                    <path d="M25.3333 15.1667C25.3333 21.0577 20.5577 25.8333 14.6666 25.8333C8.77562 25.8333 4 21.0577 4 15.1667C4 9.27563 8.77562 4.5 14.6666 4.5C20.5577 4.5 25.3333 9.27563 25.3333 15.1667Z" stroke="black" stroke-width="6.66666"/>
                    <path d="M22 23L27 28" stroke="black" stroke-width="6.66666" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>'
          /> 
            <Input
                name="searchInput"
                width={480}
                fontSize={primitive.large}
                fill={theme.textPrimary}
                onTextEditEnd={onTextEnd}
                placeholder="Search anything..."
                value={text}
            />
        </AutoLayout>
        <Frame
            name="searchCancel"
            overflow="visible"
            width={primitive.large}
            height={primitive.large}
            onClick={onXClick}
        >
            <SVG
                name="cancelIcon"
                height={primitive.large}
                width={primitive.large}
                src='<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path d="M6.66675 33.3333L33.3334 6.66663" stroke="black" stroke-width="6.66666" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M33.3334 33.3333L6.66675 6.66663" stroke="black" stroke-width="6.66666" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>'
            />
        </Frame>
    </AutoLayout>
}
