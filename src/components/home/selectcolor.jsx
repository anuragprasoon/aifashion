const SelectColor=()=>{
    return(<div className="selectcolor">
        <label className="orange">
  <input type="radio" name="color" value="orange"/>
  <div className="layer"></div>
  <div className="button"><span></span></div>
</label>

<label className="amber">
  <input type="radio" name="color" value="amber"/>
  <div className="layer"></div>
  <div className="button"><span></span></div>
</label>

<label className="lime">
  <input type="radio" name="color" value="lime"/>
  <div className="layer"></div>
  <div className="button"><span></span></div>
</label>

<label className="teal">
  <input type="radio" name="color" value="teal"/>
  <div className="layer"></div>
  <div className="button"><span></span></div>
</label>

<label className="blue">
  <input type="radio" name="color" value="blue"/>
  <div className="layer"></div>
  <div className="button"><span></span></div>
</label>

<label className="indigo">
  <input type="radio" name="color" value="indigo"/>
  <div className="layer"></div>
  <div className="button"><span></span></div>
</label>
</div>
);
}

export default SelectColor;