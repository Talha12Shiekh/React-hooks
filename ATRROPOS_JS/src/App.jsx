import "./App.css";
import Atropos from "atropos/react";

function App() {

  return (
    <div className="center">
      <Atropos
      className="attropos_card"
      // alwaysActive // initially offset hojai ga hover karnay ki zarurat nai paray gi
      // activeOffset={100} // kitna scale hoga hover karnay par
      // duration={1000} // kitni dair main tranistion honi hai
      // rotate={false} // false karnay sai rotate nai hoga hover karnay par
      // rotateTouch={false} // mobile par jab card ko touch karain gay to rotate nai hoga
      // rotateXMax={15} // rotate kitna hoga hover karnay par y axis par
      // rotateYMax={150} // rotate kitna hoga hover karnay par x axis par
      // rotateXInvert // agr true hoga to y axis par rotate ni hoga
      // rotateYInvert // agr true hoga to x axis par rotate ni hoga
      // shadow={false} // shadow ni dikahi gi
      // shadowOffset={100} // zyada offset karo gay to shadow kam nazar ai gi
      // shadowScale={1} // jitni shadow zyada hogi hover karnay par
      // highlight={true}
      // onEnter={() => alert("Entered")} // jab hover karain gay tab fire hoga
      // onLeave={() => alert("Leaved")} // jab leave karain gay tab fire hoga
      // onRotate={(x,y) => console.log(x,y)} // jab rotate karo gay to fire hoga
      // rotateChildren={<h1>Talha shiekh</h1>} // root element main add hojai ga
      // scaleChildren={<h1>Scale Component</h1>} // scale element main add hojai ga sirf scale karnay par us ko effect hoga warna hover karnay par rotate wagaira ni hoga
      // rotateChildren={<h1>Rotate Component</h1>} // rotate element main add hojai ga sirf rotate karnay par us ko effect hoga warna hover karnay par rotate wagaira ni hoga
      >
        <div className="card">
      
      <h1>Hello World</h1>
          <p data-atropos-opacity="0.1;0.8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            vel qui quae esse voluptates saepe mollitia illo nisi eos, dolorum
            perspiciatis corporis vero officia ad sint repellat suscipit laborum
            dignissimos ullam debitis, ipsa praesentium?
          </p>
          <div className="btns">
            <button data-atropos-offset="-10">Click Me</button>
            <button data-atropos-offset="10">Visit me</button>
          </div>
        </div>
      </Atropos>
    </div>
  );
}

export default App;
