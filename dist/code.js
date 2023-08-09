(() => {
  var __async = (__this, __arguments, generator) => {
    return new Promise((resolve, reject) => {
      var fulfilled = (value) => {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      };
      var rejected = (value) => {
        try {
          step(generator.throw(value));
        } catch (e) {
          reject(e);
        }
      };
      var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
      step((generator = generator.apply(__this, __arguments)).next());
    });
  };

  // widget-src/Card.tsx
  var { widget } = figma;
  var { AutoLayout, Text } = widget;
  function Card({ children }) {
    return /* @__PURE__ */ figma.widget.h(AutoLayout, {
      name: "Card",
      effect: {
        type: "drop-shadow",
        color: "#00000026",
        offset: {
          x: 0,
          y: 23.431
        },
        blur: 46.861,
        showShadowBehindNode: false
      },
      fill: "#FFF",
      cornerRadius: 23.43071174621582,
      strokeWidth: 1.464,
      direction: "vertical",
      width: 550.62
    }, children);
  }

  // widget-src/SearchBar.tsx
  var { widget: widget2 } = figma;
  var { AutoLayout: AutoLayout2, Ellipse, Frame, SVG, Text: Text2, Input, useSyncedState } = widget2;
  function SearchBar({ setResults }) {
    const [text, setText] = useSyncedState("text", "");
    const onTextEnd = (event) => __async(this, null, function* () {
      setText(event.characters);
      console.log("started --> NEW ->  " + event.characters);
      const url = "https://corsproxy.io/?" + encodeURIComponent("https://jisho.org/api/v1/search/words?exact=true&keyword=" + encodeURIComponent(event.characters.toLowerCase()));
      const response = yield fetch(url);
      const json = yield response.json();
      console.log(json.data);
      console.log(typeof setResults);
      setResults(json.data);
    });
    const onXClick = () => {
      setText("");
      setResults([]);
    };
    return /* @__PURE__ */ figma.widget.h(AutoLayout2, {
      name: "search-bar",
      fill: "#FFF",
      stroke: "#D9D9D9",
      cornerRadius: 8,
      overflow: "visible",
      spacing: "auto",
      padding: 16,
      width: "fill-parent",
      verticalAlignItems: "center"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout2, {
      name: "search-bar-contents",
      strokeWidth: 1.464,
      overflow: "visible",
      spacing: 8,
      verticalAlignItems: "center"
    }, /* @__PURE__ */ figma.widget.h(Frame, {
      name: "search-icon",
      strokeWidth: 0.805,
      width: 32,
      height: 32
    }, /* @__PURE__ */ figma.widget.h(SVG, {
      name: "Union",
      x: 9.664,
      y: 9.664,
      height: 13,
      width: 13,
      src: "<svg width='14' height='14' viewBox='0 0 14 14' fill='none' xmlns='http://www.w3.org/2000/svg'>\n<path fill-rule='evenodd' clip-rule='evenodd' d='M9.90112 6.08601C9.90112 8.53227 7.91803 10.5154 5.47177 10.5154C3.0255 10.5154 1.04241 8.53227 1.04241 6.08601C1.04241 3.63974 3.0255 1.65666 5.47177 1.65666C7.91803 1.65666 9.90112 3.63974 9.90112 6.08601ZM8.87763 10.0613C7.96215 10.8464 6.77235 11.3207 5.47177 11.3207C2.58073 11.3207 0.237076 8.97705 0.237076 6.08601C0.237076 3.19497 2.58073 0.851318 5.47177 0.851318C8.36281 0.851318 10.7065 3.19497 10.7065 6.08601C10.7065 7.38658 10.2322 8.57638 9.44709 9.49186L13.0045 13.0493L12.4351 13.6188L8.87763 10.0613Z' fill='black' fill-opacity='0.8'/>\n</svg>\n"
    })), /* @__PURE__ */ figma.widget.h(Input, {
      fontSize: 16,
      fill: "#000000",
      inputFrameProps: {
        cornerRadius: 8
      },
      onTextEditEnd: onTextEnd,
      placeholder: "Your annotation here...",
      value: text,
      width: 446
    })), /* @__PURE__ */ figma.widget.h(Frame, {
      name: "32 / x",
      overflow: "visible",
      width: 32,
      height: 32,
      onClick: onXClick
    }, /* @__PURE__ */ figma.widget.h(SVG, {
      name: "Union",
      x: 10.647,
      y: 10.647,
      height: 11,
      width: 11,
      src: "<svg width='12' height='12' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>\n<path fill-rule='evenodd' clip-rule='evenodd' d='M6.19478 5.48033L10.8412 0.833862L11.5484 1.54097L6.90189 6.18743L11.5484 10.8339L10.8412 11.541L6.19478 6.89454L1.54835 11.541L0.841248 10.8339L5.48767 6.18744L0.841249 1.54105L1.54835 0.833938L6.19478 5.48033Z' fill='black' fill-opacity='0.8'/>\n</svg>\n"
    })));
  }

  // widget-src/VocabCard.tsx
  var { widget: widget3 } = figma;
  var { AutoLayout: AutoLayout3, Rectangle, Text: Text3, Frame: Frame2, Image } = widget3;
  function VocabCard({ nodeInfo }) {
    return /* @__PURE__ */ figma.widget.h(AutoLayout3, {
      name: "VocabularyCard",
      effect: {
        type: "drop-shadow",
        color: "#0000001A",
        offset: {
          x: 0,
          y: 4
        },
        blur: 24,
        showShadowBehindNode: false
      },
      fill: "#FFF",
      cornerRadius: 16,
      direction: "vertical",
      spacing: 10,
      width: 387,
      height: 350,
      horizontalAlignItems: "center"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout3, {
      name: "Kanji-box",
      effect: {
        type: "inner-shadow",
        color: "#0000001A",
        offset: {
          x: 0,
          y: 0
        },
        blur: 24,
        visible: false
      },
      fill: "#FFF",
      direction: "vertical",
      padding: {
        top: 10,
        right: 0,
        bottom: 0,
        left: 0
      },
      width: "fill-parent",
      height: "fill-parent",
      horizontalAlignItems: "center"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout3, {
      name: "kanji-box",
      strokeWidth: 1.5,
      overflow: "visible",
      direction: "vertical",
      width: "fill-parent",
      height: 114,
      verticalAlignItems: "center",
      horizontalAlignItems: "center"
    }, /* @__PURE__ */ figma.widget.h(Text3, {
      name: "\u9B5A",
      opacity: 0.8,
      fill: "#000",
      width: "fill-parent",
      verticalAlignText: "center",
      horizontalAlignText: "center",
      lineHeight: "100%",
      fontFamily: "Noto Serif Tamil",
      fontSize: 96,
      fontWeight: 900,
      strokeWidth: 4.559
    }, nodeInfo.slug))), /* @__PURE__ */ figma.widget.h(AutoLayout3, {
      name: "Find Sentences Container",
      fill: "#5551FF",
      cornerRadius: 50,
      overflow: "visible",
      spacing: 8,
      padding: {
        vertical: 8,
        horizontal: 16
      },
      verticalAlignItems: "center"
    }, /* @__PURE__ */ figma.widget.h(Image, {
      name: "Search",
      blendMode: "color-dodge",
      strokeWidth: 1.464,
      width: 23.431,
      height: 23.431,
      src: "<Add image URL here>"
    }), /* @__PURE__ */ figma.widget.h(Text3, {
      name: "Find sentences",
      fill: "#FFF",
      verticalAlignText: "center",
      fontFamily: "Inter",
      fontWeight: 300
    }, "Find sentences")), /* @__PURE__ */ figma.widget.h(AutoLayout3, {
      name: "Definitions Container",
      overflow: "visible",
      direction: "vertical",
      spacing: 16,
      padding: {
        top: 8,
        right: 32,
        bottom: 32,
        left: 32
      },
      width: "fill-parent"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout3, {
      name: "definition-box",
      overflow: "visible",
      direction: "vertical",
      width: "fill-parent",
      verticalAlignItems: "center"
    }, /* @__PURE__ */ figma.widget.h(Text3, {
      name: "Reading",
      fill: "#699BF7",
      width: "fill-parent",
      verticalAlignText: "center",
      fontFamily: "Inter",
      fontSize: 8,
      fontWeight: 300,
      strokeWidth: 1.464
    }, "Reading"), /* @__PURE__ */ figma.widget.h(Text3, {
      name: "\u3055\u304B\u306A",
      fill: "#F24E1E",
      width: "fill-parent",
      verticalAlignText: "center",
      fontFamily: "Inter",
      fontWeight: 700,
      strokeWidth: 3.039
    }, nodeInfo.japanese[0].reading)), /* @__PURE__ */ figma.widget.h(AutoLayout3, {
      name: "definition-box",
      overflow: "visible",
      direction: "vertical",
      width: "fill-parent",
      verticalAlignItems: "center"
    }, /* @__PURE__ */ figma.widget.h(Text3, {
      name: "Godan verb with ru ending, Transitive verb",
      fill: "#699BF7",
      width: "fill-parent",
      verticalAlignText: "center",
      fontFamily: "Inter",
      fontSize: 8,
      fontWeight: 300,
      strokeWidth: 1.464
    }, nodeInfo.senses[0].parts_of_speech.join("; ")), /* @__PURE__ */ figma.widget.h(Text3, {
      fill: "#000",
      width: "fill-parent",
      verticalAlignText: "center",
      fontFamily: "Inter",
      fontWeight: 500,
      strokeWidth: 3.039
    }, nodeInfo.senses[0].english_definitions[0]))), /* @__PURE__ */ figma.widget.h(Frame2, {
      name: "Frame 11",
      fill: "#5551FF",
      overflow: "visible",
      width: "fill-parent",
      height: 42
    }, /* @__PURE__ */ figma.widget.h(Text3, {
      name: "JLPT N5 // WaniKani Lvl 7",
      x: {
        type: "left-right",
        leftOffset: 0.5,
        rightOffset: -0.5
      },
      y: -0.431,
      fill: "#FFF",
      width: 387,
      height: 42,
      verticalAlignText: "center",
      horizontalAlignText: "center",
      fontFamily: "Inter",
      fontWeight: 300
    }, nodeInfo.jlpt.join("; "))));
  }

  // widget-src/Result.tsx
  var { widget: widget4 } = figma;
  var { AutoLayout: AutoLayout4, Rectangle: Rectangle2, Text: Text4 } = widget4;
  function Result({ resultInfo, index }) {
    const onResultClick = (e, nodeInfo) => __async(this, null, function* () {
      const node = yield figma.createNodeFromJSXAsync(/* @__PURE__ */ figma.widget.h(VocabCard, {
        nodeInfo: resultInfo
      }));
    });
    return /* @__PURE__ */ figma.widget.h(AutoLayout4, {
      name: "SearchBar",
      fill: "#F5F5F5",
      cornerRadius: 8,
      strokeWidth: 1.464,
      overflow: "visible",
      spacing: 32,
      padding: {
        vertical: 16,
        horizontal: 40
      },
      width: 512,
      horizontalAlignItems: "center",
      onClick: (e) => __async(this, null, function* () {
        yield onResultClick(e, resultInfo);
      }),
      key: index
    }, /* @__PURE__ */ figma.widget.h(AutoLayout4, {
      name: "kanji-box",
      overflow: "visible",
      direction: "vertical",
      spacing: 8,
      verticalAlignItems: "center",
      horizontalAlignItems: "center"
    }, /* @__PURE__ */ figma.widget.h(Text4, {
      fill: "#F24E1E",
      verticalAlignText: "center",
      horizontalAlignText: "center",
      fontFamily: "Zen Kaku Gothic Antique",
      fontSize: 12,
      fontWeight: 500,
      strokeWidth: 1.464
    }, resultInfo.japanese[0].reading), /* @__PURE__ */ figma.widget.h(Text4, {
      fill: "#000",
      verticalAlignText: "center",
      horizontalAlignText: "center",
      fontFamily: "Roboto",
      fontSize: 32,
      strokeWidth: 3.039
    }, resultInfo.slug)), /* @__PURE__ */ figma.widget.h(AutoLayout4, {
      name: "Frame 7",
      overflow: "visible",
      direction: "vertical",
      spacing: 8,
      width: "fill-parent",
      height: "fill-parent",
      verticalAlignItems: "center"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout4, {
      name: "definition-box",
      overflow: "visible",
      direction: "vertical",
      width: "fill-parent",
      verticalAlignItems: "center"
    }, /* @__PURE__ */ figma.widget.h(Text4, {
      fill: "#909090",
      verticalAlignText: "center",
      horizontalAlignText: "center",
      fontFamily: "Inter",
      fontSize: 8,
      strokeWidth: 1.464
    }, resultInfo.senses[0].parts_of_speech.join("; ")), /* @__PURE__ */ figma.widget.h(Text4, {
      fill: "#0006",
      verticalAlignText: "center",
      horizontalAlignText: "center",
      fontFamily: "Roboto",
      fontSize: 24,
      strokeWidth: 3.039
    }, resultInfo.senses[0].english_definitions.join("; ")))), /* @__PURE__ */ figma.widget.h(Rectangle2, {
      name: "common-word-signal",
      y: {
        type: "top-bottom",
        topOffset: 0,
        bottomOffset: 0
      },
      positioning: "absolute",
      fill: "#0FA958",
      cornerRadius: {
        topLeft: 8,
        topRight: 0,
        bottomRight: 0,
        bottomLeft: 8
      },
      width: 7,
      height: 95
    }));
  }

  // widget-src/ResultsList.tsx
  var { widget: widget5 } = figma;
  var { AutoLayout: AutoLayout5, Rectangle: Rectangle3, Text: Text5, useSyncedState: useSyncedState2 } = widget5;
  function ResultsList({ results }) {
    return /* @__PURE__ */ figma.widget.h(AutoLayout5, {
      name: "ScrollingResult",
      direction: "vertical",
      padding: {
        vertical: 24,
        horizontal: 0
      },
      width: 550.62,
      horizontalAlignItems: "center"
    }, /* @__PURE__ */ figma.widget.h(AutoLayout5, {
      name: "Frame 4",
      overflow: "scroll",
      direction: "vertical",
      spacing: 16
    }, results.map((result, index) => {
      return /* @__PURE__ */ figma.widget.h(Result, {
        resultInfo: result,
        index
      });
    })));
  }

  // widget-src/Title.tsx
  var { widget: widget6 } = figma;
  var { AutoLayout: AutoLayout6, Text: Text6 } = widget6;
  function Title() {
    return /* @__PURE__ */ figma.widget.h(AutoLayout6, {
      name: "Title",
      fill: "#5551FF",
      strokeWidth: 1.464,
      spacing: 14.644,
      padding: 14.644,
      width: "fill-parent",
      horizontalAlignItems: "center",
      verticalAlignItems: "center"
    }, /* @__PURE__ */ figma.widget.h(Text6, {
      name: "\u65E5\u672C\u8A9E\u30A6\u30A3\u30B8\u30A7\u30C3\u30C8",
      fill: "#FFF",
      verticalAlignText: "center",
      horizontalAlignText: "center",
      fontFamily: "Roboto",
      fontSize: 35.14606857299805,
      fontWeight: 700,
      strokeWidth: 1.464
    }, "\u65E5\u672C\u8A9E \u30A6\u30A3\u30B8\u30A7\u30C3\u30C8"));
  }

  // widget-src/code.tsx
  var { widget: widget7 } = figma;
  var { AutoLayout: AutoLayout7, Ellipse: Ellipse2, Frame: Frame3, Image: Image2, Rectangle: Rectangle4, SVG: SVG2, Text: Text7, Input: Input2, useSyncedState: useSyncedState3 } = widget7;
  function Widget() {
    const [results, setResults] = useSyncedState3("results", []);
    return /* @__PURE__ */ figma.widget.h(Card, null, /* @__PURE__ */ figma.widget.h(Title, null), /* @__PURE__ */ figma.widget.h(SearchBar, {
      setResults
    }), /* @__PURE__ */ figma.widget.h(ResultsList, {
      results
    }));
  }
  widget7.register(Widget);
})();
