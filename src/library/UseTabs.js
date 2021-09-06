import React, { useState } from "react";

const contents = [
    {
        tab: "Section 1",
        content: "I'm the content of the Section 1"
    },
    {
        tab: "Section 2",
        content: "I'm the content of the Section 2"
    }
];

const useTabs = (initialTab, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialTab);

    if(!allTabs || !(Array.isArray(allTabs))) return; // allTabs로 받은게 배열이 아니면 리턴
    
    return {
        currentItem: allTabs[currentIndex],
        changeItem: setCurrentIndex
    };
};

function UseTabs() {
  const { currentItem, changeItem } = useTabs(0, contents);
  return (
    <div className="UseTabs">
        <h1>useTabs</h1>
        {contents.map((section, index) => ( //map은 index를 갖고있음
            <button key= {index} onClick={() => changeItem(index)}>{section.tab}</button>
        ))}
        <div>
            {currentItem.content}
        </div>
    </div>
  );
}

export default UseTabs;
