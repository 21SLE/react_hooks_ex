import React, { useState, useEffect } from "react";

const useTitle = (initialTitle) => {
    const [title, setTitle] = useState(initialTitle);
    const updateTitle = () => {
        const htmlTitle = document.querySelector("title");
        htmlTitle.innerText = title;
    }
    useEffect(updateTitle, [title]);
    return setTitle;
}

function UseTitle() {
    const titleUpdater = useTitle("Loading...");
    setTimeout(() => titleUpdater("Home"), 3000);
    return (
        <div className="UseTitle">
            <h1>useTitle</h1>
            <span>Look at the title of this tab!</span>
        </div>
  );
}

export default UseTitle;
