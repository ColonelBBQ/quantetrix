import React from 'react';

const TwoBoxes = ({ classname, text1, text2 }) => {
  return (
    <div className={`containerBoxes${classname}`}>

        <div className={`box1${classname}`}>
            <h2 className={ `box1Title${classname}` }>{ text1 }</h2>
        </div>

        <div className={`box2${classname}`}>
            <h2 className={ `box2Title${classname}` }>{ text2 }</h2>
        </div>

    </div>
  );
}

export default TwoBoxes;
