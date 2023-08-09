const {widget} = figma
const {AutoLayout, Text, Frame, SVG} = widget

type PaginationBarProps = {
    numberOfResults: number
    page: number
    resultsPerPage: number
    indexFloor: number
    setIndexFloor: (value: number) => void
    indexCeiling: number
    setIndexCeiling: (value: number) => void
    setPage:(value: number) => void
    maxPage: number
}
export default function PaginationBar({maxPage,numberOfResults, page, resultsPerPage, indexFloor, setIndexFloor, indexCeiling, setIndexCeiling, setPage}: PaginationBarProps) {
    const onArrowRightClick = (page: number, indexCeiling:number) => {
        const newPageNumber = page + 1
        const newIndexFloor = resultsPerPage * page + 1
        let newIndexCeiling: number = newPageNumber * resultsPerPage
        if(newIndexCeiling > numberOfResults) newIndexCeiling = newIndexFloor + (numberOfResults % resultsPerPage) - 1
        console.log('arrow left click -> ', newPageNumber, newIndexFloor, newIndexCeiling)
        setPage(newPageNumber)
        setIndexFloor(newIndexFloor)
        setIndexCeiling(newIndexCeiling)
    }
    const onArrowLeftClick = (page: number) => {
        const newPageNumber = page - 1
        const newIndexCeiling: number = resultsPerPage * newPageNumber
        let newIndexFloor: number = resultsPerPage * (newPageNumber-1) + 1
        console.log('arrow left click -> ', newPageNumber, newIndexFloor, newIndexCeiling)

        setPage(newPageNumber)
        setIndexFloor(newIndexFloor)
        setIndexCeiling(newIndexCeiling)
    }

    return (
        <AutoLayout
            name="SearchBar"
            cornerRadius={
                11.71535587310791
            }
            strokeWidth={1.464}
            overflow="visible"
            spacing="auto"
            padding={{
                vertical: 4,
                horizontal: 8,
            }}
            width={512}
            verticalAlignItems="center"
        >
            <Text
                name="1-2 of 20"
                fill="#939393"
                verticalAlignText="center"
                horizontalAlignText="center"
                fontFamily="Inter"
                fontSize={
                    17.573034286499023
                }
                fontWeight={500}
            >
                {`${indexFloor === 0 ? 1 : indexFloor} - `} {resultsPerPage > numberOfResults ? numberOfResults : `${indexCeiling} of ${numberOfResults}`}
            </Text>
            <AutoLayout
                name="Frame 3"
                overflow="visible"
                spacing={8}
                horizontalAlignItems="end"
                verticalAlignItems="center"
            >
                {page > 1 ? <Frame
                    name="ArrowLeft"
                    width={32}
                    height={32}
                    onClick={(e:WidgetClickEvent) => {
                        onArrowLeftClick(page)
                    }}
                >
                    <SVG
                        name="Vector"
                        x={{
                            type: "horizontal-scale",
                            leftOffsetPercent: 12.498,
                            rightOffsetPercent: 12.5,
                        }}
                        y={{
                            type: "vertical-scale",
                            topOffsetPercent: 18.748,
                            bottomOffsetPercent: 18.748,
                        }}
                        height={20}
                        width={24}
                        src="<svg width='25' height='21' viewBox='0 0 25 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M24.5 10.7191C24.5 10.9843 24.3946 11.2387 24.2071 11.4262C24.0196 11.6138 23.7652 11.7191 23.5 11.7191H3.91374L11.2075 19.0116C11.3004 19.1045 11.3741 19.2148 11.4244 19.3362C11.4747 19.4576 11.5005 19.5877 11.5005 19.7191C11.5005 19.8505 11.4747 19.9806 11.4244 20.102C11.3741 20.2234 11.3004 20.3337 11.2075 20.4266C11.1146 20.5195 11.0043 20.5932 10.8829 20.6435C10.7615 20.6938 10.6314 20.7197 10.5 20.7197C10.3686 20.7197 10.2385 20.6938 10.1171 20.6435C9.9957 20.5932 9.8854 20.5195 9.79249 20.4266L0.792493 11.4266C0.699517 11.3337 0.625758 11.2235 0.575433 11.1021C0.525109 10.9807 0.499207 10.8505 0.499207 10.7191C0.499207 10.5877 0.525109 10.4576 0.575433 10.3362C0.625758 10.2148 0.699517 10.1045 0.792493 10.0116L9.79249 1.01162C9.98013 0.823975 10.2346 0.718559 10.5 0.718559C10.7654 0.718559 11.0199 0.823975 11.2075 1.01162C11.3951 1.19926 11.5005 1.45375 11.5005 1.71912C11.5005 1.98448 11.3951 2.23897 11.2075 2.42662L3.91374 9.71912H23.5C23.7652 9.71912 24.0196 9.82447 24.2071 10.012C24.3946 10.1995 24.5 10.4539 24.5 10.7191Z' fill='#C7C7C7'/>
</svg>
"
                    />
                </Frame> : null}
                {page < maxPage ?
                <Frame
                    name="ArrowRight"
                    width={32}
                    height={32}
                    onClick={(e:WidgetClickEvent) => {
                        onArrowRightClick(page, indexCeiling)
                    }}
                >
                    <SVG
                        name="Vector"
                        x={{
                            type: "horizontal-scale",
                            leftOffsetPercent: 12.5,
                            rightOffsetPercent: 12.498,
                        }}
                        y={{
                            type: "vertical-scale",
                            topOffsetPercent: 18.748,
                            bottomOffsetPercent: 18.748,
                        }}
                        height={20}
                        width={24}
                        src="<svg width='25' height='21' viewBox='0 0 25 21' fill='none' xmlns='http://www.w3.org/2000/svg'>
<path d='M24.2075 11.4266L15.2075 20.4266C15.0199 20.6143 14.7654 20.7197 14.5 20.7197C14.2346 20.7197 13.9801 20.6143 13.7925 20.4266C13.6049 20.239 13.4994 19.9845 13.4994 19.7191C13.4994 19.4538 13.6049 19.1993 13.7925 19.0116L21.0863 11.7191H1.5C1.23478 11.7191 0.98043 11.6138 0.792893 11.4262C0.605357 11.2387 0.5 10.9843 0.5 10.7191C0.5 10.4539 0.605357 10.1995 0.792893 10.012C0.98043 9.82447 1.23478 9.71912 1.5 9.71912H21.0863L13.7925 2.42662C13.6049 2.23897 13.4994 1.98448 13.4994 1.71912C13.4994 1.45375 13.6049 1.19926 13.7925 1.01162C13.9801 0.823975 14.2346 0.718559 14.5 0.718559C14.7654 0.718559 15.0199 0.823975 15.2075 1.01162L24.2075 10.0116C24.3005 10.1045 24.3742 10.2148 24.4246 10.3362C24.4749 10.4576 24.5008 10.5877 24.5008 10.7191C24.5008 10.8505 24.4749 10.9807 24.4246 11.1021C24.3742 11.2235 24.3005 11.3337 24.2075 11.4266Z' fill='#C7C7C7'/>
</svg>
"
                    />
                </Frame> : null}
            </AutoLayout>
        </AutoLayout>
    );
}

