import React from "react";

interface BLockProps{
    value ?: string | null;
    onClick : () => void;
}

const Block: React.FC<BLockProps> = (props) => {
  return <div onClick={props.onClick} className="block">{props.value}</div>;
};

export default Block;
