const {widget} = figma;
const {AutoLayout, Text} = widget;
export default function Title() {
    return <AutoLayout
        name="Title"
        fill="#5551FF"
        strokeWidth={1.464}
        spacing={14.644}
        padding={14.644}
        width="fill-parent"
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
}