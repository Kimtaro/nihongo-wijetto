const {widget} = figma;
const {AutoLayout, Ellipse, Frame, Image, Rectangle, SVG, Text, Input, useSyncedState,} = widget;

function Widget() {
    const [text, setText] = useSyncedState("text", "");
    const [results, setResults] = useSyncedState("results", []);
    const onTextEnd = async (event) => {
        setText(event.characters);
        console.log('started --> NEW ->  ' + event.characters);
        const url = 'https://corsproxy.io/?' + encodeURIComponent('https://jisho.org/api/v1/search/words?keyword=' + encodeURIComponent(event.characters.toLowerCase()))
        const response = await fetch(url)
        const json = await response.json()
        setResults(json.data)
        console.log(results)
    };
    return (
        <Frame
            name="Card"
            effect={{
                type: "drop-shadow",
                color: "#00000026",
                offset: {
                    x: 0,
                    y: 23.431,
                },
                blur: 46.861,
                showShadowBehindNode:
                    false,
            }}
            cornerRadius={
                23.43071174621582
            }
            strokeWidth={1.464}
            width={582.839}
            height={391}

        >
            <Rectangle
                name="Rectangle 1"
                fill="#FFF"
                cornerRadius={
                    23.43071174621582
                }
                strokeWidth={1.464}
                width={582.839}
                height={391}
            />
            <AutoLayout
                name="Title"
                x={-23.431}
                fill="#5551FF"
                strokeWidth={1.464}
                spacing={14.644}
                padding={14.644}
                width={628.236}
                horizontalAlignItems="center"
                verticalAlignItems="center"
            >
                <Text
                    name="日本語ウィジェット"
                    fill="#FFF"
                    verticalAlignText="center"
                    horizontalAlignText="center"
                    fontFamily="Roboto"
                    fontSize={
                        35.14606857299805
                    }
                    fontWeight={700}
                    strokeWidth={1.464}
                >
                    日本語 ウィジェット
                </Text>
            </AutoLayout>

            <AutoLayout
                name="search-bar"
                x={17.573}
                y={95.187}
                fill="#FFF"
                stroke="#0000004D"
                cornerRadius={16}
                overflow="visible"
                spacing="auto"
                padding={16}
                width={550.622}
                verticalAlignItems="center"
            >
                <AutoLayout
                    name="Frame 1"
                    strokeWidth={1.464}
                    overflow="visible"
                    spacing={8}
                    verticalAlignItems="center"
                >
                    <Frame
                        name="40 / Toolbar / search"
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
                    />
                </AutoLayout>
                <Frame
                    name="32 / x"
                    overflow="visible"
                    width={32}
                    height={32}
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
            <AutoLayout
                name="scrolling result"
                x={18}
                y={148}
                direction="vertical"
                padding={{
                    vertical: 24,
                    horizontal: 0,
                }}
                height={208}
                horizontalAlignItems="center"
            >
                <AutoLayout
                    name="Frame 4"
                    overflow="scroll"
                    direction="vertical"
                    spacing={16}
                >
                    {results.map((result, index) => {
                        return <AutoLayout
                        name="search-bar"
                        fill="#F5F5F5"
                        key={index}
                        cornerRadius={8}
                        strokeWidth={
                            1.464
                        }
                        overflow="scroll"
                        spacing={32}
                        padding={{
                            vertical: 16,
                            horizontal: 40,
                        }}
                        width={512}
                        horizontalAlignItems="center"
                    >
                        <AutoLayout
                            name="kanji-box"
                            overflow="visible"
                            direction="vertical"
                            spacing={8}
                            verticalAlignItems="center"
                            horizontalAlignItems="center"
                        >
                            <Text
                                name={result.japanese[0].reading}
                                fill="#F24E1E"
                                verticalAlignText="center"
                                horizontalAlignText="center"
                                fontFamily="Zen Kaku Gothic Antique"
                                fontSize={12}
                                fontWeight={
                                    500
                                }
                                strokeWidth={
                                    1.464
                                }
                            >
                                {result.japanese[0].reading}
                            </Text>
                            <Text
                                name={result.slug}
                                fill="#000"
                                verticalAlignText="center"
                                horizontalAlignText="center"
                                fontFamily="Roboto"
                                fontSize={32}
                                strokeWidth={
                                    3.039
                                }
                            >
                                {result.slug}
                            </Text>
                        </AutoLayout>
                        <AutoLayout
                            name="Frame 7"
                            overflow="visible"
                            direction="vertical"
                            spacing={8}
                            width="fill-parent"
                            height="fill-parent"
                            verticalAlignItems="center"
                        >
                            <AutoLayout
                                name="definition-box"
                                overflow="visible"
                                direction="vertical"
                                width="fill-parent"
                                verticalAlignItems="center"
                            >
                                <Text
                                    name={result.senses[0].parts_of_speech}
                                    fill="#909090"
                                    verticalAlignText="center"
                                    horizontalAlignText="center"
                                    fontFamily="Inter"
                                    fontSize={8}
                                    strokeWidth={
                                        1.464
                                    }
                                >
                                    {result.senses[0].parts_of_speech}
                                </Text>
                                <Text
                                    name={result.senses[0].english_definitions[0]}
                                    fill="#0006"
                                    verticalAlignText="center"
                                    horizontalAlignText="center"
                                    fontFamily="Roboto"
                                    fontSize={
                                        24
                                    }
                                    strokeWidth={
                                        3.039
                                    }
                                >
                                    {result.senses[0].english_definitions[0]}
                                </Text>
                            </AutoLayout>
                        </AutoLayout>
                        <Rectangle
                            name="common-word-signal"
                            y={{
                                type: "top-bottom",
                                topOffset: 0,
                                bottomOffset: 0,
                            }}
                            positioning="absolute"
                            fill="#0FA958"
                            cornerRadius={{
                                topLeft: 8,
                                topRight: 0,
                                bottomRight: 0,
                                bottomLeft: 8,
                            }}
                            width={7}
                            height={95}
                        />
                    </AutoLayout>
                    })}
                </AutoLayout>
            </AutoLayout>
            <Rectangle
                name="Rectangle 2"
                x={18}
                y={356}
                fill="#FFF"
                width={512}
                height={35}
            />
            {/*<Frame*/}
            {/*    name="scrollbar"*/}
            {/*    x={555}*/}
            {/*    y={169}*/}
            {/*    overflow="visible"*/}
            {/*    width={13}*/}
            {/*    height={187}*/}
            {/*>*/}
            {/*    <Rectangle*/}
            {/*        name="Rectangle 3"*/}
            {/*        fill="#F5F5F5"*/}
            {/*        cornerRadius={50}*/}
            {/*        width={13}*/}
            {/*        height={187}*/}
            {/*    />*/}
            {/*</Frame>*/}
            {/*<Rectangle*/}
            {/*    name="Rectangle 4"*/}
            {/*    x={555}*/}
            {/*    y={169}*/}
            {/*    fill="#000"*/}
            {/*    cornerRadius={50}*/}
            {/*    width={13}*/}
            {/*    height={50}*/}
            {/*/>*/}
        </Frame>
    );
}

widget.register(Widget);
