const {widget} = figma;
const {AutoLayout, Ellipse, Frame, SVG, Text, Input, useSyncedState} = widget;

type SearchBarProps = {
    setResults: (value: any[]) => void
}
export default function SearchBar({setResults}: SearchBarProps) {
    const [text, setText] = useSyncedState("text", "");
    const onTextEnd = async (event: TextEditEvent) => {
        setText(event.characters);
        console.log('started --> NEW ->  ' + event.characters);
        const url = 'https://corsproxy.io/?' + encodeURIComponent('https://jisho.org/api/v1/search/words?exact=true&keyword=' + encodeURIComponent(event.characters.toLowerCase()))
        const response = await fetch(url)
        const json = await response.json()
        console.log(json.data)
        console.log(typeof setResults)
        setResults(json.data)
    };
    const onXClick = () => {
        setText('')
        setResults([])
    }

    return <AutoLayout
        name="search-bar"
        fill="#FFF"
        stroke="#D9D9D9"
        cornerRadius={8}
        overflow="visible"
        spacing="auto"
        padding={16}
        width="fill-parent"
        verticalAlignItems="center"
    >
        <AutoLayout
            name="search-bar-contents"
            strokeWidth={1.464}
            overflow="visible"
            spacing={8}
            verticalAlignItems="center"
        >
            <Frame
                name="search-icon"
                strokeWidth={
                    0.805
                }
                width={32}
                height={32}
            >
                <SVG
                    name="Union"
                    x={9.664}
                    y={9.664}
                    height={13}
                    width={13}
                    src="<svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path fill-rule='evenodd' clip-rule='evenodd' d='M9.90112 6.08601C9.90112 8.53227 7.91803 10.5154 5.47177 10.5154C3.0255 10.5154 1.04241 8.53227 1.04241 6.08601C1.04241 3.63974 3.0255 1.65666 5.47177 1.65666C7.91803 1.65666 9.90112 3.63974 9.90112 6.08601ZM8.87763 10.0613C7.96215 10.8464 6.77235 11.3207 5.47177 11.3207C2.58073 11.3207 0.237076 8.97705 0.237076 6.08601C0.237076 3.19497 2.58073 0.851318 5.47177 0.851318C8.36281 0.851318 10.7065 3.19497 10.7065 6.08601C10.7065 7.38658 10.2322 8.57638 9.44709 9.49186L13.0045 13.0493L12.4351 13.6188L8.87763 10.0613Z' fill='black' fill-opacity='0.8'/>
</svg>
"
                />
            </Frame>
            <Input
                fontSize={16}
                fill="#000000"
                inputFrameProps={{
                    cornerRadius: 8,
                }}
                onTextEditEnd={onTextEnd}
                placeholder="Your annotation here..."
                value={text}
                width={446}
            />
        </AutoLayout>
        <Frame
            name="32 / x"
            overflow="visible"
            width={32}
            height={32}
            onClick={onXClick}
        >
            <SVG
                name="Union"
                x={10.647}
                y={10.647}
                height={11}
                width={11}
                src="<svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path fill-rule='evenodd' clip-rule='evenodd' d='M6.19478 5.48033L10.8412 0.833862L11.5484 1.54097L6.90189 6.18743L11.5484 10.8339L10.8412 11.541L6.19478 6.89454L1.54835 11.541L0.841248 10.8339L5.48767 6.18744L0.841249 1.54105L1.54835 0.833938L6.19478 5.48033Z' fill='black' fill-opacity='0.8'/>
</svg>
"
            />
        </Frame>
    </AutoLayout>
}