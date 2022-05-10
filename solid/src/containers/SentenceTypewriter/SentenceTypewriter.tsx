import { Component, createSignal, Show } from "solid-js";
import SolidTyper from "../../components/Custom/SolidTyper";

const SentenceTypewriter: Component = () => {
  const [showSentenceIndex, setShowSentenceIndex] = createSignal(0);

  function showNextSentence() {
    setShowSentenceIndex(showSentenceIndex() + 1);
  }
  return (
    <div style={{"font-size": "32px"}}>
      <p>
        <SolidTyper
          onFinish={showNextSentence}
          text="Keep my wife's name out your F*$%@#^ mouth!"
        />
      </p>
      <Show when={showSentenceIndex() > 0}>
        <p>
          <SolidTyper
            onFinish={showNextSentence}
						startDelay={500}
            text="It was a G.I Jane joke..."
          />
        </p>
      </Show>
      <Show when={showSentenceIndex() > 1}>
        <p>
          <SolidTyper  
						startDelay={1200}
						text="Keep... my wife's name... out your... F*$%@#^... mouth!!!" 
					/>
        </p>
      </Show>
    </div>
  );
};

export default SentenceTypewriter;
